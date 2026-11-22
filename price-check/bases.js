/* Store Price Check (iPhone / web) — loads the bases (Excel files listed in bases/list.json) before the app starts.
   The small local server (tools/server.ps1) lists the files at /api/bases and serves them at /bases/<file>.
   Formats are recognised by their column headers, so file names do not matter:
     US site:      Название | Цвет | Баркод (UPC) | Цена, USD | В наличии | Категория
     EU site:      Название NL | Название EN | Цвет (NL) | Цвет (EN) | Баркод (UPC) | Цена EUR | Цена USD | В наличии | Категория
     EU (old):     Название (NL-сайт) | Цвет | Баркод (UPC) | Цена EUR | Старая цена EUR | Примечание
   Several files of one kind are merged by barcode (a later file name wins).
   If the server is not running (app opened as a plain file), the bases built into app.js are used. */
(function(){
  const NL2EN = {"ZWART":"Black","CHOCOLADE":"Chocolate","LUGGAGE":"Luggage","LODEN":"Loden","VANILLE/EIKELBRUIN":"Vanilla/Acorn","DIEPROOD":"Deep Red","BRUIN/EIKELBRUIN":"Brn/Acorn","GROENGEEL":"Chartreuse","MOSGROEN":"Moss","EIERSCHAAL":"Eggshell","STEENGRIJS":"Heather Grey","KAKI":"Khaki","MIDDERNACHTSBLAUW":"Midnight","NIKKEL":"Nickel","GOUD":"Gold","BRUIN KORENBLOEM":"Brown/Cornflower","BRUIN/LUGGAGE":"Brown/Luggage","ADMIRAALBLAUW":"Admiral","BALLET":"Ballet","VANILLE/LUGGAGE":"Vanilla/Luggage","GRENADINE":"Grenadine","PRUISISCH BLAUW":"Prussian Blue","ZWART COMBO":"Black Combo","ZILVER":"Silver","PRIMULA":"Primrose","KLIMOPGROEN":"Ivy","ZWART/ZILVER":"Black/Silver","[3740]":"Burnt Khaki"};
  const NLCAT = {"Schoudertassen":"Shoulder Bags","Crossbodytassen":"Crossbody Bags","Clutches en polstasjes":"Clutches & Wristlets","Handtassen":"Handbags","Draagtassen":"Totes","Boekentassen":"Book Bags"};
  const USCAT = {"Crossbodies & Messengers":"Crossbody Bags","Duffles, Luggage & Travel":"Duffles & Luggage"};
  const cap = w => w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w;
  const tc = s => String(s).split(" ").map(w => w.split("/").map(cap).join("/")).join(" ");
  const nlColour = s => s === "[3740]" ? "Burnt khaki" : String(s).toLowerCase().split("/").map(cap).join("/");
  const upcOf = v => { if (v == null) return ""; let s = typeof v === "number" ? v.toFixed(0) : String(v); s = s.trim().replace(/\.0+$/, "").replace(/\s+/g, ""); return /^\d{6,14}$/.test(s) ? s : ""; };
  const num = v => v == null || v === "" ? null : (typeof v === "number" ? v : (isNaN(+String(v).replace(",", ".")) ? null : +String(v).replace(",", ".")));
  const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return "b" + (h >>> 0).toString(36); };
  const start = () => { const s = document.createElement("script"); s.src = "app.js"; document.body.appendChild(s); };

  async function load(){
    const r = await fetch("bases/list.json", {cache:"no-cache"});
    if (!r.ok) throw new Error("no list");
    const files = (await r.json()).filter(f => f && /\.xlsx$/i.test(f.name) && !/^~\$/.test(f.name)).sort((a, b) => a.name.localeCompare(b.name));
    const us = new Map(), eu = new Map(), euOld = {}, report = [];
    for (const f of files) {
      let rows;
      try {
        const buf = await (await fetch("bases/" + encodeURIComponent(f.name), {cache:"no-cache"})).arrayBuffer();
        const wb = XLSX.read(buf, {type:"array"});
        rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1, defval:null, raw:true});
      } catch(e) { report.push({file:f.name, kind:"error", rows:0}); continue; }
      if (!rows.length) continue;
      const h = rows[0].map(x => String(x == null ? "" : x).trim());
      const col = re => h.findIndex(x => re.test(x));
      const cUpc = col(/UPC|Баркод|Barcode/i);
      if (cUpc < 0) { report.push({file:f.name, kind:"unknown", rows:0}); continue; }
      const body = rows.slice(1);
      if (col(/Старая цена/i) >= 0) {                       // old partial EU table: current + previous price
        const cE = col(/^Цена EUR/i), cO = col(/Старая цена/i); let n = 0;
        body.forEach(r => { const u = upcOf(r[cUpc]); if (u && num(r[cE]) != null) { euOld[u] = [num(r[cE]), num(r[cO])]; n++; } });
        report.push({file:f.name, kind:"EU (old)", rows:n});
      } else if (col(/^Название NL/i) >= 0 || col(/^Цвет \(NL\)/i) >= 0) {   // EU site table
        const cNl = col(/^Название NL/i), cEn = col(/^Название EN/i), cCn = col(/^Цвет \(NL\)/i), cCe = col(/^Цвет \(EN\)/i),
              cE = col(/^Цена EUR/i), cU = col(/Цена,? ?USD/i), cSt = col(/наличии|stock/i), cCat = col(/Категория|Category/i);
        const twin = {}; body.forEach(r => { if (r[cNl] && cEn >= 0 && r[cEn]) twin[r[cNl]] = twin[r[cNl]] || String(r[cEn]); });
        let n = 0;
        body.forEach(r => { const u = upcOf(r[cUpc]), e = num(r[cE]); if (!u || e == null) return;
          const nl = r[cNl] ? String(r[cNl]) : "", en = (cEn >= 0 && r[cEn]) ? String(r[cEn]) : (twin[nl] || "");
          const cn = cCn >= 0 && r[cCn] ? String(r[cCn]).trim() : "", ce = cCe >= 0 && r[cCe] ? String(r[cCe]).trim() : "";
          const cat = cCat >= 0 && r[cCat] ? String(r[cCat]).trim() : "";
          eu.set(u, [u, e, nl || en, cn ? nlColour(cn) : "", en, ce ? tc(ce) : (NL2EN[cn.toUpperCase()] || (cn ? tc(cn) : "")), num(r[cU]),
            cSt >= 0 && /^(нет|no|0|false)$/i.test(String(r[cSt] || "").trim()) ? 0 : 1, NLCAT[cat] || cat]);
          n++; });
        report.push({file:f.name, kind:"EU site", rows:n});
      } else {                                                // US site table
        const cN = col(/^Название|^Name/i), cC = col(/^Цвет|^Colou?r/i), cU = col(/USD/i), cCat = col(/Категория|Category/i); let n = 0;
        body.forEach(r => { const u = upcOf(r[cUpc]); if (!u || !r[cN]) return;
          const cat = cCat >= 0 && r[cCat] ? String(r[cCat]).trim() : "";
          us.set(u, [u, String(r[cN]), r[cC] ? tc(r[cC]) : "", USCAT[cat] || cat, num(r[cU])]); n++; });
        report.push({file:f.name, kind:"US site", rows:n});
      }
    }
    if (!us.size && !eu.size) throw new Error("no bases");
    const usA = [...us.values()], euA = [...eu.values()];
    window.__BASES = { us: usA.length ? usA : null, eu: euA.length ? euA : null, euOld: Object.keys(euOld).length ? euOld : null,
      euV: hash(JSON.stringify(euA) + JSON.stringify(euOld)), baseV: hash(usA.map(x => x[0]).join() + "|" + euA.map(x => x[0]).join()), report };
  }
  load().catch(e => { window.__BASES = null; window.__BASES_ERR = String(e && e.message || e); }).then(start);
})();
