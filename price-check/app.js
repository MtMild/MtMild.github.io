try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch(e) {}
"use strict";
/* ---------- icons ---------- */
const I = {
  scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 8v8M10 8v8M13 8v8M17 8v8"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.6"/></svg>',
  printList:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 3.5V5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3.5"/><path d="M9 10.5h6M9 14h6M9 17.5h3.5"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  printPlus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M6 9V3h9M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h9"/><path d="M6 14h10v7H6z"/><path class="pl" d="M19 4v8M15 8h8"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><path d="M6 14h12v7H6z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 6h12v10H2zM14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  undo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>',
  kbd:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  percent:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5h.01"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
  barcode:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 5v14M7 5v14M11 5v14M14 5v14M17 5v14M20 5v14"/></svg>',
  // product category glyphs
  bag:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M9 16h30l-3 26H12z"/><path d="M17 20v-6a7 7 0 0 1 14 0v6"/></svg>',
  wallet:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="6" y="12" width="36" height="26" rx="4"/><path d="M30 22h12v8H30a4 4 0 0 1 0-8z"/><path d="M10 12l20-6 3 6"/></svg>',
  watch:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="24" cy="24" r="11"/><path d="M18 14l2-9h8l2 9M18 34l2 9h8l2-9M24 18v6l4 3"/></svg>',
  shoe:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M5 34V16h10l4 8 12 3c6 1.5 12 3 12 7v4H5z"/><path d="M5 34h38"/></svg>',
  shirt:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M17 6l-11 7 5 8 4-2v23h18V19l4 2 5-8-11-7c-1 4-4 6-7 6s-6-2-7-6z"/></svg>',
  belt:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M3 19h42v10H3z"/><rect x="16" y="15" width="12" height="18" rx="2"/><path d="M22 24h8"/></svg>'
};
const CAT = {
  bag:{name:"Bags",bg:"#f1ece4",fg:"#8a6a3a"}, wallet:{name:"Wallets",bg:"#f1ece4",fg:"#8a6a3a"},
  watch:{name:"Watches",bg:"#f1ece4",fg:"#8a6a3a"}, shoe:{name:"Shoes",bg:"#f1ece4",fg:"#8a6a3a"},
  shirt:{name:"Apparel",bg:"#f1ece4",fg:"#8a6a3a"}, belt:{name:"Accessories",bg:"#f1ece4",fg:"#8a6a3a"}
};

/* ---------- catalog: built by the user, saved on this device ---------- */
const DAY = 864e5, today = new Date(); today.setHours(0,0,0,0);
// Starter items transcribed from tags (prices and stock are filled in by the user)
const SEED = [
 ["35S5G2ZS3T","197853428232","Carson","bag","Black"],
 ["35S5G2ZS5T","197853428430","Carson","bag","Black"],
 ["35F6S2ZS3S","199125589214","Carson","bag","Amazon Green"],
 ["35S6G2ZC1B","199125142884","Carson","bag","Vanilla"],
 ["35F6S7RM8L","199125589788","Roey","bag","Maroon"],
 ["35R6GV6T7B","199125032956","Voyager","bag","Black"],
 ["35R6GV6T7L","199125590562","Voyager","bag","Nutmeg"]
].map(r => ({no:r[0], ean:r[1], name:r[2], cat:r[3], color:r[4], size:"", orig:null, outlet:null, price:null, promo:null, future:null, stock:null}));
const CATALOG_TYPES = ["Backpacks & Belt Bags", "Clutches & Wristlets", "Crossbody Bags", "Duffles & Luggage", "Satchels", "Shoulder Bags", "Totes"];
const CATALOG_EMBED = [["199125173352","Athena Small Leather Convertible Clutch","Black",1,199.5],["199125173390","Athena Small Metallic Leather Convertible Clutch","Pale Gold",1,199.5],["199125174649","Athena Small Metallic Leather Convertible Clutch","Silver",1,199.5],["199125670189","Bev Large Signature Logo Crossbody Bag","Black",2,109],["199125668186","Bev Large Signature Logo Crossbody Bag","Brn/Acorn",2,109],["199125668193","Bev Large Signature Logo Crossbody Bag","Burnt Khaki",2,109],["199125668223","Bev Large Signature Logo Crossbody Bag","Deep Red",2,109],["199125668162","Bev Large Signature Logo Crossbody Bag","Vanilla/Acorn",2,109],["199125668179","Bev Large Signature Logo Crossbody Bag","Vanilla/Soft Pink",2,109],["199125670523","Bryant Extra-Small Faux Fur Convertible Pochette","Black",2,159.5],["199125660074","Bryant Large Leather Convertible Shoulder Bag","Chocolate",5,299.5],["199125659993","Bryant Large Textured Leather Convertible Shoulder Bag","Black",5,299.5],["199125660043","Bryant Large Textured Leather Convertible Shoulder Bag","Chartreuse",5,179],["199125660029","Bryant Large Textured Leather Convertible Shoulder Bag","Chocolate",5,299.5],["199125660036","Bryant Large Textured Leather Convertible Shoulder Bag","Loden",5,179],["199125660012","Bryant Large Textured Leather Convertible Shoulder Bag","Luggage",5,299.5],["197853463868","Bryant Medium Pebbled Leather Camera Crossbody Bag","Black",2,189.5],["197853463875","Bryant Medium Pebbled Leather Camera Crossbody Bag","Luggage",2,189.5],["197853731325","Bryant Medium Signature Logo Camera Crossbody Bag","Ballet",2,189.5],["197853463806","Bryant Medium Signature Logo Camera Crossbody Bag","Brn/Acorn",2,189.5],["199125670974","Bryant Medium Signature Logo Camera Crossbody Bag","Deep Red",2,189.5],["199125447651","Bryant Medium Signature Logo Camera Crossbody Bag","Loden",2,95],["199125671148","Bryant Medium Signature Logo Camera Crossbody Bag","Moss",2,189.5],["197853463790","Bryant Medium Signature Logo Camera Crossbody Bag","Vanilla/Acorn",2,189.5],["199125665581","Bryant Small Leather Convertible Crossbody Bag","Chocolate",2,159.5],["199125659986","Bryant Small Leather Convertible Shoulder Bag","Chocolate",5,229.5],["199125688160","Bryant Small Leather Crossbody Bag","Black",2,199.5],["199125688177","Bryant Small Leather Crossbody Bag","Loden",2,140],["199125665543","Bryant Small Leopard Print Calf Hair Convertible Crossbody Bag","Burnt Khaki",2,229.5],["199125665550","Bryant Small Logo Embossed Suede Convertible Crossbody Bag","Burnt Khaki",2,109],["199125665567","Bryant Small Logo Embossed Suede Convertible Crossbody Bag","Chocolate",2,109],["199125667363","Bryant Small Pebbled Leather Crossbody Bag","Black",2,159.5],["199125667370","Bryant Small Pebbled Leather Crossbody Bag","Luggage",2,159.5],["199125682328","Bryant Small Signature Logo Convertible Shoulder Bag","Brn/Acorn",5,229.5],["199125682311","Bryant Small Signature Logo Convertible Shoulder Bag","Vanilla/Acorn",5,229.5],["199125667301","Bryant Small Signature Logo Crossbody Bag","Brn/Acorn",2,159.5],["199125667295","Bryant Small Signature Logo Crossbody Bag","Vanilla/Acorn",2,159.5],["199125667325","Bryant Small Suede Convertible Crossbody Bag","Chartreuse",2,99],["199125667332","Bryant Small Suede Convertible Crossbody Bag","Deep Red",2,159.5],["199125667318","Bryant Small Suede Convertible Crossbody Bag","Loden",2,99],["199125662641","Bryant Small Suede Convertible Shoulder Bag","Black",5,229.5],["199125659955","Bryant Small Suede Convertible Shoulder Bag","Chartreuse",5,139],["199125659931","Bryant Small Suede Convertible Shoulder Bag","Chocolate",5,229.5],["199125659979","Bryant Small Suede Convertible Shoulder Bag","Deep Red",5,229.5],["199125659948","Bryant Small Suede Convertible Shoulder Bag","Loden",5,139],["199125659924","Bryant Small Suede Convertible Shoulder Bag","Luggage",5,229.5],["199125888690","Bryant Small Textured Leather Pochette","Black",1,179.5],["199125888720","Bryant Small Textured Leather Pochette","Chocolate",1,179.5],["199125888706","Bryant Small Textured Leather Pochette","Khaki",1,179.5],["199125888713","Bryant Small Textured Leather Pochette","Luggage",1,179.5],["199125662771","Darla Small Silver-Tone Star Convertible Clutch","Sh Rhodium",1,199.5],["199125660302","Ellie Large Pebbled Leather Shoulder Bag","Black",5,239],["199125660333","Ellie Large Pebbled Leather Shoulder Bag","Deep Red",5,239],["199125660296","Ellie Large Signature Logo Shoulder Bag","Brn/Acorn",5,239],["199125660289","Ellie Large Signature Logo Shoulder Bag","Vanilla/Acorn",5,239],["199125660357","Ellie Large Suede Shoulder Bag","Chocolate",5,239],["199125660364","Ellie Large Suede Shoulder Bag","Loden",5,239],["199125660340","Ellie Large Suede Shoulder Bag","Luggage",5,239],["199125663426","Goldie Large Faux Fur Clutch","Black",1,399.5],["199125662825","Goldie Large Leather Clutch","Black",1,299.5],["199125662849","Goldie Large Studded Leather Clutch","Black",1,399.5],["199125872866","Goldie Small Leather Convertible Clutch","Black",1,229.5],["199125872897","Goldie Small Metallic Leather Convertible Clutch","Pale Gold",1,229.5],["199125665482","Hamilton Extra-Small Burnished Leather Convertible Crossbody Bag","Chocolate",2,199.5],["199125665475","Hamilton Extra-Small Leather and Leopard Print Calf Hair Soft Crossbody Bag","Burnt Khaki",2,299.5],["197853988408","Hamilton Extra-Small Leather Convertible Crossbody Bag","Black",2,179.5],["199125664966","Hamilton Extra-Small Leather Convertible Crossbody Bag","Deep Red",2,179.5],["199125447125","Hamilton Extra-Small Leather Convertible Crossbody Bag","Eggshell",2,179.5],["197853988422","Hamilton Extra-Small Leather Convertible Crossbody Bag","Luggage",2,179.5],["199125667004","Hamilton Extra-Small Leather Crossbody Bag","Black",2,179.5],["199125667035","Hamilton Extra-Small Leather Crossbody Bag","Chocolate",2,179.5],["199125667080","Hamilton Extra-Small Leather Crossbody Bag","Deep Red",2,179.5],["199125667042","Hamilton Extra-Small Leather Crossbody Bag","Loden",2,179.5],["199125667028","Hamilton Extra-Small Leather Crossbody Bag","Luggage",2,179.5],["199125665444","Hamilton Extra-Small Leopard Print Calf Hair Convertible Crossbody Bag","Burnt Khaki",2,229.5],["197853988378","Hamilton Extra-Small Signature Logo Convertible Crossbody Bag","Brn/Acorn",2,179.5],["199125449709","Hamilton Extra-Small Signature Logo Convertible Crossbody Bag","Khaki",2,179.5],["197853988361","Hamilton Extra-Small Signature Logo Convertible Crossbody Bag","Vanilla/Acorn",2,179.5],["199125666991","Hamilton Extra-Small Signature Logo Crossbody Bag","Brn/Acorn",2,179.5],["199125666984","Hamilton Extra-Small Signature Logo Crossbody Bag","Vanilla/Acorn",2,179.5],["199125872965","Hamilton Extra-Small Signature Logo Soft Crossbody Bag","Brn/Acorn",2,199.5],["199125872958","Hamilton Extra-Small Signature Logo Soft Crossbody Bag","Vanilla/Acorn",2,199.5],["199125665390","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Black",2,199.5],["199125665420","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Chocolate",2,199.5],["199125665437","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Deep Red",2,199.5],["199125665413","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Luggage",2,199.5],["199125897425","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Optic White",2,199.5],["199125670608","Hamilton Extra-Small Washed Denim Convertible Crossbody Bag","Graphite",2,259.5],["199125660425","Hamilton Large Leather Tote Bag","Black",6,299.5],["199125660456","Hamilton Large Leather Tote Bag","Chocolate",6,299.5],["199125660432","Hamilton Large Leather Tote Bag","Luggage",6,299.5],["199125659740","Hamilton Large Textured Leather Soft Satchel","Black",4,359.5],["199125659771","Hamilton Large Textured Leather Soft Satchel","Chocolate",4,359.5],["199125659757","Hamilton Large Textured Leather Soft Satchel","Eggshell",4,359.5],["199125659764","Hamilton Large Textured Leather Soft Satchel","Luggage",4,359.5],["199125665918","Hamilton Moderne Extra-Small Washed Denim Convertible Crossbody Bag","Lt Vtblu Wsh",2,259.5],["199125897401","Hamilton Moderne Large Textured Leather Satchel","Optic White",4,359.5],["199125659801","Hamilton Small Burnished Leather Satchel","Chocolate",5,359.5],["199125444940","Hamilton Small Color-Blocked Leather Satchel","Khaki Multi",5,105.99],["199125444957","Hamilton Small Color-Blocked Leather Satchel","Loden Multi",5,105.99],["197853988880","Hamilton Small Leather Satchel","Black",5,279.5],["197853988903","Hamilton Small Leather Satchel","Luggage",5,279.5],["197853988859","Hamilton Small Signature Logo Satchel","Brn/Acorn",5,279.5],["197853988842","Hamilton Small Signature Logo Satchel","Vanilla/Acorn",5,279.5],["199125663471","Hamilton Small Washed Denim Satchel","Graphite",5,309],["199125660180","Hamilton Small Washed Denim Satchel","Lt Vtblu Wsh",5,309],["199125339314","Henly Large Leather and Suede Tote Bag","Black",6,159],["199125445978","Henly Large Leather and Suede Tote Bag","Loden",6,159],["199125339321","Henly Large Leather and Suede Tote Bag","Luggage",6,159],["199125324846","Henly Large Signature Logo and Textured Tote Bag","Chocolate",6,159],["199125445961","Henly Large Signature Logo and Textured Tote Bag","Eggshell",6,159],["199125466874","Holmes Extra-Large Pebbled Leather Convertible Messenger Bag","Black",2,399.5],["199125441338","Holmes Extra-Large Pebbled Leather Convertible Messenger Bag","Loden",2,280],["199125441321","Holmes Extra-Large Pebbled Leather Convertible Messenger Bag","Luggage",2,399.5],["199125444360","Holmes Medium Pebbled Leather Convertible Messenger Bag","Black",2,299.5],["199125444377","Holmes Medium Pebbled Leather Convertible Messenger Bag","Khaki",2,299.5],["199125444407","Holmes Medium Pebbled Leather Convertible Messenger Bag","Loden",2,299.5],["199125444391","Holmes Medium Pebbled Leather Convertible Messenger Bag","Luggage",2,299.5],["199125655346","Hudson Burnished Leather Backpack","Chocolate",0,399.5],["199125655360","Hudson Medium Burnished Leather Sling Bag","Chocolate",2,199.5],["199125441369","Hudson Medium Signature Logo Sling Bag","Black",2,199.5],["199125441376","Hudson Medium Signature Logo Sling Bag","Brown/Luggage",2,199.5],["199125655988","Hudson Medium Signature Logo Sling Bag","Deep Red",2,199.5],["197853724891","Hudson Mini Signature Logo Flight Bag","Black",2,199.5],["197853724907","Hudson Mini Signature Logo Flight Bag","Bright Wht",2,140],["199125319217","Hudson Mini Signature Logo Flight Bag","Brown/Luggage",2,199.5],["199125655377","Hudson Mini Signature Logo Flight Bag","Loden",2,140],["199125655940","Hudson Mini Signature Logo Flight Bag","Nickel",2,199.5],["199125655414","Hudson Mini Suede Messenger Bag","Chocolate",2,199.5],["199125655407","Hudson Mini Suede Messenger Bag","Luggage",2,199.5],["199125887044","Hudson Signature Logo Camera Crossbody Bag","Admirl Multi",2,169.5],["197853951136","Hudson Signature Logo Camera Crossbody Bag","Black",2,169.5],["197853951143","Hudson Signature Logo Camera Crossbody Bag","Bright Wht",2,119],["197853951150","Hudson Signature Logo Camera Crossbody Bag","Brown/Blk",2,119],["199125339222","Hudson Signature Logo Camera Crossbody Bag","Brown/Luggage",2,169.5],["199125655278","Hudson Signature Logo Camera Crossbody Bag","Deep Red",2,168],["199125655353","Hudson Signature Logo Camera Crossbody Bag","Loden",2,119],["199125655261","Hudson Signature Logo Camera Crossbody Bag","Nickel",2,168],["199125655636","Hudson Signature Logo Messenger Bag","Black",2,169.5],["199125655650","Hudson Signature Logo Messenger Bag","Deep Red",2,169.5],["199125655384","Hudson Signature Logo Messenger Bag","Loden",2,102],["199125655643","Hudson Signature Logo Messenger Bag","Nickel",2,169.5],["196237692580","Hudson Signature Logo Sling Bag","Black",2,199.5],["199125168150","Hudson Signature Logo Sling Bag","Brown/Luggage",2,199.5],["199125665819","Izzy Small Leather Barrel Pochette","Chocolate",1,129.5],["199125669923","Izzy Small Metallic Pochette","Silver",1,129.5],["199125669947","Izzy Small Nubuck Barrel Pochette","Heather Grey",1,129.5],["199125450255","Izzy Small Nubuck Barrel Pochette","Khaki",1,129.5],["199125669954","Izzy Small Nubuck Barrel Pochette","Moss",1,129.5],["199125180503","Izzy Small Pebbled Leather Barrel Pochette","Black",1,129.5],["199125671575","Izzy Small Pebbled Leather Barrel Pochette","Deep Red",1,129.5],["199125180435","Izzy Small Signature Logo Barrel Pochette","Brn/Acorn",1,129.5],["199125450316","Izzy Small Signature Logo Barrel Pochette","Loden",1,59],["199125180428","Izzy Small Signature Logo Barrel Pochette","Vanilla/Acorn",1,129.5],["199125669930","Izzy Small Zebra Print Calf Hair Pochette","Black Combo",1,179.5],["199125448108","Jana Extra-Small Leather Convertible Crossbody Bag","Black",2,159.5],["199125672237","Jana Extra-Small Leather Convertible Crossbody Bag","Chocolate",2,159.5],["199125671445","Jana Extra-Small Leather Convertible Crossbody Bag","Deep Red",2,159.5],["199125448870","Jana Extra-Small Leather Convertible Crossbody Bag","Khaki",2,159.5],["199125066005","Jana Extra-Small Leather Crossbody Bag","Black",2,159.5],["199125669633","Jana Extra-Small Metallic Leather Crossbody Bag","Silver",2,159.5],["199125667219","Jana Extra-Small Paillette Embellished Crossbody Bag","Black",2,199.5],["197853984509","Jana Extra-Small Signature Logo Convertible Crossbody Bag","Black",2,159.5],["197853981041","Jana Extra-Small Signature Logo Convertible Crossbody Bag","Brown/Blk",2,159.5],["197853981027","Jana Extra-Small Signature Logo Convertible Crossbody Bag","Vanilla/Acorn",2,159.5],["199125669664","Jana Extra-Small Studded Satin Crossbody Bag","Black",2,259.5],["199125669640","Jana Extra-Small Zebra Print Calf Hair Crossbody Bag","Black Combo",2,199.5],["199125666816","Jet Set 3-in-1 Leather Pouches","Deep Red",1,159.5],["199125666854","Jet Set 3-in-1 Smooth and Signature Logo Pouches","Brn/Acorn",1,159.5],["199125666847","Jet Set 3-in-1 Smooth and Signature Logo Pouches","Vanilla/Acorn",1,159.5],["196237159571","Jet Set Large Nylon Gabardine Crossbody Bag","Black",2,89],["196237159588","Jet Set Large Nylon Gabardine Crossbody Bag","Navy",2,89],["199125065763","Jet Set Large Signature Logo Continental Crossbody Bag","Rosewood",2,158],["199125179408","Jet Set Medium Leather Convertible Crossbody Bag","Black",2,199.5],["199125671391","Jet Set Medium Leather Convertible Crossbody Bag","Chocolate",2,199.5],["199125671438","Jet Set Medium Leather Convertible Crossbody Bag","Deep Red",2,199.5],["199125448030","Jet Set Medium Leather Convertible Crossbody Bag","Loden",2,199.5],["199125671759","Jet Set Medium Leather Crossbody Bag","Heather Grey",2,199.5],["199125671735","Jet Set Medium Pebbled Leather Convertible Wristlet","Heather Grey",1,129.5],["199125179286","Jet Set Medium Pebbled Leather Smartphone Wristlet","Black",1,129.5],["199125671353","Jet Set Medium Pebbled Leather Smartphone Wristlet","Chocolate",1,129.5],["199125179316","Jet Set Medium Pebbled Leather Smartphone Wristlet","Luggage",1,129.5],["199125179309","Jet Set Medium Pebbled Leather Smartphone Wristlet","Soft Pink",1,129.5],["197853979833","Jet Set Medium Pebbled Leather Wristlet","Black",1,79.5],["199125179392","Jet Set Medium Signature Logo Convertible Crossbody Bag","Brn/Acorn",2,199.5],["199125179385","Jet Set Medium Signature Logo Convertible Crossbody Bag","Vanilla/Acorn",2,199.5],["199125671346","Jet Set Medium Signature Logo Convertible Wristlet","Deep Red",1,129.5],["199125448009","Jet Set Medium Signature Logo Convertible Wristlet","Loden",1,79],["199125179279","Jet Set Medium Signature Logo Smartphone Wristlet","Brn/Acorn",1,129.5],["199125179262","Jet Set Medium Signature Logo Smartphone Wristlet","Vanilla/Soft Pink",1,129.5],["197853979819","Jet Set Medium Signature Logo Wristlet","Brn/Acorn",1,79.5],["197853979802","Jet Set Medium Signature Logo Wristlet","Vanilla/Acorn",1,79.5],["199125168556","Jet Set Pebbled Leather Backpack","Black",0,399.5],["199125441161","Jet Set Pebbled Leather Backpack","Luggage",0,399.5],["199125168464","Jet Set Pebbled Leather Briefcase","Black",3,299.5],["199125168471","Jet Set Pebbled Leather Briefcase","Luggage",3,299.5],["199125441451","Jet Set Pebbled Leather Crossbody Bag","Black",2,199.5],["199125441291","Jet Set Pebbled Leather Crossbody Bag","Loden",2,140],["199125441468","Jet Set Pebbled Leather Crossbody Bag","Luggage",2,199.5],["199125168525","Jet Set Signature Logo Backpack","Black",0,399.5],["199125168532","Jet Set Signature Logo Backpack","Brown/Luggage",0,399.5],["199125168594","Jet Set Signature Logo Crossbody Bag","Black",2,199.5],["199125168600","Jet Set Signature Logo Crossbody Bag","Brown/Luggage",2,199.5],["197853978546","Jet Set Small Leather Camera Crossbody Bag","Black",2,79],["197853978584","Jet Set Small Leather Camera Crossbody Bag","Chocolate",2,79],["199125446753","Jet Set Small Leather Camera Crossbody Bag","Loden",2,79],["199125668964","Jet Set Small Leather Smartphone Crossbody Bag","Moss",2,129.5],["196237159403","Jet Set Small Nylon Gabardine Smartphone Crossbody Bag","Black",2,129.5],["196237159410","Jet Set Small Nylon Gabardine Smartphone Crossbody Bag","Navy",2,129.5],["199125179088","Jet Set Small Pebbled Leather Card Case Wristlet","Black",1,39],["199125671308","Jet Set Small Pebbled Leather Card Case Wristlet","Chartreuse",1,39],["199125671292","Jet Set Small Pebbled Leather Card Case Wristlet","Chocolate",1,39],["199125671339","Jet Set Small Pebbled Leather Card Case Wristlet","Deep Red",1,39],["199125447965","Jet Set Small Pebbled Leather Card Case Wristlet","Khaki",1,39],["199125447972","Jet Set Small Pebbled Leather Card Case Wristlet","Loden",1,39],["199125179101","Jet Set Small Pebbled Leather Card Case Wristlet","Luggage",1,39],["199125666328","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Black",2,129.5],["199125178623","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Black",2,159.5],["199125666380","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Chartreuse",2,79],["199125666410","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Deep Red",2,129.5],["199125666373","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Loden",2,79],["199125666342","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Luggage",2,129.5],["199125178647","Jet Set Small Pebbled Leather Smartphone Crossbody Bag","Luggage",2,159.5],["197853978423","Jet Set Small Signature Logo Camera Crossbody Bag","Brn/Acorn",2,79],["197853978416","Jet Set Small Signature Logo Camera Crossbody Bag","Vanilla/Acorn",2,79],["199125065565","Jet Set Small Signature Logo Camera Crossbody Bag","Vanilla/Soft Pink",2,79],["199125179026","Jet Set Small Signature Logo Card Case Wristlet","Brn/Acorn",1,39],["199125179019","Jet Set Small Signature Logo Card Case Wristlet","Vanilla/Acorn",1,39],["199125671261","Jet Set Small Signature Logo Convertible Crossbody Bag","Deep Red",2,79],["199125671704","Jet Set Small Signature Logo Convertible Crossbody Bag","Heather Grey",2,79],["199125666298","Jet Set Small Signature Logo Smartphone Crossbody Bag","Brn/Acorn",2,129.5],["199125178746","Jet Set Small Signature Logo Smartphone Crossbody Bag","Brn/Acorn",2,159.5],["199125666281","Jet Set Small Signature Logo Smartphone Crossbody Bag","Vanilla/Acorn",2,129.5],["199125178739","Jet Set Small Signature Logo Smartphone Crossbody Bag","Vanilla/Soft Pink",2,159.5],["199125173116","Jet Set Travel Extra-Large Signature Logo Weekender Bag","Brn/Acorn",3,209],["199125173109","Jet Set Travel Extra-Large Signature Logo Weekender Bag","Vanilla/Soft Pink",3,209],["199125659849","Jet Set Travel Extra-Large Suede Tote Bag","Burnt Khaki",6,219],["199125659856","Jet Set Travel Extra-Large Suede Tote Bag","Chocolate",6,219],["199125659818","Jet Set Travel Medium Logo Embossed Suede Duffel Crossbody Bag","Burnt Khaki",4,199],["199125659825","Jet Set Travel Medium Logo Embossed Suede Duffel Crossbody Bag","Chocolate",4,199],["199125659832","Jet Set Travel Medium Logo Embossed Suede Duffel Crossbody Bag","Loden",4,199],["199125662528","Jet Set Travel Medium Pebbled Leather Tote Bag","Moss",6,139],["199125682304","Jet Set Travel Medium Signature Logo Tote Bag","Heather Grey",6,139],["199125686692","Jet Set Travel Medium Signature Logo Tote Bag","Loden",6,139],["199125443615","Josie Medium Whipstitched Suede Saddle Bag","Khaki",2,299.5],["199125443622","Josie Medium Whipstitched Suede Saddle Bag","Loden",2,299.5],["199125171914","Josie Medium Whipstitched Suede Saddle Bag","Luggage",2,299.5],["199125670530","Laila Extra-Small Faux Fur Crossbody Bag","Black",2,279.5],["197853981942","Laila Extra-Small Leather Crossbody Bag","Black",2,179.5],["199125665055","Laila Extra-Small Leather Crossbody Bag","Chartreuse",2,149],["199125665079","Laila Extra-Small Leather Crossbody Bag","Deep Red",2,179.5],["199125665277","Laila Extra-Small Leather Crossbody Bag","Heather Grey",2,179.5],["199125665048","Laila Extra-Small Leather Crossbody Bag","Loden",2,149],["199125449266","Laila Extra-Small Pebbled Leather Convertible Crossbody Bag","Luggage",2,169],["197853981935","Laila Extra-Small Signature Logo Crossbody Bag","Brn/Acorn",2,179.5],["197853981928","Laila Extra-Small Signature Logo Crossbody Bag","Vanilla/Acorn",2,179.5],["197853988347","Laila Extra-Small Signature Logo Crossbody Bag","Vanilla/Soft Pink",2,179.5],["199125668544","Laila Extra-Small Suede Convertible Crossbody Bag","Chocolate",2,179.5],["199125670370","Laila Extra-Small Suede Crossbody Bag","Moss",2,179.5],["199125659665","Laila Medium Color-Block Leather Satchel","Heather Grey",4,279.5],["199125444155","Laila Medium Color-Block Pebbled Leather Satchel","Khaki Multi",4,279.5],["199125664201","Laila Medium Color-Block Pebbled Leather Satchel","Loden Multi",4,199],["197853301498","Laila Medium Leather Satchel","Black",4,279.5],["199125663778","Laila Medium Leather Satchel","Moss",4,279.5],["197853458376","Laila Medium Leather Tote Bag","Black",6,259.5],["197853458390","Laila Medium Leather Tote Bag","Luggage",6,259.5],["197853301481","Laila Medium Signature Logo Satchel","Brn/Acorn",4,279.5],["197853456518","Laila Medium Signature Logo Satchel","Vanilla/Acorn",4,279.5],["197853726109","Laila Medium Signature Logo Satchel","Vanilla/Soft Pink",4,279.5],["197853458352","Laila Medium Signature Logo Tote Bag","Brn/Acorn",6,259.5],["199125686722","Laila Medium Signature Logo Tote Bag","Deep Red",6,259.5],["199125686685","Laila Medium Signature Logo Tote Bag","Moss",6,259.5],["197853458345","Laila Medium Signature Logo Tote Bag","Vanilla/Acorn",6,259.5],["199125025590","Laila Medium Signature Logo Tote Bag","Vanilla/Soft Pink",6,259.5],["199125662023","Laila Medium Suede Satchel","Chocolate",4,279.5],["199125662030","Laila Medium Suede Tote Bag","Chocolate",6,259.5],["199125668575","Laila Small Leather Pochette","Black",1,89],["199125668629","Laila Small Leather Pochette","Deep Red",1,89],["199125446036","Laila Small Leather Shoulder Bag","Black",5,199.5],["199125446043","Laila Small Leather Shoulder Bag","Eggshell",5,99],["199125665871","Laila Small Leopard Print Calf Hair Pochette","Burnt Khaki",1,119],["199125665857","Laila Small Leopard Print Calf Hair Satchel","Burnt Khaki",2,259.5],["199125660166","Laila Small Leopard Print Calf Hair Shoulder Bag","Burnt Khaki",5,279.5],["199125670462","Laila Small Mirror Embellished Pochette","Nickel",1,229.5],["199125670622","Laila Small Paillette Embellished Pochette","Black",1,229.5],["197853458208","Laila Small Pebbled Leather Satchel","Black",4,229.5],["199125443486","Laila Small Pebbled Leather Satchel","Khaki",4,229.5],["199125668568","Laila Small Signature Logo Pochette","Brn/Acorn",1,89],["199125668551","Laila Small Signature Logo Pochette","Vanilla/Acorn",1,89],["197853458185","Laila Small Signature Logo Satchel","Brn/Acorn",4,229.5],["199125663686","Laila Small Signature Logo Satchel","Chartreuse",4,145],["199125668650","Laila Small Signature Logo Satchel","Chartreuse",1,89],["199125663716","Laila Small Signature Logo Satchel","Deep Red",4,229.5],["199125668698","Laila Small Signature Logo Satchel","Deep Red",1,89],["199125663747","Laila Small Signature Logo Satchel","Heather Grey",4,229.5],["199125443523","Laila Small Signature Logo Satchel","Khaki",4,229.5],["199125663679","Laila Small Signature Logo Satchel","Loden",4,145],["199125668643","Laila Small Signature Logo Satchel","Loden",1,89],["199125663754","Laila Small Signature Logo Satchel","Moss",4,229.5],["197853458178","Laila Small Signature Logo Satchel","Vanilla/Acorn",4,229.5],["197853975316","Laila Small Signature Logo Satchel","Vanilla/Soft Pink",4,229.5],["199125446029","Laila Small Signature Logo Shoulder Bag","Brn/Acorn",5,199.5],["199125446005","Laila Small Signature Logo Shoulder Bag","Vanilla/Acorn",5,199.5],["199125670400","Laila Small Studded Satin Pochette","Black",1,229.5],["199125663457","Laila Small Suede Shoulder Bag","Black",5,199.5],["199125664386","Laila Small Suede Shoulder Bag","Chartreuse",5,119],["199125664362","Laila Small Suede Shoulder Bag","Chocolate",5,199.5],["199125664409","Laila Small Suede Shoulder Bag","Deep Red",5,199.5],["199125444735","Laila Small Suede Shoulder Bag","Khaki",5,199.5],["199125663464","Laila Small Suede Shoulder Bag","Moss",5,199.5],["199125663297","Laila Small Zebra Print Calf Hair Shoulder Bag","Black Combo",5,279.5],["199125183191","Marlowe Medium Pebbled Leather Crossbody Bag","Peanut",2,69],["196237354358","Mona Large Metallic Leather Clutch","Pale Gold",1,198],["199125655544","Nicholas Medium Suede Slouch Duffel Bag","Chocolate",3,399.5],["199125655513","Nicholas Medium Woven Suede Crossbody Bag","Chocolate",2,279.5],["199125890013","Nolita Extra-Small Nubuck Chain Pochette","Khaki",1,159.5],["199125890037","Nolita Extra-Small Pebbled Leather Chain Pochette","Black",1,159.5],["199125890044","Nolita Extra-Small Pebbled Leather Chain Pochette","Luggage",1,159.5],["199125890006","Nolita Extra-Small Signature Logo Chain Pochette","Brn/Acorn",1,159.5],["199125889994","Nolita Extra-Small Signature Logo Chain Pochette","Vanilla/Acorn",1,159.5],["199125659337","Nolita Large Nubuck Hobo Shoulder Bag","Burnt Khaki",5,279],["197853111653","Nolita Large Nubuck Hobo Shoulder Bag","Chocolate",5,279],["199125659375","Nolita Large Nubuck Hobo Shoulder Bag","Deep Red",5,279],["197853295773","Nolita Large Nubuck Hobo Shoulder Bag","Husk",5,279],["197853111660","Nolita Large Nubuck Hobo Shoulder Bag","Navy",5,279],["197853111622","Nolita Large Pebbled Leather Hobo Shoulder Bag","Black",5,279],["199125061994","Nolita Large Pebbled Leather Hobo Shoulder Bag","Luggage",5,279],["199125660746","Nolita Large Pebbled Leather Tote Bag","Black",6,329.5],["199125662740","Nolita Large Pebbled Leather Tote Bag","Black",6,329.5],["199125660760","Nolita Large Pebbled Leather Tote Bag","Burnt Khaki",6,329.5],["199125660777","Nolita Large Pebbled Leather Tote Bag","Chocolate",6,329.5],["199125662757","Nolita Large Pebbled Leather Tote Bag","Heather Grey",6,329.5],["199125663372","Nolita Large Suede Bucket Bag","Heather Grey",5,179],["199125663389","Nolita Large Suede Bucket Bag","Moss",5,179],["199125339369","Nolita Large Suede Bucket Tote Bag","Black",5,179],["199125664331","Nolita Large Suede Bucket Tote Bag","Deep Red",5,179],["199125339376","Nolita Large Suede Bucket Tote Bag","Luggage",5,179],["199125665772","Nolita Medium Hand-Woven Leather Chain Pochette","Chocolate",1,189],["199125665789","Nolita Medium Hand-Woven Leather Chain Pochette","Loden",1,189],["199125665765","Nolita Medium Hand-Woven Leather Chain Pochette","Luggage",1,189],["199125660098","Nolita Medium Hand-Woven Suede Shoulder Bag","Chocolate",5,229],["199125660104","Nolita Medium Hand-Woven Suede Shoulder Bag","Loden",5,229],["199125660081","Nolita Medium Hand-Woven Suede Shoulder Bag","Luggage",5,229],["199125068245","Nolita Medium Nubuck Chain Pochette","Black",1,199.5],["199125670868","Nolita Medium Nubuck Chain Pochette","Deep Red",1,199.5],["199125447408","Nolita Medium Nubuck Chain Pochette","Loden",1,99],["199125068269","Nolita Medium Nubuck Chain Pochette","Luggage",1,199.5],["199125670912","Nolita Medium Nubuck Chain Pochette","Moss",1,199.5],["199125659542","Nolita Medium Nubuck Shoulder Bag","Burnt Khaki",5,169],["197853971936","Nolita Medium Nubuck Shoulder Bag","Chocolate",5,169],["199125659597","Nolita Medium Nubuck Shoulder Bag","Deep Red",5,169],["199125443295","Nolita Medium Nubuck Shoulder Bag","Loden",5,149],["199125066821","Nolita Medium Pebbled Leather Chain Pochette","Black",1,199.5],["199125449099","Nolita Medium Pebbled Leather Chain Pochette","Khaki",1,105.99],["197853971967","Nolita Medium Pebbled Leather Shoulder Bag","Black",5,169],["197853973732","Nolita Medium Pebbled Leather Shoulder Bag","Black",5,169],["199125061703","Nolita Medium Pebbled Leather Shoulder Bag","Luggage",5,169],["199125066777","Nolita Medium Signature Logo Chain Pochette","Brn/Acorn",1,199.5],["199125066784","Nolita Medium Signature Logo Chain Pochette","Brown/Blk",1,199.5],["199125066760","Nolita Medium Signature Logo Chain Pochette","Vanilla/Acorn",1,199.5],["199125669855","Nolita Small Embellished Pochette","Nickel",1,299.5],["199125671773","Nolita Small Nubuck Crossbody Bag","Heather Grey",2,109],["199125448184","Nolita Small Nubuck Crossbody Bag","Khaki",2,149],["199125670615","Nolita Small Paillette Embellished Pochette","Black",1,179.5],["199125667592","Nolita Small Pebbled Leather Convertible Pochette","Black",1,199.5],["199125667660","Nolita Small Pebbled Leather Convertible Pochette","Deep Red",1,199.5],["199125669886","Nolita Small Pebbled Leather Convertible Pochette","Heather Grey",1,199.5],["199125667615","Nolita Small Pebbled Leather Convertible Pochette","Luggage",1,199.5],["199125669893","Nolita Small Pebbled Leather Convertible Pochette","Moss",1,199.5],["199125667578","Nolita Small Signature Logo Convertible Pochette","Brn/Acorn",1,199.5],["199125667561","Nolita Small Signature Logo Convertible Pochette","Vanilla/Acorn",1,199.5],["199125669909","Nolita Small Zebra Print Calf Hair Convertible Pochette","Black Combo",1,279.5],["196237300027","PRIDE Rainbow Logo Cotton Tote Bag","Black",6,98],["197853504530","PRIDE Rainbow Logo Cotton Tote Bag","Natural",6,98],["199125445060","Quinn Large Pebbled Leather Tote Bag","Black",6,279.5],["199125664454","Quinn Large Pebbled Leather Tote Bag","Chocolate",6,279.5],["199125664485","Quinn Large Pebbled Leather Tote Bag","Deep Red",6,279.5],["199125445107","Quinn Large Pebbled Leather Tote Bag","Luggage",6,279.5],["199125445176","Quinn Large Signature Logo Tote Bag","Brn/Acorn",6,279.5],["199125445169","Quinn Large Signature Logo Tote Bag","Vanilla/Acorn",6,279.5],["197853728509","Sable Medium Pebbled Leather Backpack","Black",0,149],["197853976344","Sable Medium Pebbled Leather Backpack","Chocolate",0,149],["199125444087","Sable Medium Pebbled Leather Backpack","Loden",0,149],["197853728530","Sable Medium Pebbled Leather Backpack","Luggage",0,149],["197853728523","Sable Medium Pebbled Leather Backpack","Soft Pink",0,149],["197853728493","Sable Medium Signature Logo Backpack","Brn/Acorn",0,149],["197853728486","Sable Medium Signature Logo Backpack","Vanilla/Acorn",0,149],["199125172485","Scarlett Medium Textured Tote Bag","Chambray",6,99],["199125173994","Scarlett Medium Textured Tote Bag","Peanut",6,99],["199125172461","Scarlett Medium Textured Tote Bag","Soft Pink",6,99],["199125668254","Teddi Extra-Small Signature Logo Slouchy Crossbody Bag","Brn/Acorn",2,129],["199125668247","Teddi Extra-Small Signature Logo Slouchy Crossbody Bag","Vanilla/Acorn",2,129],["199125668278","Teddi Extra-Small Textured Slouchy Crossbody Bag","Black",2,129],["199125668308","Teddi Extra-Small Textured Slouchy Crossbody Bag","Chocolate",2,129],["199125686012","Teddi Extra-Small Textured Slouchy Crossbody Bag","Deep Red",2,129],["199125668292","Teddi Extra-Small Textured Slouchy Crossbody Bag","Luggage",2,129],["199125670196","Teddi Extra-Small Washed Denim Crossbody Bag","Graphite",2,129],["199125668261","Teddi Extra-Small Washed Denim Slouchy Crossbody Bag","Lt Vtblu Wsh",2,129],["199125661507","Teddi Large Signature Logo Shoulder Bag","Brn/Acorn",5,159],["199125661491","Teddi Large Signature Logo Shoulder Bag","Vanilla/Acorn",5,159],["199125661514","Teddi Large Textured Shoulder Bag","Black",5,159],["199125686715","Teddi Large Textured Shoulder Bag","Deep Red",5,159],["199125661552","Teddi Large Textured Shoulder Bag","Loden",5,159],["199125661538","Teddi Large Textured Shoulder Bag","Luggage",5,159],["199125661361","Teddi Medium Signature Logo Slouchy Shoulder Bag","Brn/Acorn",5,139],["199125661354","Teddi Medium Signature Logo Slouchy Shoulder Bag","Vanilla/Acorn",5,139],["199125661385","Teddi Medium Textured Slouch Shouder Bag","Black",5,139],["199125686708","Teddi Medium Textured Slouch Shouder Bag","Deep Red",5,139],["199125661422","Teddi Medium Textured Slouch Shouder Bag","Loden",5,139],["199125661408","Teddi Medium Textured Slouch Shouder Bag","Luggage",5,139],["199125662986","Teddi Medium Washed Denim Shoulder Bag","Graphite",5,139],["199125661378","Teddi Medium Washed Denim Slouchy Shoulder Bag","Lt Vtblu Wsh",5,139],["196237606730","Watch Hunger Stop Cotton Canvas Tote Bag","Natural",6,98],["199125886269","Watch Hunger Stop Large Printed Cotton Canvas Tote Bag","Natural",6,99.5],["199125168242","Whitley Medium Nubuck Tote Bag","Khaki",3,329.5],["199125711967","Whitley Medium Nubuck Tote Bag","Loden",3,198]];
// EU (NL) website prices by UPC: [current €, previous € or null]. Filled only where the item has no EU price yet.
const EU_PRICES_EMBED = {"199125172485":[125,350],"199125668551":[125,null]};
// EU (NL) website, Nov 2026 table "michael_kors_bags_nl_eur_part3.xlsx" (154 bags): [upc, €, NL name, NL colour, EN name (US catalogue) or "", colour (EN), US $ or null, in stock online 1/0, type]
const EU_SITE_EMBED = [["199125663426",350,"Goldie Large Faux Fur Clutch","Zwart","Goldie Large Faux Fur Clutch","Black",399.5,1,"Clutches & Wristlets"],["199125663389",395,"Buideltas Nolita van suède, groot","Mosgroen","Nolita Large Suede Bucket Bag","Moss",179,1,"Shoulder Bags"],["199125663372",395,"Buideltas Nolita van suède, groot","Steengrijs","Nolita Large Suede Bucket Bag","Heather Grey",179,1,"Shoulder Bags"],["199125663365",395,"Buideltas Nolita van suède, groot","Zwart","Nolita Large Suede Bucket Bag","Black",null,1,"Shoulder Bags"],["199125662849",350,"Clutch Goldie van leer met studs, groot","Zwart","Goldie Large Studded Leather Clutch","Black",399.5,1,"Clutches & Wristlets"],["199125662825",295,"Clutch Goldie van leer, groot","Zwart","Goldie Large Leather Clutch","Black",299.5,1,"Clutches & Wristlets"],["199125665550",195,"Crossbodytas Bryant van suède met logoprint, klein en aanpasbaar","Burnt khaki","Bryant Small Logo Embossed Suede Convertible Crossbody Bag","Burnt Khaki",109,1,"Crossbody Bags"],["199125665567",195,"Crossbodytas Bryant van suède met logoprint, klein en aanpasbaar","Chocolade","Bryant Small Logo Embossed Suede Convertible Crossbody Bag","Chocolate",109,1,"Crossbody Bags"],["199125665574",195,"Crossbodytas Bryant van suède met logoprint, klein en aanpasbaar","Loden","Bryant Small Logo Embossed Suede Convertible Crossbody Bag","Loden",null,1,"Crossbody Bags"],["199125667325",175,"Crossbodytas Bryant van suède, klein en aanpasbaar","Groengeel","Bryant Small Suede Convertible Crossbody Bag","Chartreuse",99,1,"Crossbody Bags"],["199125667318",175,"Crossbodytas Bryant van suède, klein en aanpasbaar","Loden","Bryant Small Suede Convertible Crossbody Bag","Loden",99,1,"Crossbody Bags"],["199125665413",275,"Crossbodytas Hamilton Moderne van leer met textuur, extra klein en soepel","Luggage","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Luggage",199.5,1,"Crossbody Bags"],["199125670530",275,"Crossbodytas Laila van imitatiebont, extra klein","Zwart","Laila Extra-Small Faux Fur Crossbody Bag","Black",279.5,1,"Crossbody Bags"],["199125660784",350,"Draagtas Nolita van getrommeld leer, groot","Middernachtsblauw","Nolita Large Pebbled Leather Tote Bag","Midnight",null,1,"Totes"],["199125662764",350,"Draagtas Nolita van getrommeld leer, groot","Mosgroen","Nolita Large Pebbled Leather Tote Bag","Moss",null,1,"Totes"],["199125662757",350,"Draagtas Nolita van getrommeld leer, groot","Steengrijs","Nolita Large Pebbled Leather Tote Bag","Heather Grey",329.5,1,"Totes"],["199125662740",350,"Draagtas Nolita van getrommeld leer, groot","Zwart","Nolita Large Pebbled Leather Tote Bag","Black",329.5,1,"Totes"],["199125668568",125,"Enveloptas Laila met kenmerkend logo, klein","Bruin/Eikelbruin","Laila Small Signature Logo Pochette","Brn/Acorn",89,1,"Clutches & Wristlets"],["199125668551",125,"Enveloptas Laila met kenmerkend logo, klein","Vanille/Eikelbruin","Laila Small Signature Logo Pochette","Vanilla/Acorn",89,1,"Clutches & Wristlets"],["199125665871",150,"Enveloptas Laila van kalfshaar met luipaardprint, klein","Burnt khaki","Laila Small Leopard Print Calf Hair Pochette","Burnt Khaki",119,1,"Clutches & Wristlets"],["199125670554",140,"Enveloptas Laila van leer met krokodillenprint in reliëf, klein","Zwart","","Black",null,1,"Clutches & Wristlets"],["199125668629",125,"Enveloptas Laila van leer, klein","Dieprood","Laila Small Leather Pochette","Deep Red",89,1,"Clutches & Wristlets"],["199125668575",125,"Enveloptas Laila van leer, klein","Zwart","Laila Small Leather Pochette","Black",89,0,"Clutches & Wristlets"],["199125670400",150,"Enveloptas Laila van satijn met studs, klein","Zwart","Laila Small Studded Satin Pochette","Black",229.5,1,"Clutches & Wristlets"],["199125670622",175,"Enveloptas Laila versierd met lovertjes, klein","Zwart","Laila Small Paillette Embellished Pochette","Black",229.5,1,"Clutches & Wristlets"],["199125670462",195,"Enveloptas Laila versierd met spiegeltjes, klein","Nikkel","Laila Small Mirror Embellished Pochette","Nickel",229.5,1,"Clutches & Wristlets"],["199125667578",250,"Enveloptas Nolita met kenmerkend logo, klein en aanpasbaar","Bruin/Eikelbruin","Nolita Small Signature Logo Convertible Pochette","Brn/Acorn",199.5,1,"Clutches & Wristlets"],["199125667561",250,"Enveloptas Nolita met kenmerkend logo, klein en aanpasbaar","Vanille/Eikelbruin","Nolita Small Signature Logo Convertible Pochette","Vanilla/Acorn",199.5,1,"Clutches & Wristlets"],["199125667639",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Chocolade","Nolita Small Pebbled Leather Convertible Pochette","Chocolate",null,1,"Clutches & Wristlets"],["199125667660",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Dieprood","Nolita Small Pebbled Leather Convertible Pochette","Deep Red",199.5,1,"Clutches & Wristlets"],["199125667646",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Loden","Nolita Small Pebbled Leather Convertible Pochette","Loden",null,1,"Clutches & Wristlets"],["199125667615",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Luggage","Nolita Small Pebbled Leather Convertible Pochette","Luggage",199.5,1,"Clutches & Wristlets"],["199125669893",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Mosgroen","Nolita Small Pebbled Leather Convertible Pochette","Moss",199.5,1,"Clutches & Wristlets"],["199125669886",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Steengrijs","Nolita Small Pebbled Leather Convertible Pochette","Heather Grey",199.5,1,"Clutches & Wristlets"],["199125669879",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Zwart","Nolita Small Pebbled Leather Convertible Pochette","Black",null,1,"Clutches & Wristlets"],["199125667592",250,"Enveloptas Nolita van getrommeld leer, klein en aanpasbaar","Zwart","Nolita Small Pebbled Leather Convertible Pochette","Black",199.5,1,"Clutches & Wristlets"],["199125670615",325,"Enveloptas Nolita versierd met lovertjes, klein","Zwart","Nolita Small Paillette Embellished Pochette","Black",179.5,1,"Clutches & Wristlets"],["199125662719",595,"Messengertas Nolita van suède met studs en franjes, klein","Zwart","","Black",null,1,"Crossbody Bags"],["199125660029",350,"Schoudertas Bryant van leer met textuur, aanpasbaar en groot","Chocolade","Bryant Large Textured Leather Convertible Shoulder Bag","Chocolate",299.5,1,"Shoulder Bags"],["199125660005",350,"Schoudertas Bryant van leer met textuur, aanpasbaar en groot","Eierschaal","Bryant Large Textured Leather Convertible Shoulder Bag","Eggshell",null,1,"Shoulder Bags"],["199125660043",350,"Schoudertas Bryant van leer met textuur, aanpasbaar en groot","Groengeel","Bryant Large Textured Leather Convertible Shoulder Bag","Chartreuse",179,1,"Shoulder Bags"],["199125660036",350,"Schoudertas Bryant van leer met textuur, aanpasbaar en groot","Loden","Bryant Large Textured Leather Convertible Shoulder Bag","Loden",179,1,"Shoulder Bags"],["199125660012",350,"Schoudertas Bryant van leer met textuur, aanpasbaar en groot","Luggage","Bryant Large Textured Leather Convertible Shoulder Bag","Luggage",299.5,1,"Shoulder Bags"],["199125659993",350,"Schoudertas Bryant van leer met textuur, aanpasbaar en groot","Zwart","Bryant Large Textured Leather Convertible Shoulder Bag","Black",299.5,1,"Shoulder Bags"],["199125660074",375,"Schoudertas Bryant van leer, aanpasbaar en groot","Chocolade","Bryant Large Leather Convertible Shoulder Bag","Chocolate",299.5,1,"Shoulder Bags"],["199125659771",395,"Tas Hamilton van leer met textuur, groot en soepel model","Chocolade","Hamilton Large Textured Leather Soft Satchel","Chocolate",359.5,0,"Book Bags"],["199125659757",395,"Tas Hamilton van leer met textuur, groot en soepel model","Eierschaal","Hamilton Large Textured Leather Soft Satchel","Eggshell",359.5,0,"Book Bags"],["199125659764",395,"Tas Hamilton van leer met textuur, groot en soepel model","Luggage","Hamilton Large Textured Leather Soft Satchel","Luggage",359.5,1,"Book Bags"],["199125659740",395,"Tas Hamilton van leer met textuur, groot en soepel model","Zwart","Hamilton Large Textured Leather Soft Satchel","Black",359.5,1,"Book Bags"],["199125668698",125,"Tas Laila met kenmerkend logo, klein","Dieprood","Laila Small Signature Logo Satchel","Deep Red",89,1,"Clutches & Wristlets"],["199125888089",125,"Tas Laila met kenmerkend logo, klein","Grenadine","Laila Small Signature Logo Satchel","Grenadine",null,0,"Clutches & Wristlets"],["199125668650",125,"Tas Laila met kenmerkend logo, klein","Groengeel","Laila Small Signature Logo Satchel","Chartreuse",89,1,"Clutches & Wristlets"],["199125668643",125,"Tas Laila met kenmerkend logo, klein","Loden","Laila Small Signature Logo Satchel","Loden",89,1,"Clutches & Wristlets"],["199125660821",275,"Clutch Athena met metallic lovertjes, klein en aanpasbaar","Dieprood","","Deep Red",null,1,"Clutches & Wristlets"],["199125660807",275,"Clutch Athena met metallic lovertjes, klein en aanpasbaar","Goud","","Gold",null,1,"Clutches & Wristlets"],["199125660814",275,"Clutch Athena met metallic lovertjes, klein en aanpasbaar","Zwart","","Black",null,1,"Clutches & Wristlets"],["199125062151",225,"Clutch Hamilton Moderne met kenmerkend logo, middelgroot","Bruin/Eikelbruin","","Brn/Acorn",null,1,"Clutches & Wristlets"],["199125062144",225,"Clutch Hamilton Moderne met kenmerkend logo, middelgroot","Vanille/Eikelbruin","","Vanilla/Acorn",null,1,"Clutches & Wristlets"],["199125660395",275,"Clutch Hamilton van kalfshaar met luipaardprint, middelgroot en aanpasbaar","Burnt khaki","","Burnt Khaki",null,1,"Clutches & Wristlets"],["199125667301",195,"Crossbodytas Bryant met kenmerkend logo, klein","Bruin/Eikelbruin","Bryant Small Signature Logo Crossbody Bag","Brn/Acorn",159.5,1,"Crossbody Bags"],["199125667295",195,"Crossbodytas Bryant met kenmerkend logo, klein","Vanille/Eikelbruin","Bryant Small Signature Logo Crossbody Bag","Vanilla/Acorn",159.5,1,"Crossbody Bags"],["199125667370",175,"Crossbodytas Bryant van getrommeld leer, klein","Luggage","Bryant Small Pebbled Leather Crossbody Bag","Luggage",159.5,1,"Crossbody Bags"],["199125667363",175,"Crossbodytas Bryant van getrommeld leer, klein","Zwart","Bryant Small Pebbled Leather Crossbody Bag","Black",159.5,1,"Crossbody Bags"],["199125665543",225,"Crossbodytas Bryant van kalfshaar met luipaardprint, aanpasbaar en klein","Burnt khaki","Bryant Small Leopard Print Calf Hair Convertible Crossbody Bag","Burnt Khaki",229.5,1,"Crossbody Bags"],["199125665581",195,"Crossbodytas Bryant van leer, aanpasbaar en klein","Chocolade","Bryant Small Leather Convertible Crossbody Bag","Chocolate",159.5,1,"Crossbody Bags"],["199125665420",275,"Crossbodytas Hamilton Moderne van leer met textuur, extra klein en soepel","Chocolade","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Chocolate",199.5,0,"Crossbody Bags"],["199125665406",275,"Crossbodytas Hamilton Moderne van leer met textuur, extra klein en soepel","Eierschaal","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Eggshell",null,0,"Crossbody Bags"],["199125887662",275,"Crossbodytas Hamilton Moderne van leer met textuur, extra klein en soepel","Kaki","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Khaki",null,1,"Crossbody Bags"],["199125887679",275,"Crossbodytas Hamilton Moderne van leer met textuur, extra klein en soepel","Pruisisch blauw","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Prussian Blue",null,1,"Crossbody Bags"],["199125665390",275,"Crossbodytas Hamilton Moderne van leer met textuur, extra klein en soepel","Zwart","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Black",199.5,1,"Crossbody Bags"],["199125667035",250,"Crossbodytas Hamilton Moderne van leer, extra klein","Chocolade","Hamilton Extra-Small Leather Crossbody Bag","Chocolate",179.5,1,"Crossbody Bags"],["199125667226",295,"Crossbodytas Jana met lovertjes, extra klein","Dieprood","Jana Extra-Small Paillette Embellished Crossbody Bag","Deep Red",null,1,"Crossbody Bags"],["199125667202",295,"Crossbodytas Jana met lovertjes, extra klein","Goud","Jana Extra-Small Paillette Embellished Crossbody Bag","Gold",null,1,"Crossbody Bags"],["199125667219",295,"Crossbodytas Jana met lovertjes, extra klein","Zwart","Jana Extra-Small Paillette Embellished Crossbody Bag","Black",199.5,1,"Crossbody Bags"],["199125669640",275,"Crossbodytas Jana van kalfshaar met zebraprint, extra klein","Zwart combo","Jana Extra-Small Zebra Print Calf Hair Crossbody Bag","Black Combo",199.5,1,"Crossbody Bags"],["199125668087",225,"Crossbodytas Jana van lakleer, extra klein","Dieprood","","Deep Red",null,1,"Crossbody Bags"],["199125669633",250,"Crossbodytas Jana van metallic leer, extra klein","Zilver","Jana Extra-Small Metallic Leather Crossbody Bag","Silver",159.5,1,"Crossbody Bags"],["199125669664",275,"Crossbodytas Jana van satijn met studs, extra klein","Zwart","Jana Extra-Small Studded Satin Crossbody Bag","Black",259.5,1,"Crossbody Bags"],["199125660456",375,"Draagtas Hamilton Moderne van leer, groot","Chocolade","Hamilton Large Leather Tote Bag","Chocolate",299.5,1,"Totes"],["199125660432",375,"Draagtas Hamilton Moderne van leer, groot","Luggage","Hamilton Large Leather Tote Bag","Luggage",299.5,1,"Totes"],["199125660425",375,"Draagtas Hamilton Moderne van leer, groot","Zwart","Hamilton Large Leather Tote Bag","Black",299.5,1,"Totes"],["199125659900",295,"Schoudertas Bryant van leer met textuur, aanpasbaar en klein","Eierschaal","","Eggshell",null,1,"Shoulder Bags"],["199125659894",295,"Schoudertas Bryant van leer met textuur, aanpasbaar en klein","Zwart","","Black",null,1,"Shoulder Bags"],["199125659986",325,"Schoudertas Bryant van Leer, aanpasbaar en klein","Chocolade","Bryant Small Leather Convertible Shoulder Bag","Chocolate",229.5,1,"Shoulder Bags"],["199125891850",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Bruin korenbloem","Bryant Small Suede Convertible Shoulder Bag","Brown/Cornflower",null,0,"Shoulder Bags"],["199125659931",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Chocolade","Bryant Small Suede Convertible Shoulder Bag","Chocolate",229.5,1,"Shoulder Bags"],["199125659979",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Dieprood","Bryant Small Suede Convertible Shoulder Bag","Deep Red",229.5,1,"Shoulder Bags"],["199125659955",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Groengeel","Bryant Small Suede Convertible Shoulder Bag","Chartreuse",139,1,"Shoulder Bags"],["199125891843",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Kaki","Bryant Small Suede Convertible Shoulder Bag","Khaki",null,0,"Shoulder Bags"],["199125659948",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Loden","Bryant Small Suede Convertible Shoulder Bag","Loden",139,1,"Shoulder Bags"],["199125659924",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Luggage","Bryant Small Suede Convertible Shoulder Bag","Luggage",229.5,1,"Shoulder Bags"],["199125891836",295,"Schoudertas Bryant van suède, aanpasbaar en klein","Zwart","Bryant Small Suede Convertible Shoulder Bag","Black",null,0,"Shoulder Bags"],["199125662658",295,"Schoudertas Bryant van suède, klein en aanpasbaar","Mosgroen","Bryant Small Suede Convertible Shoulder Bag","Moss",null,1,"Shoulder Bags"],["199125662641",295,"Schoudertas Bryant van suède, klein en aanpasbaar","Zwart","Bryant Small Suede Convertible Shoulder Bag","Black",229.5,0,"Shoulder Bags"],["199125446029",275,"Schoudertas Laila met kenmerkend logo, klein","Bruin/Eikelbruin","Laila Small Signature Logo Shoulder Bag","Brn/Acorn",199.5,1,"Shoulder Bags"],["199125446005",275,"Schoudertas Laila met kenmerkend logo, klein","Vanille/Eikelbruin","Laila Small Signature Logo Shoulder Bag","Vanilla/Acorn",199.5,1,"Shoulder Bags"],["199125660166",325,"Schoudertas Laila van kalfshaar met luipaardprint, klein","Burnt khaki","Laila Small Leopard Print Calf Hair Shoulder Bag","Burnt Khaki",279.5,1,"Shoulder Bags"],["199125893915",275,"Schoudertas Laila van suède, klein","Bruin korenbloem","Laila Small Suede Shoulder Bag","Brown/Cornflower",null,0,"Shoulder Bags"],["199125664362",275,"Schoudertas Laila van suède, klein","Chocolade","Laila Small Suede Shoulder Bag","Chocolate",199.5,1,"Shoulder Bags"],["199125664386",275,"Schoudertas Laila van suède, klein","Groengeel","Laila Small Suede Shoulder Bag","Chartreuse",119,1,"Shoulder Bags"],["199125444735",275,"Schoudertas Laila van suède, klein","Kaki","Laila Small Suede Shoulder Bag","Khaki",199.5,0,"Shoulder Bags"],["199125664379",275,"Schoudertas Laila van suède, klein","Loden","Laila Small Suede Shoulder Bag","Loden",null,1,"Shoulder Bags"],["199125444742",275,"Schoudertas Laila van suède, klein","Luggage","Laila Small Suede Shoulder Bag","Luggage",null,1,"Shoulder Bags"],["199125664393",275,"Schoudertas Laila van suède, klein","Middernachtsblauw","Laila Small Suede Shoulder Bag","Midnight",null,1,"Shoulder Bags"],["199125663464",275,"Schoudertas Laila van suède, klein","Mosgroen","Laila Small Suede Shoulder Bag","Moss",199.5,0,"Shoulder Bags"],["199125444759",275,"Schoudertas Laila van suède, klein","Primula","Laila Small Suede Shoulder Bag","Primrose",null,1,"Shoulder Bags"],["199125444728",275,"Schoudertas Laila van suède, klein","Zwart","Laila Small Suede Shoulder Bag","Black",null,1,"Shoulder Bags"],["199125663457",275,"Schoudertas Laila van suède, klein","Zwart","Laila Small Suede Shoulder Bag","Black",199.5,1,"Shoulder Bags"],["199125055931",120,"Crossbodytas Sienna, middelgroot en aanpasbaar","Zwart","","Black",null,1,"Crossbody Bags"],["199125055962",120,"Crossbodytas Sienna, middelgroot en aanpasbaar","Luggage","","Luggage",null,1,"Crossbody Bags"],["197853738096",120,"Crossbodytas Sienna met kenmerkend logo, middelgroot en aanpasbaar","Bruin/Luggage","","Brown/Luggage",null,1,"Crossbody Bags"],["197853738126",120,"Crossbodytas Sienna met kenmerkend logo, middelgroot en aanpasbaar","Admiraalblauw","","Admiral",null,1,"Crossbody Bags"],["197853738133",120,"Crossbodytas Sienna met kenmerkend logo, middelgroot en aanpasbaar","Ballet","","Ballet",null,1,"Crossbody Bags"],["197853738072",120,"Crossbodytas Sienna met kenmerkend logo, middelgroot en aanpasbaar","Vanille/Luggage","","Vanilla/Luggage",null,1,"Crossbody Bags"],["199125056020",170,"Schoudertas Sienna, groot en aanpasbaar","Zwart","","Black",null,1,"Shoulder Bags"],["199125056068",170,"Schoudertas Sienna, groot en aanpasbaar","Luggage","","Luggage",null,1,"Shoulder Bags"],["197853738300",170,"Schoudertas Sienna met kenmerkend logo, groot en aanpasbaar","Bruin/Luggage","","Brown/Luggage",null,1,"Shoulder Bags"],["197853738331",170,"Schoudertas Sienna met kenmerkend logo, groot en aanpasbaar","Admiraalblauw","","Admiral",null,1,"Shoulder Bags"],["197853738348",170,"Schoudertas Sienna met kenmerkend logo, groot en aanpasbaar","Ballet","","Ballet",null,1,"Shoulder Bags"],["197853738287",170,"Schoudertas Sienna met kenmerkend logo, groot en aanpasbaar","Vanille/Luggage","","Vanilla/Luggage",null,1,"Shoulder Bags"],["199125659481",125,"Tas Emilia van getrommeld leer, klein","Burnt khaki","","Burnt Khaki",null,1,"Handbags"],["199125130980",125,"Tas Emilia van getrommeld leer, klein","Zwart","","Black",null,1,"Handbags"],["197853971578",125,"Tas Emilia van getrommeld leer, klein","Luggage","","Luggage",null,1,"Handbags"],["197853971561",110,"Tas Emilia van getrommeld leer, klein","Klimopgroen","","Ivy",null,0,"Handbags"],["197853971547",125,"Tas Emilia met kenmerkend logo, klein","Vanille/Eikelbruin","","Vanilla/Acorn",null,1,"Handbags"],["197853971554",125,"Tas Emilia met kenmerkend logo, klein","Bruin/Eikelbruin","","Brn/Acorn",null,0,"Handbags"],["199125659498",135,"Tas Emilia van getrommeld leer, middelgroot","Burnt khaki","","Burnt Khaki",null,1,"Handbags"],["199125170801",135,"Tas Emilia van getrommeld leer, middelgroot","Zwart","","Black",null,1,"Handbags"],["197853971608",135,"Tas Emilia met kenmerkend logo, middelgroot","Vanille/Eikelbruin","","Vanilla/Acorn",null,1,"Handbags"],["199125665857",275,"Tas Laila van kalfshaar met luipaardprint, klein","Burnt khaki","Laila Small Leopard Print Calf Hair Satchel","Burnt Khaki",259.5,1,"Crossbody Bags"],["199125669831",250,"Enveloptas Nolita van metallic tweed, klein","Zwart/Zilver","","Black/Silver",null,1,"Clutches & Wristlets"],["199125669855",325,"Enveloptas Nolita met versiering, klein","Nikkel","Nolita Small Embellished Pochette","Nickel",299.5,1,"Clutches & Wristlets"],["199125667066",250,"Crossbodytas Hamilton van leer, extra klein","Groengeel","Hamilton Extra-Small Leather Crossbody Bag","Chartreuse",null,1,"Crossbody Bags"],["199125667042",250,"Crossbodytas Hamilton van leer, extra klein","Loden","Hamilton Extra-Small Leather Crossbody Bag","Loden",179.5,1,"Crossbody Bags"],["199125667080",250,"Crossbodytas Hamilton van leer, extra klein","Dieprood","Hamilton Extra-Small Leather Crossbody Bag","Deep Red",179.5,1,"Crossbody Bags"],["199125667004",250,"Crossbodytas Hamilton van leer, extra klein","Zwart","Hamilton Extra-Small Leather Crossbody Bag","Black",179.5,1,"Crossbody Bags"],["199125667028",250,"Crossbodytas Hamilton van leer, extra klein","Luggage","Hamilton Extra-Small Leather Crossbody Bag","Luggage",179.5,1,"Crossbody Bags"],["199125666984",250,"Crossbodytas Hamilton met kenmerkend logo, extra klein","Vanille/Eikelbruin","Hamilton Extra-Small Signature Logo Crossbody Bag","Vanilla/Acorn",179.5,1,"Crossbody Bags"],["199125666991",250,"Crossbodytas Hamilton met kenmerkend logo, extra klein","Bruin/Eikelbruin","Hamilton Extra-Small Signature Logo Crossbody Bag","Brn/Acorn",179.5,1,"Crossbody Bags"],["197853971622",115,"Tas Emilia van getrommeld leer, middelgroot","Klimopgroen","","Ivy",null,0,"Handbags"],["197853971639",135,"Tas Emilia van getrommeld leer, middelgroot","Luggage","","Luggage",null,0,"Handbags"],["197853971615",135,"Tas Emilia met kenmerkend logo, middelgroot","Bruin/Eikelbruin","","Brn/Acorn",null,0,"Handbags"],["199125665437",275,"Crossbodytas Hamilton van leer met textuur, extra klein en soepel","Dieprood","Hamilton Extra-Small Textured Leather Soft Crossbody Bag","Deep Red",199.5,0,"Crossbody Bags"],["199125888065",125,"Tas Laila met kenmerkend logo, klein","Pruisisch blauw","Laila Small Signature Logo Satchel","Prussian Blue",null,0,"Clutches & Wristlets"],["199125888072",125,"Tas Laila met kenmerkend logo, klein","Bruin korenbloem","Laila Small Signature Logo Satchel","Brown/Cornflower",null,0,"Clutches & Wristlets"],["199125661132",125,"Tas Foster met kenmerkend logo, klein","Vanille/Eikelbruin","","Vanilla/Acorn",null,1,"Book Bags"],["199125661149",125,"Tas Foster met kenmerkend logo, klein","Bruin/Eikelbruin","","Brn/Acorn",null,1,"Book Bags"],["199125668094",100,"Tas Foster met kenmerkend logo, extra klein","Vanille/Eikelbruin","","Vanilla/Acorn",null,1,"Crossbody Bags"],["199125668100",100,"Tas Foster met kenmerkend logo, extra klein","Bruin/Eikelbruin","","Brn/Acorn",null,1,"Crossbody Bags"],["199125668117",100,"Tas Foster van getrommeld leer, extra klein","Zwart","","Black",null,1,"Crossbody Bags"],["199125668124",100,"Tas Foster van getrommeld leer, extra klein","Chocolade","","Chocolate",null,1,"Crossbody Bags"],["199125661255",150,"Draagtas Foster met kenmerkend logo, groot","Vanille/Eikelbruin","","Vanilla/Acorn",null,1,"Totes"],["199125661262",150,"Draagtas Foster met kenmerkend logo, groot","Bruin/Eikelbruin","","Brn/Acorn",null,1,"Totes"],["199125667332",175,"Crossbodytas Bryant van suède, klein en aanpasbaar","Dieprood","Bryant Small Suede Convertible Crossbody Bag","Deep Red",159.5,0,"Crossbody Bags"]];
const B_ = window.__BASES || null;   // bases read from the "Базы" folder (bases.js); built-in copies are the fallback
const CATALOG = (B_ && B_.us) || CATALOG_EMBED;
const EU_SITE = (B_ && B_.eu) || EU_SITE_EMBED;
const EU_PRICES = (B_ && B_.euOld) || EU_PRICES_EMBED;
const EU_V = (B_ && B_.euV) || 3;
const BASE_V = (B_ && B_.baseV) || "3";
// [upc, model name, colour, type index, US list price in USD]
const BASE = CATALOG.map(r => ({no:"", ean:r[0], name:r[1], cat:"bag", type:(typeof r[3] === "number" ? CATALOG_TYPES[r[3]] : r[3]), color:r[2], size:"", orig:null, outlet:null, price:null, usd:r[4], eu:null, promo:null, future:null, stock:null}));
{ const have = new Set(BASE.map(b => b.ean));   // bags that are only on the EU site
  EU_SITE.forEach(e => { if (!have.has(e[0])) BASE.push({no:"", ean:e[0], name:e[4] || e[2], cat:"bag", type:e[8], color:e[5], size:"", orig:null, outlet:null, price:null, usd:e[6], eu:null, promo:null, future:null, stock:null}); }); }
const EU_BY = new Map(EU_SITE.map(e => [e[0], e]));
let ITEMS = [];
function mergeBase(){   // add catalogue items this device does not have yet; fill missing details on ones it has
  const by = new Map(ITEMS.map(i => [normCode(i.ean), i])); let added = 0;
  BASE.forEach(b => { const cur = by.get(b.ean);
    if (!cur) { ITEMS.push(Object.assign({}, b)); added++; }
    else { if (cur.usd == null) cur.usd = b.usd; if (!cur.type) cur.type = b.type; } });
  return added;
}
function applyEu(){
  let n = 0;
  ITEMS.forEach(i => { const s = EU_BY.get(normCode(i.ean));
    if (s && i.euV !== EU_V) {   // newer EU table: refresh the site data (store prices stay untouched)
      i.eu = s[1]; i.euWas = null; i.euName = s[2]; i.euColor = s[3]; i.euColorEn = s[5]; i.euStock = !!s[7]; i.euV = EU_V;
      if (s[4] && i.name === s[2]) i.name = s[4]; if (!i.color) i.color = s[5]; if (!i.type) i.type = s[8]; if (i.usd == null && s[6] != null) i.usd = s[6];
      if (i.origFromSite) { i.orig = null; i.origFromSite = false; }
      n++;
    }
  });
  ITEMS.forEach(i => { const e = EU_PRICES[normCode(i.ean)]; if (e && i.eu == null) { i.eu = e[0]; i.euWas = e[1]; n++; } if (fillOrigFromSite(i)) n++; });
  return n;
}
// the EU site's full price (the "was" price if it is on sale) becomes the original price when none is entered
function fillOrigFromSite(i){
  if (i.orig != null || i.eu == null) return false;
  i.orig = i.euWas != null ? i.euWas : i.eu; i.origFromSite = true; return true;
}
// items not in the website list (other barcode, e.g. outlet versions): look for the same model and colour among website items
const normColor = c => String(c || "").toLowerCase().replace(/[^a-z]/g, "");
function siteCandidates(it){
  if (it.usd != null || it.eu != null || !it.name) return [];
  const first = it.name.trim().split(/\s+/)[0].toLowerCase(), col = normColor(it.color);
  return ITEMS.filter(x => x !== it && (x.usd != null || x.eu != null) && x.name.toLowerCase().split(/\s+/)[0] === first && (!col || normColor(x.color) === col))
    .sort((a,b) => (b.eu != null) - (a.eu != null)).slice(0, 4);
}
function useSitePrice(it, src){
  it.usd = src.usd; it.eu = src.eu; it.euWas = src.euWas; it.type = it.type || src.type; it.siteName = src.name;
  fillOrigFromSite(it); saveCatalog();
}
function loadCatalog(){
  try { const raw = localStorage.getItem("spc.items"); if (raw) { const a = JSON.parse(raw); if (Array.isArray(a)) { ITEMS = a.map(fromJSON); return; } } } catch(e) {}
  ITEMS = SEED.slice();
}
function fromJSON(o){ return Object.assign({no:"", ean:"", name:"", cat:"bag", type:"", usd:null, eu:null, color:"", size:"", orig:null, outlet:null, price:null, promo:null, future:null, stock:null}, o,
  { promo: o.promo && Object.assign({}, o.promo, {ends:new Date(o.promo.ends)}), future: o.future && Object.assign({}, o.future, {date:new Date(o.future.date)}) }); }
function saveCatalog(){ try { localStorage.setItem("spc.items", JSON.stringify(ITEMS)); return true; } catch(e) { toast(I.alert, "Could not save on this device. Use Export to keep a copy."); return false; } }
loadCatalog();
function saveCatalogQuiet(){ try { localStorage.setItem("spc.items", JSON.stringify(ITEMS)); } catch(e) {} }

/* ---------- barcode helpers ---------- */
function eanCheck(body){ // body = all digits except the check digit (7 or 12 digits)
  let s = 0; const n = body.length;
  for (let i = 0; i < n; i++) s += (+body[n-1-i]) * (i % 2 === 0 ? 3 : 1);
  return (10 - s % 10) % 10;
}
function validGtin(code){ // EAN-8, UPC-A (12), EAN-13
  return /^\d+$/.test(code) && [8,12,13].includes(code.length) && eanCheck(code.slice(0,-1)) === +code.slice(-1);
}

// UPC-A (12) and the same code read as EAN-13 with a leading 0 are treated as one
const normCode = c => { c = String(c).trim().replace(/\s+/g,""); return /^0\d{12}$/.test(c) ? c.slice(1) : c; };
function findItem(code){
  const c = normCode(code); if (!c) return null;
  const up = c.toUpperCase();
  return ITEMS.find(i => normCode(i.ean) === c || (i.no && i.no.toUpperCase() === up)) || null;
}
try { if (localStorage.getItem("spc.base") !== BASE_V) { mergeBase(); localStorage.setItem("spc.base", BASE_V); saveCatalogQuiet(); } } catch(e) { mergeBase(); }
if (applyEu()) saveCatalogQuiet();


/* ---------- formatting ---------- */
const eur = v => v == null || isNaN(v) ? "—" : "€ " + (+v).toFixed(2).replace(".", ",");
// three prices: original (retail), outlet, store (what is charged now). The price that applies is the store price, else outlet, else original.
const curPrice = it => it.price != null ? it.price : it.outlet != null ? it.outlet : it.orig;
const hasPrice = it => curPrice(it) != null;
const pctOff = (p, base) => p != null && base ? Math.round((1 - p/base)*100) : 0;
const fmtDate = d => d.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
const daysTo = d => Math.round((d - today)/DAY);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const totalStock = it => it.stock ? it.stock.store + it.stock.back : 0;
/* bag colour swatches: the icon tile takes the colour of the bag (two-tone colours get a diagonal split) */
const SWATCH = {black:"#1c1c1e", noir:"#1c1c1e", chocolate:"#4b2e22", luggage:"#a2673b", loden:"#4e5a3b", vanilla:"#eee2c6", acorn:"#8b5a32", brown:"#5b3a28", brn:"#5b3a28", blk:"#1c1c1e",
  "deep red":"#8c1c24", red:"#a3222b", chartreuse:"#c8c23c", moss:"#6c703e", eggshell:"#eee7d6", "heather grey":"#9b9b97", grey:"#9b9b97", graphite:"#4a4a4d", khaki:"#b6a37b", "burnt khaki":"#8c7350",
  nickel:"#8f8f8a", gold:"#c9a95b", "pale gold":"#d9c48f", silver:"#c3c4c6", rhodium:"#b8b9bb", ballet:"#efcfc6", "soft pink":"#f1c3c7", pink:"#f1c3c7", navy:"#1f2a45", midnight:"#1c2236",
  admiral:"#2b3e6c", admirl:"#2b3e6c", "prussian blue":"#1e3d5b", blue:"#3c5f8f", husk:"#c9a86b", natural:"#e5dbc5", white:"#f6f6f3", wht:"#f6f6f3", peanut:"#b98a53", rosewood:"#8f4b4b",
  chambray:"#7f97b5", grenadine:"#c33e3a", primrose:"#efd86b", ivy:"#365c3b", cornflower:"#6f8fd6", vtblu:"#9db4cc", cream:"#f1e7cf", "amazon green":"#2f5a43", green:"#3d6b4a", maroon:"#5e1f26", nutmeg:"#8a5a3c", tan:"#b48a5e", camel:"#b08452", beige:"#d9c8a9", olive:"#6b6b3a", taupe:"#8b7d6f", burgundy:"#6a1f2b", wine:"#6a1f2b", cognac:"#9a5a2c", ecru:"#ece3cf", bone:"#e8e0cf", optic:"#f6f6f3", orange:"#d86b2c", yellow:"#e7c84a", purple:"#5b3d72", lilac:"#bba6cf", leopard:"#8c7350",
  zwart:"#1c1c1e", wit:"#f6f6f3", bruin:"#5b3a28", rood:"#a3222b", blauw:"#3c5f8f", groen:"#3d6b4a", grijs:"#9b9b97", roze:"#f1c3c7", goud:"#c9a95b", zilver:"#c3c4c6", geel:"#e7c84a", oranje:"#d86b2c", paars:"#5b3d72", chocolade:"#4b2e22", vanille:"#eee2c6", eikelbruin:"#8b5a32", kaki:"#b6a37b", nikkel:"#8f8f8a", eierschaal:"#eee7d6", dieprood:"#8c1c24", mosgroen:"#6c703e", steengrijs:"#9b9b97", middernachtsblauw:"#1c2236", admiraalblauw:"#2b3e6c", klimopgroen:"#365c3b", primula:"#efd86b", groengeel:"#c8c23c", "pruisisch blauw":"#1e3d5b"};
function swatchOf(name){
  const parts = String(name || "").toLowerCase().replace(/\b(multi|combo|wsh|lt|sh|optic|bright)\b/g, " ").split("/").map(x => x.replace(/\s+/g, " ").trim()).filter(Boolean);
  const one = t => SWATCH[t] || t.split(" ").reverse().map(w => SWATCH[w]).find(Boolean) || null;
  const c = parts.map(one).filter(Boolean);
  return c.length ? c.slice(0, 2) : null;
}
const lum = h => { const n = parseInt(h.slice(1), 16), f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(n >> 16) + .7152 * f((n >> 8) & 255) + .0722 * f(n & 255); };
const swBg = sw => sw.length > 1 ? `linear-gradient(135deg,${sw[0]} 0 50%,${sw[1]} 50% 100%)` : sw[0];
const colourOf = it => it.color || it.euColorEn || "";
function catIcon(it, cls){
  const c = CAT[it.cat], sw = it.cat === "bag" ? swatchOf(it.color || it.euColorEn) : null;
  if (!sw) return `<span class="${cls}" style="background:${c.bg};color:${c.fg}">${I[it.cat]}</span>`;
  const bg = sw.length > 1 ? `linear-gradient(135deg,${sw[0]} 0 50%,${sw[1]} 50% 100%)` : sw[0];
  const L = sw.reduce((a, h) => a + lum(h), 0) / sw.length;
  return `<span class="${cls} sw" style="background:${bg};color:${L > .32 ? "#1a1612" : "#fff"}" title="${esc(it.color || "")}">${I[it.cat]}</span>`;
}
function stateChips(it, mini){
  const m = mini ? " mini" : ""; let h = "";
  if (it.promo) h += `<span class="chip promo${m}">On promo</span>`;
  if (it.future) h += `<span class="chip future${m}">Price change ${daysTo(it.future.date) === 0 ? "today" : "in " + daysTo(it.future.date) + " d"}</span>`;
  if (!hasPrice(it)) h += `<span class="chip future${m}">No price yet</span>`;
  else if (pctOff(curPrice(it), it.orig) > 0) h += `<span class="chip promo${m}">-${pctOff(curPrice(it), it.orig)}%</span>`;
  if (!it.stock) return h;
  if (it.stock.store === 0) h += `<span class="chip oos${m}">${totalStock(it) ? "Not on floor" : "Out of stock"}</span>`;
  else if (!mini) h += `<span class="chip ok${m}">In stock</span>`;
  return h;
}

/* ---------- state ---------- */
const S = { view:"home", edit:null, mode:"price", item:null, missCode:"", stack:[], camOn:false, kbd:false, query:"" };
let history = [];
try { history = JSON.parse(localStorage.getItem("spc.history") || "[]").slice(0,15); } catch(e) { history = []; }

function saveHistory(){ try { localStorage.setItem("spc.history", JSON.stringify(history)); } catch(e) {} }
function pushHistory(it, mode){
  history = [{ean:it.ean, mode, t:Date.now()}, ...history.filter(h => h.ean !== it.ean)].slice(0,15);
  saveHistory();
}
const isTouch = !!(window.matchMedia && matchMedia("(pointer:coarse)").matches);

/* ---------- navigation ---------- */
const TITLES = {home:"Store Price Check", scan:"", lookup:"All Items", result:"", add:"Add Item", queue:"Print List"};
function go(view, opts={}){
  if (!opts.replace && S.view !== view) S.stack.push(S.view);
  S.view = view; render();
  window.scrollTo(0,0);
}
function back(){
  const prev = S.stack.pop() || "home";
  S.view = prev; render(); window.scrollTo(0,0);
}
document.getElementById("backBtn").onclick = back;

const app = document.getElementById("app");
function render(){
  if (S.view !== "scan" && S.view !== "result" && S.view !== "queue") stopCam();
  if (S.view === "add") TITLES.add = S.edit && S.edit.existing ? "Edit Item" : "Add Item";
  if (S.view === "result") pauseCam(true);
  document.getElementById("backBtn").hidden = S.view === "home";
  const t = S.view === "scan" || S.view === "result"
    ? (S.mode === "ticket" ? "Print Ticket" : (S.view==="result" && S.fromLookup ? "Item Lookup" : "Price Check"))
    : TITLES[S.view];
  document.getElementById("title").textContent = t;
  const inQ = S.view === "queue";
  document.getElementById("printerSel").hidden = !inQ; document.getElementById("newListBtn").hidden = !inQ; document.getElementById("betaPill").hidden = inQ;
  if (inQ) fillPrinterSel();
  ({home:renderHome, scan:renderScan, lookup:renderLookup, result:renderResult, add:renderAdd, queue:renderQueue})[S.view]();
  updateFab();
}

/* ---------- home ---------- */
function renderHome(){
  const soon = [["Transfers","truck","02"],["Returns to Vendor","undo","04"],["Item Receiving","box","05"],["Carton Receiving","layers","06"],["Stock Management","chart","07"],["Future Promotions","clock","01/02"]];
  app.innerHTML = `<section class="view">
    <div class="tiles">
      <button class="tile primary" data-go="price">${I.scan}<span><b>Price Check</b><br><small>Scan a tag: prices, stock, print a ticket</small></span></button>
      <button class="tile" data-go="lookup">${I.search}<b>All Items</b><small>${ITEMS.length} items · search, edit <span class="old">03</span></small></button>
      <button class="tile" data-go="add">${I.barcode}<b>Add Item</b><small>Scan a new tag and save it</small></button>
    </div>
    <div class="label">Coming soon</div>
    <div class="tiles">${soon.map(s => `<div class="tile soon" aria-disabled="true">${I[s[1]]}<b>${s[0]}</b><span class="soon-tag">Coming soon · <span class="old">${s[2]}</span></span></div>`).join("")}</div>
    <div id="aiCard"></div>
    <p class="hint" id="baseInfo" style="text-align:center">${(() => { const B = window.__BASES; if (!B) return "Bases: built-in copy"; return "Bases: " + B.report.filter(r => r.rows).map(r => esc(r.kind) + " " + r.rows).join(" · "); })()}</p>
    <div class="row"><button class="btn" id="exportBtn">Export items</button><button class="btn" id="importBtn">Import items</button></div>
    <input type="file" id="importInput" accept="application/json,.json" hidden>
    <p class="foot">Prototype. Items are saved only on this device and are not connected to the store system.</p>
  </section>`;
  app.querySelectorAll("[data-go]").forEach(b => b.onclick = () => {
    const g = b.dataset.go;
    if (g === "price" || g === "ticket") { setMode(g); S.fromLookup = false; go("scan"); }
    else if (g === "add") { openAdd(""); }
    else go(g);
  });
  document.getElementById("exportBtn").onclick = exportCatalog;
  renderAiCard();
  document.getElementById("importBtn").onclick = () => document.getElementById("importInput").click();
  document.getElementById("importInput").onchange = importCatalog;
  bindRows();
}
function historyBlock(){
  const rows = history.map(h => [findItem(h.ean), h]).filter(x => x[0]).slice(0,6);
  if (!rows.length) return "";
  return `<div class="label">Recent scans</div><div class="list">${rows.map(([it,h]) => row(it, timeAgo(h.t))).join("")}</div>`;
}
function timeAgo(t){ const m = Math.round((Date.now()-t)/6e4); return m < 1 ? "just now" : m < 60 ? m + " min ago" : Math.round(m/60) + " h ago"; }
function row(it, sub){
  const meta = [it.color, it.size, sub].filter(Boolean).map(esc).join(" · "), chips = stateChips(it, true);
  return `<button class="li" data-ean="${it.ean}">${catIcon(it,"ic")}<span class="t"><b>${esc(it.name)}</b>${meta ? `<small>${meta}</small>` : ""}${chips ? `<span class="chips">${chips}</span>` : ""}</span>${hasPrice(it) ? `<span class="p">${eur(curPrice(it))}</span>` : ""}</button>`;
}
function bindRows(){
  app.querySelectorAll(".li[data-ean]").forEach(b => b.onclick = () => showItem(findItem(b.dataset.ean), "list"));
}
function setMode(m){ S.mode = m; try { localStorage.setItem("spc.mode", m); } catch(e) {} }

/* ---------- scan screen ---------- */
function renderScan(){
  app.innerHTML = `<section class="view">
    <div class="scanbox">
      <label class="field">${I.barcode}<input id="code" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" inputmode="text" placeholder="Scan or type barcode" aria-label="Barcode or item number"></label>
    </div>
    <p class="hint"><span class="ready">Ready to scan</span> · scanner, camera or item number${S.lastScan ? `<br><span class="mono" id="scanDiag">Last scan: ${S.lastScan.n} chars · ${S.lastScan.ms} ms · end: ${S.lastScan.end}</span>` : ""}</p>
    <div id="camArea"></div>
    <nav class="dock dock-side" aria-label="Scan with camera or photo"><button type="button" class="gold" id="camBtn">${I.scan}<span>${S.camOn ? "Stop camera" : "Camera scan"}</span></button><button type="button" id="galleryBtn">${I.image}<span>From gallery</span></button></nav>
    ${historyBlock()}
  </section>`;
  const inp = document.getElementById("code");
  const kb = document.getElementById("kbdBtn");
  if (kb) kb.onclick = () => { S.kbd = !S.kbd; inp.inputMode = S.kbd ? "text" : "none"; kb.setAttribute("aria-pressed", S.kbd); inp.blur(); setTimeout(() => inp.focus(), 30); };
  document.getElementById("camBtn").onclick = () => { unlockAudio(); if (!LIVE_CAM) { document.getElementById("photoInput").click(); return; } S.camOn ? (stopCam(), S.camOn=false, renderKeep()) : (S.camOn = true, renderKeep(), startCam()); };
  document.getElementById("galleryBtn").onclick = () => document.getElementById("galleryInput").click();
  bindScanInput(inp);
  bindRows();
  if (S.camOn) { mountCam(); if (!cam.stream) startCam(); else pauseCam(false); }
  if (!matchMedia("(pointer: coarse)").matches) setTimeout(() => inp.focus({preventScroll:true}), 0);
}
function renderKeep(){ document.getElementById("title").textContent = S.mode === "ticket" ? "Print Ticket" : "Price Check"; const camWas = cam.stream; renderScan(); if (camWas && S.camOn) mountCam(); }

/* keyboard wedge / manual: auto-submit on valid GTIN or fast burst, or Enter */
function bindScanInput(inp){
  let times = [], timer = 0;
  // hardware scanners (USB keyboard-wedge like Symbol/Zebra DS9208, Zebra DataWedge keystroke) end a code with Enter, Tab or nothing
  const submit = end => { clearTimeout(timer); const v = inp.value.trim();
    if (v) S.lastScan = {n:v.length, ms: times.length ? Math.max(0, Math.round(performance.now() - times[0])) : 0, end: end || "auto"};
    if (v && !end) scanTail = performance.now() + 250;   // code was complete before the scanner's Enter/Tab: swallow that key on the next screen
    times = []; if (v) { inp.value = ""; handleCode(v, "keyboard"); } };
  inp.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.keyCode === 13) { e.preventDefault(); submit("Enter"); }
    else if (e.key === "Tab" && inp.value.trim()) { e.preventDefault(); submit("Tab"); }
  });
  inp.addEventListener("input", () => {
    const now = performance.now(); times.push(now); clearTimeout(timer);
    const v = inp.value.trim();
    if (!v) { times = []; return; }
    const gaps = times.slice(1).map((t,i) => t - times[i]);
    const burst = gaps.length >= 3 && gaps.slice(-6).every(g => g < 45);
    const pasted = times.length === 1 && v.length >= 6;
    if (/^\d{13}$/.test(v) && validGtin(v)) return submit();
    if (/^\d{12}$/.test(v) && validGtin(v) && findItem(v)) return submit();
    if ((burst || pasted) && validGtin(v)) { timer = setTimeout(submit, 60); return; }
    if (burst || pasted) { timer = setTimeout(submit, 120); return; }
    if (findItem(v)) { timer = setTimeout(submit, 900); }
  });
  // keep focus on the scan field (so a hardware scanner always lands here)
  inp.addEventListener("blur", () => setTimeout(() => {
    const a = document.activeElement;
    if ((S.view === "scan" || S.view === "queue") && document.contains(inp) && !(a instanceof HTMLInputElement && a.type !== "file") && !(a instanceof HTMLSelectElement) && !(a instanceof HTMLTextAreaElement) && !sheetOpen() && !matchMedia("(pointer: coarse)").matches) inp.focus({preventScroll:true});
  }, 150));
}

let lastCode = "", lastAt = 0;
function handleCode(raw, source){
  const code = String(raw).trim().replace(/\s+/g, "");
  const now = Date.now();
  if (source === "camera" && code === lastCode && now - lastAt < 2000) return;
  lastCode = code; lastAt = now;
  if (S.view === "queue") { addToQueue(code); return; }
  const it = findItem(code);
  feedback(!!it);
  if (it) showItem(it, source);
  else openAdd(code, {replace: S.view === "result"});
}
function showItem(it, source){
  S.item = it; S.missCode = ""; S.showTicket = false;
  S.fromLookup = S.view === "lookup";
  pushHistory(it, S.fromLookup ? "lookup" : S.mode);
  go("result", {replace: S.view === "result"});
}

/* beep + vibrate */
let actx = null;
function unlockAudio(){ try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); actx.resume && actx.resume(); } catch(e) {} }
function feedback(ok){
  try { navigator.vibrate && navigator.vibrate(ok ? 60 : [40,60,40]); } catch(e) {}
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = "square"; o.frequency.value = ok ? 1800 : 380;
    g.gain.setValueAtTime(0.06, actx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + (ok ? .12 : .3));
    o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + (ok ? .12 : .3));
  } catch(e) {}
}

/* ---------- camera ---------- */
/* Live video needs camera access, which pages embedded in claude.ai do not get. There "Scan with camera" opens the phone's own camera
   (one shot, the barcode is decoded from the photo). A standalone page / the future PWA uses the live camera stream. */
const LIVE_CAM = (() => { try { return window.self === window.top && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia); } catch(e) { return false; } })();
const cam = { stream:null, video:null, detector:null, zx:null, zxControls:null, raf:0, paused:false, engine:"" };
function mountCam(msgHtml){
  const area = document.getElementById("camArea"); if (!area) return;
  if (msgHtml) { area.innerHTML = msgHtml; return; }
  area.innerHTML = `<div class="cam" id="camBox"><div class="vf"><div class="win"></div><div class="laser"></div></div><span class="camtag" id="camTag">${cam.engine ? "Engine: " + cam.engine : "Starting camera…"}</span></div>`;
  const box = document.getElementById("camBox");
  if (!cam.video) { cam.video = document.createElement("video"); cam.video.setAttribute("playsinline",""); cam.video.muted = true; cam.video.autoplay = true; }
  box.prepend(cam.video);
  if (cam.stream && cam.video.paused) cam.video.play().catch(()=>{});
}
function camError(e){
  S.camOn = false; stopCam();
  const name = e && e.name || "";
  const inFrame = (() => { try { return window.self !== window.top; } catch(x) { return true; } })();
  let title = "Camera not available", body = "";
  if (name === "NotAllowedError" || name === "SecurityError" || name === "PermissionDeniedError") {
    title = "Camera access is blocked";
    body = inFrame
      ? "This page is shown inside another app's frame, which blocks the camera. Open the page directly in Chrome (Android) or Safari (iPhone) and allow camera access. Until then, use “Scan from photo”, a hardware scanner or type the number."
      : (/iPhone|iPad|iPod/.test(navigator.userAgent) ? "On iPhone: Settings › Apps › Safari › Camera › Allow (or tap “Allow” when asked), then tap the camera button again. " : "Allow camera access for this site in your browser settings, then tap the camera button again. ") + "You can also use “From gallery”.";
  } else if (name === "NotFoundError" || name === "OverconstrainedError" || name === "nocam") {
    body = "No camera was found on this device. Use a hardware scanner, “Scan from photo” or type the barcode.";
  } else if (name === "NotReadableError") {
    body = "The camera is in use by another app. Close it and try again.";
  } else if (name === "lib") {
    body = "The barcode reader could not be loaded. Check the internet connection, or use a hardware scanner.";
  } else {
    body = (inFrame ? "The camera is often blocked when this page is embedded. Open it directly in the browser. " : "") + "Use “Scan from photo”, a hardware scanner or type the barcode.";
  }
  mountCam(`<div class="notice warn" role="alert"><b>${title}</b><p>${body}</p></div>`);
  const cb = document.querySelector("#camBtn span"); if (cb) cb.textContent = "Scan with camera";
}
async function startCam(){
  mountCam();
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return camError({name: window.isSecureContext === false ? "SecurityError" : "nocam"});
  try {
    cam.stream = await navigator.mediaDevices.getUserMedia({audio:false, video:{facingMode:{ideal:"environment"}, width:{ideal:1280}, height:{ideal:720}}});
  } catch(e) { return camError(e); }
  if (!S.camOn) { stopCam(); return; }
  cam.video.srcObject = cam.stream;
  try { await cam.video.play(); } catch(e) {}
  cam.paused = false;
  const det = await nativeDetector();
  if (det) { cam.detector = det; cam.engine = "native"; setTag(); loopNative(); }
  else {
    try { await loadZXing(); } catch(e) { return camError({name:"lib"}); }
    cam.engine = "ZXing"; setTag();
    const reader = zxReader();
    try {
      cam.zxControls = await reader.decodeFromStream(cam.stream, cam.video, (res) => {
        if (res && !cam.paused) onCamHit(res.getText());
      });
    } catch(e) { camError(e); }
  }
}
function setTag(){ const t = document.getElementById("camTag"); if (t) t.textContent = "Point at the barcode · " + cam.engine; }
const WANT = ["ean_13","ean_8","upc_a","code_128"];
async function nativeDetector(){
  if (!("BarcodeDetector" in window)) return null;
  try {
    const sup = await BarcodeDetector.getSupportedFormats();
    const f = WANT.filter(x => sup.includes(x));
    return f.length ? new BarcodeDetector({formats:f}) : null;
  } catch(e) { return null; }
}
function loopNative(){
  let busy = false, last = 0;
  const tick = async (t) => {
    if (!cam.stream) return;
    cam.raf = requestAnimationFrame(tick);
    if (busy || cam.paused || t - last < 110 || cam.video.readyState < 2) return;
    busy = true; last = t;
    try { const r = await cam.detector.detect(cam.video); if (r.length) onCamHit(pickBarcode(r, cam.video.videoWidth, cam.video.videoHeight)); } catch(e) {}
    busy = false;
  };
  cam.raf = requestAnimationFrame(tick);
}
function onCamHit(text){
  if (text === lastCode && Date.now() - lastAt < 2000) return;
  const box = document.getElementById("camBox"); if (box) { box.classList.add("flash"); setTimeout(() => box.classList.remove("flash"), 300); }
  handleCode(text, "camera");
}
function pauseCam(p){ cam.paused = p; }
function stopCam(){
  cancelAnimationFrame(cam.raf);
  try { cam.zxControls && cam.zxControls.stop(); } catch(e) {}
  cam.zxControls = null;
  if (cam.stream) cam.stream.getTracks().forEach(t => t.stop());
  cam.stream = null; cam.engine = "";
  if (cam.video) cam.video.srcObject = null;
}
let zxPromise = null;
function loadZXing(){
  if (window.ZXingBrowser) return Promise.resolve();
  return zxPromise = zxPromise || new Promise((ok, fail) => {
    const s = document.createElement("script");
    s.src = "lib/zxing-browser.min.js";
    s.onload = () => window.ZXingBrowser ? ok() : fail(); s.onerror = () => { zxPromise = null; fail(); };
    document.head.appendChild(s);
  });
}
function zxReader(){
  const F = ZXingBrowser.BarcodeFormat;
  // DecodeHintType: POSSIBLE_FORMATS = 2, TRY_HARDER = 3
  const hints = new Map([[2, [F.EAN_13, F.EAN_8, F.UPC_A, F.CODE_128]], [3, true]]);
  return cam.zx = cam.zx || new ZXingBrowser.BrowserMultiFormatReader(hints, 150);
}

/* if several barcodes are visible: take the biggest; when sizes are close, the one nearest the centre */
function pickBarcode(list, W, H){
  if (list.length === 1 || !W || !H) return list[0].rawValue;
  const cx = W/2, cy = H/2, diag = Math.hypot(W, H);
  const score = b => { const r = b.boundingBox || {x:0,y:0,width:0,height:0};
    const area = r.width * r.height / (W*H); const dist = Math.hypot(r.x + r.width/2 - cx, r.y + r.height/2 - cy) / diag;
    return area * (1 - dist); };
  return list.slice().sort((a,b) => score(b) - score(a))[0].rawValue;
}

/* photos of tags are often turned or tilted: try the picture at several angles (ZXing reads only near-horizontal codes) */
async function decodeAnyAngle(file){
  await loadZXing();
  const bmp = await createImageBitmap(file);
  const k = Math.min(1, 1200 / Math.max(bmp.width, bmp.height)), w = Math.round(bmp.width*k), h = Math.round(bmp.height*k);
  const c = document.createElement("canvas"), ctx = c.getContext("2d", {willReadFrequently:true});
  for (const a of [0,90,10,80,100,170,20,70,110,160,30,60,120,150,40,50,130,140]) {
    const t = a*Math.PI/180, W = Math.ceil(Math.abs(w*Math.cos(t)) + Math.abs(h*Math.sin(t))), H = Math.ceil(Math.abs(w*Math.sin(t)) + Math.abs(h*Math.cos(t)));
    c.width = W; c.height = H; ctx.fillStyle = "#fff"; ctx.fillRect(0,0,W,H);
    ctx.setTransform(1,0,0,1,W/2,H/2); ctx.rotate(t); ctx.drawImage(bmp, -w/2, -h/2, w, h); ctx.setTransform(1,0,0,1,0,0);
    try { const r = zxReader().decodeFromCanvas(c); if (r) return r.getText(); } catch(e) {}
    await new Promise(r => setTimeout(r, 0));   // keep the page responsive between tries
  }
  return "";
}

/* Claude reads the whole tag (needs the sample capability with images) */
let sampleNS;
async function getSample(){
  if (sampleNS !== undefined) return sampleNS;
  try { sampleNS = window.claude && window.claude.use ? await window.claude.use("sample") : null;
    if (sampleNS) { const lim = await sampleNS.limits().catch(() => null); if (!lim || !lim.images) sampleNS = null; } }
  catch(e) { sampleNS = null; }
  return sampleNS;
}
async function shrink(file, max=1600){
  try {
    const bmp = await createImageBitmap(file); const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const c = document.createElement("canvas"); c.width = Math.round(bmp.width*k); c.height = Math.round(bmp.height*k);
    c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
    return await new Promise(ok => c.toBlob(b => ok(b || file), "image/jpeg", 0.85));
  } catch(e) { return file; }
}
/* tag reading: only asked from a direct tap on the home screen, never in the middle of a photo */
let permsNS, lastPhoto = null;
async function getPerms(){ if (permsNS !== undefined) return permsNS; try { permsNS = window.claude && window.claude.use ? await window.claude.use("permissions") : null; } catch(e) { permsNS = null; } return permsNS; }
let aiOff = (() => { try { return localStorage.getItem("spc.ai") === "off"; } catch(e) { return false; } })();
async function aiState(){
  if (aiOff) return "off";
  const sample = await getSample(); if (!sample) return "unavailable";
  const p = await getPerms(); if (!p) return "granted";
  try { return await p.state("sample"); } catch(e) { return "unavailable"; }
}
async function renderAiCard(){
  const box = document.getElementById("aiCard"); if (!box) return;
  const st = await aiState(); if (!document.body.contains(box)) return;
  if (st === "unavailable") { box.innerHTML = ""; return; }   // photo reading by Claude only works inside the Claude app
  const txt = {granted:"On. Photos of a tag fill in prices and text.", prompt:"Off. Tap “Turn on” once to allow it.", denied:"Blocked for now. Open permissions to allow it.", off:"Switched off. Photos only read the barcode.", unavailable:"Not available here. Open this page inside the Claude app to read prices from photos. The barcode still works."}[st] || "";
  box.innerHTML = `<div class="notice"><b>Read prices from tag photos</b><p>${txt}</p>
    <div class="row" style="margin-top:8px">
      ${st === "prompt" ? `<button class="btn primary" id="aiOn">Turn on</button>` : ""}
      ${st === "denied" ? `<button class="btn" id="aiManage">Open permissions</button>` : ""}
      ${st === "off" ? `<button class="btn" id="aiEnable">Switch on</button>` : ""}
      ${st === "granted" || st === "prompt" ? `<button class="btn" id="aiDisable">Switch off</button>` : ""}
    </div></div>`;
  const on = (id, fn) => { const b = document.getElementById(id); if (b) b.onclick = fn; };
  on("aiOn", async () => { const p = await getPerms(); if (p) { try { await p.request(["sample"]); } catch(e) {} } renderAiCard(); });
  on("aiManage", async () => { const p = await getPerms(); try { await p.manage(); } catch(e) { toast(I.alert, "Use the artifact's Permissions menu at the top of the page."); } renderAiCard(); });
  on("aiEnable", () => { aiOff = false; try { localStorage.removeItem("spc.ai"); } catch(e) {} renderAiCard(); });
  on("aiDisable", () => { aiOff = true; try { localStorage.setItem("spc.ai", "off"); } catch(e) {} renderAiCard(); });
}

async function readTagWithClaude(file, barcodeHint){
  const st = await aiState();
  if (st !== "granted") return null;
  const sample = await getSample(); if (!sample) return null;
  const img = await shrink(file);
  const prompt = `The photo shows one or more retail price tags / product labels in a store. If there are several tags, use ONLY the largest one; if they are similar in size, the one closest to the centre of the photo.${barcodeHint ? " Its barcode was decoded as " + barcodeHint + "." : ""}
Read that one tag and return JSON with exactly these keys (use null when something is not printed on the tag; never guess):
{"barcode": digits printed under the barcode as one string without spaces, "style": style / article number (letters+digits, e.g. 35S5G2ZS3T), "model": model or collection name (e.g. CARSON), "color": colour in English only (ignore the French line), "size": size if printed, "original": original / retail / RRP / "was" price as a number, "outlet": outlet price as a number, "store": the current / sale / "now" / store price as a number}
Prices are euros; write 129.95 not "€ 129,95". If only one price is printed, put it in "store" unless it is labelled otherwise. Reply with the JSON only.`;
  try {
    const o = await sample.json(prompt, {images:[img], model:"claude-haiku-5-5", modelTier:"quick", effort:"low"});
    return o && typeof o === "object" ? o : null;
  } catch(e) {
    const c = e && e.code;
    toast(I.alert, c === "rate_limited" ? "Too many photo reads right now. Wait a minute." : c === "not_granted" ? "Reading tags is not allowed. Turn it on from the home screen." : c === "invalid_json" ? "Could not read the tag. Try a sharper photo." : "Could not read the tag text. Barcode only.");
    return null;
  }
}
const titleCase = s => s ? String(s).toLowerCase().replace(/(^|[\s/-])\S/g, m => m.toUpperCase()) : "";
const numOrNull = v => { if (v == null || v === "") return null; const n = +String(v).replace(/[^\d.,]/g,"").replace(",", "."); return isNaN(n) ? null : n; };
function tagToPrefill(t){
  if (!t) return {};
  const pre = {};
  if (t.style) pre.no = String(t.style).toUpperCase().replace(/\s+/g,"");
  if (t.model) pre.name = titleCase(t.model);
  if (t.color) pre.color = titleCase(t.color);
  if (t.size) pre.size = String(t.size);
  const fmt = n => n == null ? undefined : String(n).replace(".", ",");
  const o = numOrNull(t.original), ou = numOrNull(t.outlet), st = numOrNull(t.store);
  if (o != null) pre.orig = fmt(o); if (ou != null) pre.outlet = fmt(ou); if (st != null) pre.price = fmt(st);
  return pre;
}

/* scan from photo: barcode + (when available) all text on the tag */
async function onPhotoPicked(e){
  const file = e.target.files && e.target.files[0]; e.target.value = "";
  if (!file) return;
  const forForm = S.view === "add";
  lastPhoto = file;
  toast(I.clock, "Reading the tag…");
  let text = "";
  try {
    const det = await nativeDetector();
    if (det) { const bmp = await createImageBitmap(file); const r = await det.detect(bmp); if (r.length) text = pickBarcode(r, bmp.width, bmp.height); }
    if (!text) text = await decodeAnyAngle(file);
  } catch(err) {}
  if (S.view === "queue") {
    if (text) { lastCode = ""; addToQueue(text); } else { feedback(false); toast(I.alert, "No barcode found in the photo. Fill the frame with the tag and try again."); }
    return;
  }
  const tag = await readTagWithClaude(file, text);
  if (!text && tag && tag.barcode && validGtin(normCode(String(tag.barcode).replace(/\D/g,"")))) text = String(tag.barcode).replace(/\D/g,"");
  const pre = tagToPrefill(tag);
  if (forForm) {   // "Fill from photo" inside the add/edit form: merge, keep what the user already typed
    readFormInto(S.edit);
    if (text && !S.edit.ean) S.edit.ean = normCode(text);
    Object.keys(pre).forEach(k => { if (!S.edit[k] || S.edit[k] === lastAdd.name) S.edit[k] = pre[k]; });
    S.edit.fromPhoto = true; render();
    toast(text || Object.keys(pre).length ? I.check : I.alert, Object.keys(pre).length ? "Filled from photo. Check before saving." : text ? "Barcode read. No other text found." : "Nothing readable in the photo.");
    return;
  }
  if (!text) { feedback(false); toast(I.alert, "No barcode found in the photo. Fill the frame with the tag and try again."); return; }
  lastCode = ""; const it = findItem(text);
  if (!it) { feedback(true); openAdd(text, {}, pre); return; }
  const changed = Object.keys(pre).filter(k => { const cur = {no:it.no, name:it.name, color:it.color, size:it.size, orig:it.orig, outlet:it.outlet, price:it.price}[k];
    return k === "orig" || k === "outlet" || k === "price" ? numOrNull(pre[k]) !== cur : !cur; });
  feedback(true);
  if (changed.length) { openEdit(it, Object.fromEntries(changed.map(k => [k, pre[k]]))); toast(I.clock, "The photo has new data for this item. Check and save."); }
  else showItem(it, "photo");
}
document.getElementById("photoInput").addEventListener("change", onPhotoPicked);
document.getElementById("galleryInput").addEventListener("change", onPhotoPicked);

/* ---------- result ---------- */
function renderResult(){
  const it = S.item;
  if (!it) { back(); return; }
  const cls = ["card", it.promo && "is-promo", it.future && "is-future", it.stock && it.stock.store === 0 && "is-oos"].filter(Boolean).join(" ");
  const ticketMode = !!S.showTicket;
  const regular = it.outlet != null ? it.outlet : curPrice(it);
  const promoBox = it.promo ? `<div class="box promo">${I.percent}<div><b>${esc(it.promo.name)}</b><small>Ends ${fmtDate(it.promo.ends)} · ${daysTo(it.promo.ends)} days left</small></div></div>` : "";
  const futBox = it.future ? `<div class="box future">${I.clock}<div><b>New price ${eur(it.future.price)} from ${fmtDate(it.future.date)}</b><small>${daysTo(it.future.date)} days from today</small></div></div>` : "";
  const noPrice = !hasPrice(it) ? `<div class="box future">${I.alert}<div><b>No price saved yet</b><small>Tap “Edit” to add the price from the tag or the terminal.</small></div></div>` : "";
  const oosBox = it.stock && it.stock.store === 0 ? `<div class="box oos">${I.alert}<div><b>${totalStock(it) ? "None on the shop floor" : "Out of stock"}</b><small>${it.stock.back ? it.stock.back + " in backroom" : "None in backroom"}</small></div></div>` : "";
  const stock = it.stock ? `<div class="label">Stock</div>
      <div class="stock">
        <div class="${it.stock.store ? "" : "zero"}"><b>${it.stock.store}</b><small>Shop floor</small></div>
        <div class="${it.stock.back ? "" : "zero"}"><b>${it.stock.back}</b><small>Backroom</small></div>
      </div>` : "";
  const ticket = ticketMode && regular != null ? `<div class="label">Ticket preview</div>
    <div class="ticket-wrap"><div class="ticket" id="ticketEl">
      <div class="tn">${esc(it.name)}</div><div class="tm">${esc([it.color, it.size].filter(Boolean).join(" · "))} · <span class="mono">${esc(it.no)}</span></div>
      ${it.orig != null && regular !== it.orig ? `<div class="was">${eur(it.orig)}</div>` : ""}<div class="tp">${eur(regular)}</div><svg class="bc" id="tbc"></svg></div></div>
    <button class="btn primary big" id="printBtn">${I.print} Print ticket</button>` : "";
  app.innerHTML = `<section class="view">
    <article class="${cls}"><div class="stripe"></div><div class="cbody">
      <div class="head">${catIcon(it,"photo")}<button class="printico addq" id="addQueue" aria-label="Add to print list" title="Add to print list">${I.printPlus}<span class="qn" ${inQueue(it.ean) ? "" : "hidden"}>${inQueue(it.ean)}</span></button><button class="printico" id="printIco" aria-label="Print barcode label" title="Print barcode label">${I.print}</button><div class="t"><h2>${esc(it.name)}</h2><div class="meta">${esc([it.type || CAT[it.cat].name, it.size].filter(Boolean).join(" · "))}</div><div class="chips">${it.loc ? `<span class="chip locpill">${I.pin}${esc(it.loc)}</span>` : ""}${colourOf(it) ? `<span class="chip colpill" title="Colour">${(() => { const sw = swatchOf(colourOf(it)); return sw ? `<i style="background:${swBg(sw)}"></i>` : ""; })()}${esc(colourOf(it))}</span>` : ""}${stateChips(it)}${it.eu != null ? `<span class="chip eupill">${(() => { const sw = swatchOf(it.euColorEn || it.color); return sw ? `<i style="background:${sw.length > 1 ? `linear-gradient(135deg,${sw[0]} 0 50%,${sw[1]} 50% 100%)` : sw[0]}"></i>` : ""; })()}EU site ${eur(it.eu)}${it.euColor || it.color ? " · " + esc(it.euColor || it.color) : ""}${it.euStock === false ? " · sold out online" : ""}</span>` : ""}</div></div></div>
      <div class="price"><span class="lab">${it.price != null ? "Store price" : it.outlet != null ? "Outlet price" : "Original price"}</span><span class="now">${eur(curPrice(it))}</span></div>
      ${hasPrice(it) ? `<div class="p3">
        <div><small>Original${it.origFromSite ? " · site" : ""}</small><b>${eur(it.orig)}</b></div>
        <div class="${it.price == null && it.outlet != null ? "cur" : ""}"><small>Outlet</small><b>${eur(it.outlet)}</b>${pctOff(it.outlet, it.orig) > 0 ? `<em>-${pctOff(it.outlet, it.orig)}%</em>` : ""}</div>
        <div class="${it.price != null ? "cur" : ""}"><small>Store</small><b>${eur(it.price)}</b>${pctOff(it.price, it.outlet) > 0 ? `<em>-${pctOff(it.price, it.outlet)}%</em>` : ""}</div>
      </div>` : ""}
      ${noPrice}${promoBox}${futBox}${oosBox}
      <dl class="facts" style="margin:0">
        <div class="bcrow" style="grid-column:1/-1"><span><dt>Barcode</dt><dd class="mono">${esc(it.ean)}</dd></span><button type="button" class="editbtn" id="editBtn" aria-label="Edit" title="Edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 18.5h3.5l9.5-9.5a2.3 2.3 0 0 0-3.5-3.5L5.5 15z"/><path d="M13.5 7l3.5 3.5"/></svg></button></div>
      </dl>
      ${it.usd != null || it.eu != null ? `<div class="label">Website prices</div>
      <div class="p3" style="grid-template-columns:1fr 1fr">
        <div><small>EU site</small><b>${eur(it.eu)}</b>${it.euWas != null && it.eu != null && it.euWas > it.eu ? `<em>was ${eur(it.euWas)} · -${pctOff(it.eu, it.euWas)}%</em>` : ""}</div>
        <div><small>US site</small><b>${it.usd != null ? "$ " + (+it.usd).toFixed(2).replace(".", ",") : "—"}</b></div>
      </div>` : ""}
      ${(() => { const c = siteCandidates(it); return c.length ? `<div class="label">Same model on the website?</div><div class="list">${c.map((x,k) => `<button class="li" data-match="${k}"><span class="t"><b>${esc(x.name)}</b><small>${esc(x.color)} · ${x.eu != null ? eur(x.eu) + " EU" : ""}${x.eu != null && x.usd != null ? " · " : ""}${x.usd != null ? "$ " + (+x.usd).toFixed(2) + " US" : ""}</small></span><span class="p">Use</span></button>`).join("")}</div>` : ""; })()}
      ${it.siteName ? `<p class="hint" style="margin:0">Website prices from: ${esc(it.siteName)}</p>` : ""}
      ${stock}
    </div></article>
    ${ticket}
  </section>`;
  document.getElementById("editBtn").onclick = () => openEdit(it);
  const cands = siteCandidates(it);
  app.querySelectorAll("[data-match]").forEach(b => b.onclick = () => { useSitePrice(it, cands[+b.dataset.match]); toast(I.check, "Website prices added"); renderResult(); });
  document.getElementById("printIco").onclick = () => printLabels([{ean: it.ean, qty: 1}]);
  document.getElementById("addQueue").onclick = ev => {
    const b = ev.currentTarget; addToQueue(it.ean, 1, true);
    const qn = b.querySelector(".qn"); qn.hidden = false; qn.textContent = inQueue(it.ean);
    b.classList.remove("added"); void b.offsetWidth; b.classList.add("added");
    flyToFab(b);
  };
  if (ticketMode && regular != null) {
    drawBarcode(document.getElementById("tbc"), it.ean, {format: it.ean.length === 12 ? "UPC" : "EAN13", height:46, fontSize:13, margin:0});
    document.getElementById("printBtn").onclick = () => {
      document.body.classList.add("printing-ticket");
      try { window.print(); } catch(e) { toast(I.alert, "Printing is not available here. Open the page in the browser to print."); }
      setTimeout(() => document.body.classList.remove("printing-ticket"), 500);
    };
  }
}

/* ---------- add / edit ---------- */
let lastAdd = (() => { try { return JSON.parse(localStorage.getItem("spc.lastAdd") || "{}"); } catch(e) { return {}; } })();
function openAdd(code, opts={}, pre){
  S.edit = Object.assign({ existing:null, ean: normCode(code), no:"", name: lastAdd.name || "", cat: lastAdd.cat || "bag", color:"", size:"", orig:"", outlet:"", price:"", eu:"", usd:"", store:"", back:"", loc:"" }, pre || {});
  if (pre && Object.keys(pre).length) S.edit.fromPhoto = true;
  go("add", opts);
}
function readFormInto(e){
  const map = {fEan:"ean", fName:"name", fNo:"no", fColor:"color", fSize:"size", fOrig:"orig", fOutlet:"outlet", fPrice:"price", fEu:"eu", fUsd:"usd", fStore:"store", fBack:"back", fCat:"cat"};
  Object.keys(map).forEach(id => { const el = document.getElementById(id); if (el) e[map[id]] = el.value.trim(); });
}
function openEdit(it, pre){
  S.edit = { existing:it, ean:it.ean, no:it.no, name:it.name, cat:it.cat, color:it.color, size:it.size, loc:it.loc || "",
    price: it.price == null ? "" : String(it.price).replace(".", ","), orig: it.orig == null ? "" : String(it.orig).replace(".", ","), outlet: it.outlet == null ? "" : String(it.outlet).replace(".", ","), eu: it.eu == null ? "" : String(it.eu).replace(".", ","), usd: it.usd == null ? "" : String(it.usd).replace(".", ","), store: it.stock ? it.stock.store : "", back: it.stock ? it.stock.back : "" };
  if (pre) { Object.assign(S.edit, pre); S.edit.fromPhoto = true; S.edit.changed = Object.keys(pre); }
  go("add");
}
function renderAdd(){
  const e = S.edit;
  const f = (id, label, val, attrs="") => `<label class="ff"><span>${label}</span><input id="${id}" value="${esc(val)}" autocomplete="off" ${attrs}></label>`;
  const known = [...new Set(ITEMS.map(i => i.name).filter(Boolean))];
  app.innerHTML = `<section class="view">
    ${e.fromPhoto ? `<div class="notice"><b>Filled from photo</b><p>${e.changed ? "New on the photo: " + e.changed.map(k => ({orig:"original price", outlet:"outlet price", price:"store price", no:"style", name:"model", color:"colour", size:"size"})[k]).join(", ") + ". " : ""}Check every field before saving: the reading can be wrong.</p></div>` : ""}
    <div id="aiHere"></div>
    <nav class="dock" aria-label="Fill from photo"><button type="button" id="fillPhoto">${I.camera}<span>Take photo</span></button><button type="button" id="fillGallery">${I.image}<span>Gallery</span></button></nav>
    ${e.existing || e.fromPhoto || e.ean ? "" : `<div class="notice"><b>Add an item</b><p>Scan the tag with a hardware scanner or type the barcode.</p></div>`}
    <form id="addForm" class="form">
      <div class="ff2">
        ${f("fOrig","Original €",e.orig,`inputmode="decimal" placeholder="—"`)}
        ${f("fOutlet","Outlet €",e.outlet,`inputmode="decimal" placeholder="—"`)}
        ${f("fPrice","Store €",e.price,`inputmode="decimal" placeholder="—"`)}
      </div>
      <div class="ff2">
        ${f("fEu","EU site €",e.eu,`inputmode="decimal" placeholder="—"`)}
        ${f("fUsd","US site $",e.usd,`inputmode="decimal" placeholder="—"`)}
      </div>
      ${f("fEan","Barcode",e.ean,`inputmode="numeric" class="mono" required`)}
      ${f("fName","Model name",e.name,`list="knownNames" required placeholder="e.g. Carson"`)}
      <datalist id="knownNames">${known.map(n => `<option value="${esc(n)}">`).join("")}</datalist>
      <label class="ff colwrap"><span>Colour</span><i class="csw" id="fColorSw"></i><input id="fColor" value="${esc(e.color || "")}" autocomplete="off" list="knownColors" maxlength="40" placeholder="e.g. Black, Vanilla/Acorn"></label>
      <div class="colhint" id="fColorHint"></div>
      <datalist id="knownColors">${[...new Set(ITEMS.map(i => i.color).filter(Boolean))].sort().map(n => `<option value="${esc(n)}">`).join("")}</datalist>
      ${f("fNo","Style no.",e.no,`class="mono" autocapitalize="characters" placeholder="e.g. 35S5G2ZS3T"`)}
      ${f("fLoc","Location",e.loc,`list="knownLocs" maxlength="60" placeholder="e.g. Wall A · shelf 2, Backroom B3"`)}
      <datalist id="knownLocs">${[...new Set(ITEMS.map(i => i.loc).filter(Boolean))].sort().map(n => `<option value="${esc(n)}">`).join("")}</datalist>
      <!-- fields hidden from the form; their saved values are kept -->
      ${[["fCat",e.cat],["fSize",e.size],["fStore",e.store],["fBack",e.back]].map(([id,val]) => `<input type="hidden" id="${id}" value="${esc(val == null ? "" : val)}">`).join("")}
      <button class="btn primary big" type="submit">${I.check} Save item</button>
      ${e.existing ? `<button class="btn" type="button" id="delBtn">Delete item</button>` : ""}
    </form>
  </section>`;
  const colIn = document.getElementById("fColor"), colSw = document.getElementById("fColorSw"), colHint = document.getElementById("fColorHint");
  const paintCol = () => { const v = colIn.value.trim(), sw = swatchOf(v); colSw.className = "csw" + (sw ? "" : " none"); colSw.style.background = sw ? swBg(sw) : "";
    colHint.textContent = !v ? "The icon takes the colour of the bag." : sw ? "" : "Colour not recognised: the icon keeps its default look."; };
  colIn.oninput = paintCol; paintCol();
  document.getElementById("fillPhoto").onclick = () => document.getElementById("photoInput").click();
  document.getElementById("fillGallery").onclick = () => document.getElementById("galleryInput").click();
  if (lastPhoto) aiState().then(st => {
    const host = document.getElementById("aiHere"); if (!host || st === "granted") return;
    host.innerHTML = st === "unavailable"
      ? `<div class="notice warn"><b>Only the barcode was read</b><p>Reading prices and text from the photo works when this page is open inside the Claude app.</p></div>`
      : `<div class="notice warn"><b>Only the barcode was read</b><p>Allow Claude to read the rest of this tag (model, colour, prices).</p><div class="row" style="margin-top:8px"><button class="btn primary" type="button" id="readRest">${st === "denied" ? "Open permissions" : st === "off" ? "Switch on and read" : "Allow and read the tag"}</button></div></div>`;
    const b = document.getElementById("readRest"); if (!b) return;
    b.onclick = async () => {
      if (st === "off") { aiOff = false; try { localStorage.removeItem("spc.ai"); } catch(e) {} }
      const p = await getPerms();
      if (p && st === "denied") { try { await p.manage(); } catch(e) { toast(I.alert, "Use the artifact's Permissions menu at the top of the page."); return; } }
      else if (p && st === "prompt") { try { await p.request(["sample"]); } catch(e) {} }
      if (await aiState() !== "granted") { toast(I.alert, "Reading the tag is still not allowed."); return; }
      b.disabled = true; b.textContent = "Reading…";
      readFormInto(S.edit);
      const pre = tagToPrefill(await readTagWithClaude(lastPhoto, S.edit.ean));
      Object.keys(pre).forEach(k => { if (!S.edit[k] || S.edit[k] === lastAdd.name) S.edit[k] = pre[k]; });
      S.edit.fromPhoto = true; render();
      toast(Object.keys(pre).length ? I.check : I.alert, Object.keys(pre).length ? "Filled from photo. Check before saving." : "No text found on the tag.");
    };
  });
  const firstEmpty = ["fEan","fName","fNo","fOrig"].map(id => document.getElementById(id)).find(x => !x.value);
  if (firstEmpty && !isTouch) firstEmpty.focus();
  document.getElementById("addForm").onsubmit = ev => {
    ev.preventDefault();
    const v = id => document.getElementById(id).value.trim();
    const ean = normCode(v("fEan"));
    if (/^\d+$/.test(ean) && [8,12,13].includes(ean.length) && !validGtin(ean)) { toast(I.alert, "Check digit is wrong. Re-scan or re-type the barcode."); return; }
    const dup = findItem(ean);
    if (dup && dup !== e.existing) { toast(I.alert, "This barcode is already saved as " + dup.name + "."); return; }
    const num = x => x === "" ? null : +x.replace(",", ".");
    const price = num(v("fPrice")), orig = num(v("fOrig")), outlet = num(v("fOutlet")), eu = num(v("fEu")), usd = num(v("fUsd"));
    if ([price, orig, outlet, eu, usd].some(x => x != null && isNaN(x))) { toast(I.alert, "Prices must be numbers, e.g. 129,00"); return; }
    const st = v("fStore"), bk = v("fBack");
    const stock = st === "" && bk === "" ? null : {store: Math.max(0, parseInt(st) || 0), back: Math.max(0, parseInt(bk) || 0)};
    const data = {ean, name:v("fName"), no:v("fNo").toUpperCase(), color:v("fColor"), size:v("fSize"), cat:document.getElementById("fCat").value, type: e.existing ? e.existing.type || "" : "", orig, outlet, price, eu, usd, stock, loc:v("fLoc")};
    let it;
    if (e.existing && data.orig !== e.existing.orig) data.origFromSite = false;
    if (!e.existing || data.eu !== e.existing.eu) { data.euV = EU_V; if (e.existing && data.eu !== e.existing.eu) data.euWas = null; }   // a price typed here is kept until a newer EU table arrives
    if (e.existing) { it = Object.assign(e.existing, data); }
    else { it = Object.assign({promo:null, future:null}, data); ITEMS.unshift(it); }
    lastAdd = {name:data.name, cat:data.cat}; try { localStorage.setItem("spc.lastAdd", JSON.stringify(lastAdd)); } catch(x) {}
    saveCatalog(); feedback(true); toast(I.check, e.existing ? "Saved" : "Added " + data.name);
    S.edit = null; S.item = it; S.fromLookup = false;
    if (S.stack[S.stack.length-1] === "result") S.stack.pop();
    pushHistory(it, S.mode); go("result", {replace:true});
  };
  const del = document.getElementById("delBtn");
  if (del) del.onclick = () => {
    confirmSheet("Delete this item?", e.existing.name + " · " + e.existing.ean, "Delete", () => {
      ITEMS = ITEMS.filter(i => i !== e.existing); saveCatalog();
      S.edit = null; S.stack = ["home"]; go("lookup", {replace:true}); toast(I.check, "Deleted");
    });
  };
}

/* ---------- export / import ---------- */
let dlNS;
async function exportCatalog(){
  const data = JSON.stringify({version:1, exported:new Date().toISOString(), items:ITEMS}, null, 1);
  try { dlNS = dlNS !== undefined ? dlNS : (window.claude && window.claude.use ? await window.claude.use("downloads") : null); } catch(e) { dlNS = null; }
  if (dlNS) {
    try { await dlNS.save({filename:"price-check-items.json", data}); toast(I.check, "Items exported"); }
    catch(e) { if (e && e.code !== "declined") toast(I.alert, "Export is not available here."); }
    return;
  }
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data], {type:"application/json"})); a.download = "price-check-items.json";
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function importCatalog(ev){
  const file = ev.target.files && ev.target.files[0]; ev.target.value = ""; if (!file) return;
  file.text().then(t => {
    const o = JSON.parse(t); const list = Array.isArray(o) ? o : o.items;
    if (!Array.isArray(list)) throw 0;
    let added = 0, updated = 0;
    list.map(fromJSON).filter(x => x.ean).forEach(x => { const cur = findItem(x.ean); if (cur) { Object.assign(cur, x); updated++; } else { ITEMS.push(x); added++; } });
    saveCatalog(); render(); toast(I.check, `Imported: ${added} new, ${updated} updated`);
  }).catch(() => toast(I.alert, "That file is not an item list from this app."));
}

/* ---------- lookup ---------- */
function renderLookup(){
  app.innerHTML = `<section class="view">
    <label class="field">${I.search}<input id="q" type="search" autocomplete="off" placeholder="Model, style no., colour or barcode" aria-label="Search items" value="${esc(S.query)}"></label>
    <div class="list" id="res"></div>
  </section>`;
  const q = document.getElementById("q"), res = document.getElementById("res");
  const draw = () => {
    S.query = q.value;
    const terms = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const list = ITEMS.filter(it => { const hay = (it.name+" "+it.no+" "+it.ean+" "+it.color+" "+(it.type||"")+" "+CAT[it.cat].name).toLowerCase(); return terms.every(t => hay.includes(t)); });
    // render in chunks of 80 and add the next chunk when the end of the list scrolls into view
    if (obs) obs.disconnect();
    if (!list.length) { res.innerHTML = ITEMS.length ? `<div class="empty">No items match “${esc(q.value)}”.</div>` : `<div class="empty">No items yet. Scan a tag to add one.</div>`; return; }
    let n = 0; res.innerHTML = "";
    const more = () => {
      const old = res.querySelector(".more"); if (old) old.remove();
      res.insertAdjacentHTML("beforeend", list.slice(n, n + 80).map(it => row(it)).join(""));
      n = Math.min(list.length, n + 80); bindRows();
      if (n < list.length) { res.insertAdjacentHTML("beforeend", `<button class="empty more" type="button" style="border:0;background:transparent;width:100%">Loading ${list.length - n} more…</button>`); const m = res.querySelector(".more"); m.onclick = more; if (obs) obs.observe(m); }
    };
    obs = "IntersectionObserver" in window ? new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) more(); }, {rootMargin: "600px"}) : null;
    more();
  };
  let obs = null;
  q.addEventListener("input", draw);
  q.addEventListener("keydown", e => { if (e.key === "Enter") { const it = findItem(q.value); if (it) showItem(it, "lookup"); } });
  draw();
  if (!isTouch) q.focus();
}

function drawBarcode(svg, code, o){
  if (!window.JsBarcode) { svg.outerHTML = `<div class="mono" style="font-size:18px;padding:10px 0">${code}</div>`; return; }
  try { JsBarcode(svg, code, Object.assign({format:"EAN13", lineColor:"#000", background:"#ffffff", width:2, height:60, fontSize:16, margin:8, flat: false}, o)); }
  catch(e) { svg.outerHTML = `<div class="mono">${code}</div>`; }
}

/* ---------- print list (batch barcode labels) ---------- */
/* several print lists: "Main" always exists and gets every scan by default; named lists are made with "New", picked to receive scans, and disappear once printed */
const cleanQ = a => Array.isArray(a) ? a.filter(x => x && x.ean).map(x => ({ean:String(x.ean), qty:Math.max(1, Math.min(999, x.qty | 0 || 1))})) : [];
let LISTS = (() => { try { const a = JSON.parse(localStorage.getItem("spc.lists") || "null"); if (Array.isArray(a) && a.length) { const L = a.filter(l => l && l.id).map(l => ({id:String(l.id), name:String(l.name || "List"), items:cleanQ(l.items), note:String(l.note || "")})); if (!L.some(l => l.id === "main")) L.unshift({id:"main", name:"Main", items:[]}); return L; } } catch(e) {}
  let old = []; try { old = cleanQ(JSON.parse(localStorage.getItem("spc.queue") || "[]")); } catch(e) {}
  return [{id:"main", name:"Main", items:old}]; })();
let activeListId = (() => { try { const v = localStorage.getItem("spc.activeList"); return LISTS.some(l => l.id === v) ? v : "main"; } catch(e) { return "main"; } })();
const activeList = () => LISTS.find(l => l.id === activeListId) || LISTS[0];
let QUEUE = activeList().items;
const saveQueue = () => { activeList().items = QUEUE; try { localStorage.setItem("spc.lists", JSON.stringify(LISTS)); localStorage.setItem("spc.activeList", activeListId); } catch(e) {} };
function setActiveList(id){ saveQueue(); activeListId = LISTS.some(l => l.id === id) ? id : "main"; QUEUE = activeList().items; saveQueue(); }
function createList(name){
  name = String(name || "").trim().slice(0, 40); if (!name) return false;
  const l = {id:"l" + Date.now().toString(36), name, items:[]}; saveQueue(); LISTS.push(l); setActiveList(l.id); return true;
}
function removeActiveList(){ if (activeListId === "main") { QUEUE = []; activeList().note = ""; saveQueue(); return; } const gone = activeListId; LISTS = LISTS.filter(l => l.id !== gone); activeListId = "main"; QUEUE = activeList().items; saveQueue(); }
const queueTotal = () => QUEUE.reduce((n, q) => n + q.qty, 0);
const inQueue = ean => { const q = QUEUE.find(x => x.ean === normCode(ean)); return q ? q.qty : 0; };
const addLabel = ean => inQueue(ean) ? `In print list · ${inQueue(ean)}` : "Add to print list";
function addToQueue(code, n = 1, quiet = false){
  const ean = normCode(code); if (!ean) return;
  const q = QUEUE.find(x => x.ean === ean);
  if (q) { q.qty = Math.min(999, q.qty + n); QUEUE.splice(QUEUE.indexOf(q), 1); QUEUE.unshift(q); }
  else QUEUE.unshift({ean, qty: n});
  saveQueue(); feedback(true); updateFab(!quiet);
  const it = findItem(ean), cur = QUEUE[0].qty;
  if (S.view === "queue") { drawLists(); drawQueue(); if (!it) toast(I.alert, "Not in the item list: the label gets the barcode only."); }
  else if (!quiet) toast(I.check, (it ? it.name : ean) + " · " + cur + " in " + (activeListId === "main" ? "print list" : "“" + activeList().name + "”"));
}
function updateFab(bump){
  const f = document.getElementById("fab"); if (!f) return;
  f.hidden = S.view === "queue" || S.view === "add";
  const n = queueTotal();
  f.innerHTML = I.printList + (n ? `<span class="badge">${n > 999 ? "999+" : n}</span>` : "");
  if (bump) { f.classList.remove("bump"); void f.offsetWidth; f.classList.add("bump"); }
}
document.getElementById("fab").onclick = () => { S.fromLookup = false; go("queue"); };

/* printers: the browser cannot list real printers, so each entry is a label format; the physical printer is chosen once in the print dialog and the browser remembers it */
const PRESET_PRINTERS = [
  {id:"l5030", name:"Label printer 50×30 mm", w:50, h:30},
  {id:"l5840", name:"Label printer 58×40 mm", w:58, h:40},
  {id:"l4025", name:"Label printer 40×25 mm", w:40, h:25},
  {id:"a4", name:"A4 sheet · 3×8 labels", sheet:true}
];
let CUSTOM_PRINTERS = (() => { try { return JSON.parse(localStorage.getItem("spc.printers") || "[]"); } catch(e) { return []; } })();
let printerId = (() => { try { return localStorage.getItem("spc.printer") || "l5030"; } catch(e) { return "l5030"; } })();
let labelPrice = (() => { try { return localStorage.getItem("spc.labelPrice") !== "off"; } catch(e) { return true; } })();
const CONNECTED_PRINTERS = [];
const allPrinters = () => PRESET_PRINTERS.concat(CUSTOM_PRINTERS);
const curPrinter = () => allPrinters().find(p => p.id === printerId) || PRESET_PRINTERS[0];
function fillPrinterSel(){
  const sel = document.getElementById("printerSel");
  // real printers appear here once a printer connection exists; until then the list is empty
  if (!CONNECTED_PRINTERS.length) { sel.innerHTML = `<option selected>No printer</option>`; sel.disabled = true; sel.onchange = null; return; }
  sel.disabled = false;
  sel.innerHTML = CONNECTED_PRINTERS.map(p => `<option value="${esc(p.id)}" ${p.id === printerId ? "selected" : ""}>${esc(p.name)}</option>`).join("");
  sel.onchange = () => { printerId = sel.value; try { localStorage.setItem("spc.printer", printerId); } catch(e) {} toast(I.print, "Printer: " + curPrinter().name); };
}

function renderQueue(){
  app.innerHTML = `<section class="view">
    <div id="listBar"></div>
    <div class="scanbox">
      <label class="field">${I.barcode}<input id="code" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" inputmode="text" placeholder="Scan items to print" aria-label="Barcode"></label>
    </div>
    <div id="noteBar"></div>
    <div id="camArea"></div>
    <div id="qList"></div>
    <button type="button" class="fab qprint" id="qPrint" aria-label="Print labels">${I.print}</button>
    <nav class="dock dock-side" aria-label="Scan into the list"><button type="button" id="qCam">${I.scan}<span>${S.camOn ? "Stop camera" : "Camera"}</span></button><button type="button" id="qPhoto">${I.image}<span>From gallery</span></button></nav>
  </section>`;
  const inp = document.getElementById("code");
  bindScanInput(inp);
  document.getElementById("qPrint").onclick = askPrint;
  drawLists();
  drawQueue();
  document.getElementById("qPhoto").onclick = () => document.getElementById("galleryInput").click();
  document.getElementById("qCam").onclick = () => { unlockAudio(); if (!LIVE_CAM) { document.getElementById("photoInput").click(); return; } if (S.camOn) { stopCam(); S.camOn = false; } else { S.camOn = true; } renderQueue(); if (S.camOn) startCam(); };
  if (S.camOn) { mountCam(); if (!cam.stream) startCam(); else pauseCam(false); }
  if (!matchMedia("(pointer: coarse)").matches) setTimeout(() => inp.focus({preventScroll:true}), 0);
}
function drawLists(showForm){
  const host = document.getElementById("listBar"); if (!host) return;
  const cnt = l => l.items.reduce((n, q) => n + q.qty, 0);
  host.innerHTML = `<div class="view" style="gap:12px">
    <div class="lists" role="group" aria-label="Print lists">${LISTS.map(l => `<button type="button" data-list="${esc(l.id)}" aria-pressed="${l.id === activeListId}"><span class="nm">${esc(l.name)}</span><span class="n">${cnt(l)}</span></button>`).join("")}</div>
    ${showForm ? `<form class="newform" id="newForm"><input id="newName" maxlength="40" autocomplete="off" placeholder="List name, e.g. Window display" aria-label="List name"><button class="btn primary" type="submit">Create</button><button class="btn" type="button" id="newCancel">Cancel</button></form>` : ""}
  </div>`;
  const nb = document.getElementById("noteBar"); if (nb) nb.innerHTML = `<textarea id="qNote" class="qnote" rows="2" maxlength="500" placeholder="Notes for ${activeListId === "main" ? "this list" : "“" + esc(activeList().name) + "”"}…" aria-label="Notes">${esc(activeList().note || "")}</textarea>`;
  const note = document.getElementById("qNote");
  const fit = () => { note.style.height = "auto"; note.style.height = Math.min(note.scrollHeight + 2, 200) + "px"; };
  note.oninput = () => { activeList().note = note.value; saveQueue(); fit(); };
  note.onkeydown = e => { if (e.key === "Escape") { note.blur(); refocusScan(); } };
  setTimeout(fit, 0);
  host.querySelectorAll("[data-list]").forEach(b => b.onclick = () => { setActiveList(b.dataset.list); drawLists(); drawQueue(); updateFab(); refocusScan(); });
  const act = host.querySelector('[aria-pressed="true"]'); if (act && act.scrollIntoView) act.scrollIntoView({block:"nearest", inline:"nearest"});
  if (showForm) {
    const f = document.getElementById("newForm"), n = document.getElementById("newName");
    f.onsubmit = e => { e.preventDefault(); if (!createList(n.value)) { n.focus(); return; } drawLists(); drawQueue(); updateFab(); toast(I.check, "New list “" + activeList().name + "”: scans go here"); refocusScan(); };
    document.getElementById("newCancel").onclick = () => { drawLists(); refocusScan(); };
    setTimeout(() => n.focus(), 0);
  }
}
document.getElementById("newListBtn").onclick = () => { if (S.view === "queue") drawLists(true); };
/* after a tap on a phone, focusing the scan field would pop up the on-screen keyboard: only refocus where a hardware keyboard/scanner is the input (mouse pointer) */
function refocusScan(){ if (matchMedia("(pointer: coarse)").matches) { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); return; } const c = document.getElementById("code"); c && c.focus({preventScroll:true}); }
/* yes/no sheet (no browser dialogs: they block the page and the scanner) */
function confirmSheet(title, text, yes, onYes){
  closeSheet();
  const w = document.createElement("div"); w.className = "sheet-wrap"; w.id = "sheet";
  w.innerHTML = `<div class="sheet" role="alertdialog" aria-modal="true" aria-labelledby="shT"><b id="shT">${esc(title)}</b>${text ? `<p>${esc(text)}</p>` : ""}<div class="sheet-btns"><button type="button" class="btn" id="shNo">No</button><button type="button" class="btn primary" id="shYes">${esc(yes)}</button></div></div>`;
  document.body.appendChild(w);
  const done = ok => { closeSheet(); if (ok) onYes(); refocusScan(); };
  w.onclick = e => { if (e.target === w) done(false); };
  document.getElementById("shNo").onclick = () => done(false);
  document.getElementById("shYes").onclick = () => done(true);
  sheetKey = e => { if (e.key === "Escape") { e.preventDefault(); done(false); } };
  document.addEventListener("keydown", sheetKey);
  setTimeout(() => { const n = document.getElementById("shNo"); n && n.focus({preventScroll:true}); }, 0);
}
let sheetKey = null;
function closeSheet(){ const w = document.getElementById("sheet"); if (w) w.remove(); if (sheetKey) { document.removeEventListener("keydown", sheetKey); sheetKey = null; } }
const sheetOpen = () => !!document.getElementById("sheet");
function askPrint(){
  if (!QUEUE.length) { toast(I.alert, "Nothing to print yet. Scan a tag first."); return; }
  const t = queueTotal(), named = activeListId !== "main";
  confirmSheet(`Print ${t} label${t === 1 ? "" : "s"}?`, named ? `“${activeList().name}” will be removed after printing.` : "The list will be cleared after printing.", "Print", printActive);
}
function askClear(){
  const named = activeListId !== "main", nm = activeList().name;
  confirmSheet(named ? `Delete “${nm}”?` : "Clear the list?", named ? "The list, its items and notes will be removed." : "All items and the notes will be removed.", named ? "Delete" : "Clear", () => {
    removeActiveList(); drawLists(); drawQueue(); updateFab(); toast(I.check, named ? "List “" + nm + "” deleted" : "Print list cleared");
  });
}
function askEmpty(){   // named list: empty it but keep the list
  const nm = activeList().name;
  confirmSheet(`Clear “${nm}”?`, "All items and the notes will be removed. The list stays.", "Clear", () => {
    QUEUE = []; activeList().note = ""; saveQueue(); drawLists(); drawQueue(); updateFab(); toast(I.check, "List “" + nm + "” cleared");
  });
}
function printActive(){   // labels are built first, then the list is emptied
  if (!QUEUE.length) { toast(I.alert, "Nothing to print yet. Scan a tag first."); return; }
  const named = activeListId !== "main", nm = activeList().name;
  printLabels(QUEUE.slice()); removeActiveList(); drawLists(); drawQueue(); updateFab();
  toast(I.check, named ? "Sent to print. List “" + nm + "” is done, back to Main." : "Sent to print. List cleared.");
}
function drawQueue(){
  const host = document.getElementById("qList");
  const qp = document.getElementById("qPrint");
  if (qp) { const t = queueTotal(); qp.classList.toggle("off", !t); qp.innerHTML = I.print + (t ? `<span class="badge">${t > 999 ? "999+" : t}</span>` : ""); qp.setAttribute("aria-label", t ? `Print ${t} label${t === 1 ? "" : "s"}` : "Print labels"); }
  if (!host) return;
  const named = activeListId !== "main";
  if (!QUEUE.length) { host.innerHTML = `<div class="view" style="gap:12px"><div class="list"><div class="empty">${named ? "“" + esc(activeList().name) + "” is empty. Everything you scan now goes into this list." : "The list is empty. Scan a tag, or tap “Add to print list” on an item."}</div></div>${named ? `<button class="btn" id="clearQ">Delete list</button>` : ""}</div>`;
    const d = document.getElementById("clearQ"); if (d) d.onclick = askClear;
    return; }
  const total = queueTotal();
  host.innerHTML = `<div class="view" style="gap:12px">
    <div class="list">${QUEUE.map((q, k) => { const it = findItem(q.ean);
      return `<div class="qrow"><div class="t"><b>${it ? esc(it.name) : "Unknown item"}</b><small>${esc([it && it.color, it && hasPrice(it) ? eur(curPrice(it)) : ""].filter(Boolean).join(" · "))}${it ? " · " : ""}<span class="mono">${esc(q.ean)}</span></small></div>
        <div class="qty"><button type="button" data-dec="${k}" aria-label="One less">−</button><input data-qty="${k}" value="${q.qty}" inputmode="numeric" maxlength="3" aria-label="Copies"><button type="button" data-inc="${k}" aria-label="One more">+</button></div>
        <button type="button" class="del" data-del="${k}" aria-label="Remove">×</button></div>`; }).join("")}</div>
    ${named ? `<div class="qbtns"><button class="btn" id="emptyQ">Clear list</button><button class="btn" id="clearQ">Delete list</button></div>` : `<button class="btn" id="clearQ">Clear list</button>`}
  </div>`;
  const setQ = (k, v) => { v = Math.max(0, Math.min(999, v | 0)); if (v === 0) QUEUE.splice(k, 1); else QUEUE[k].qty = v; saveQueue(); drawQueue(); updateFab(); };
  host.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => setQ(+b.dataset.inc, QUEUE[+b.dataset.inc].qty + 1));
  host.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => setQ(+b.dataset.dec, QUEUE[+b.dataset.dec].qty - 1));
  host.querySelectorAll("[data-del]").forEach(b => b.onclick = () => setQ(+b.dataset.del, 0));
  host.querySelectorAll("[data-qty]").forEach(i => {
    const commit = () => { const k = +i.dataset.qty; if (QUEUE[k] && +i.value !== QUEUE[k].qty) setQ(k, +i.value || 0); };
    i.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); commit(); const c = document.getElementById("code"); c && c.focus(); } });
    i.addEventListener("change", commit);
    i.addEventListener("focus", () => i.select());
  });
  document.getElementById("clearQ").onclick = askClear;
  const eq = document.getElementById("emptyQ"); if (eq) eq.onclick = askEmpty;
}
/* the item "flies" in a small arc from the button into the round print button, which then pulses */
function flyToFab(from){
  const fab = document.getElementById("fab");
  if (!fab || fab.hidden || !from.animate || matchMedia("(prefers-reduced-motion: reduce)").matches) { updateFab(true); return; }
  const a = from.getBoundingClientRect(), z = fab.getBoundingClientRect();
  const dot = document.createElement("div"); dot.className = "fly"; dot.innerHTML = I.barcode;
  document.body.appendChild(dot);
  const x0 = a.left + a.width/2 - 18, y0 = a.top + a.height/2 - 18, x1 = z.left + z.width/2 - 18, y1 = z.top + z.height/2 - 18;
  const mx = (x0 + x1)/2 - 40, my = Math.min(y0, y1) - 90;
  dot.animate([
    {transform:`translate(${x0}px,${y0}px) scale(.6)`, opacity:0},
    {transform:`translate(${x0}px,${y0}px) scale(1.15)`, opacity:1, offset:.12},
    {transform:`translate(${mx}px,${my}px) scale(1)`, opacity:1, offset:.5},
    {transform:`translate(${x1}px,${y1}px) scale(.45)`, opacity:.9}
  ], {duration:720, easing:"cubic-bezier(.45,0,.2,1)"}).onfinish = () => { dot.remove(); updateFab(true); };
}
function bcFormat(ean){ return /^\d{12}$/.test(ean) ? "UPC" : /^\d{13}$/.test(ean) ? "EAN13" : /^\d{8}$/.test(ean) ? "EAN8" : "CODE128"; }
function printLabels(list){
  const pr = curPrinter(), area = document.getElementById("printArea");
  const labels = []; list.forEach(q => { for (let i = 0; i < q.qty && labels.length < 1000; i++) labels.push(q.ean); });
  if (!labels.length) { toast(I.alert, "Nothing to print."); return; }
  area.className = pr.sheet ? "sheet" : "";
  area.style.setProperty("--lw", (pr.w || 50) + "mm"); area.style.setProperty("--lh", (pr.h || 30) + "mm");
  document.getElementById("pageStyle").textContent = pr.sheet ? "@page{size:A4 portrait;margin:10mm 0 0 0}" : `@page{size:${pr.w}mm ${pr.h}mm;margin:0}`;
  area.innerHTML = labels.map(ean => { const it = findItem(ean), p = it && labelPrice && hasPrice(it) ? eur(curPrice(it)) : "";
    return `<div class="lbl">${it ? `<div class="n">${esc(it.name)}</div><div class="c">${esc([it.color, it.size, it.no].filter(Boolean).join(" · "))}</div>` : ""}${p ? `<div class="pr">${p}</div>` : ""}<svg data-bc="${esc(ean)}"></svg></div>`; }).join("");
  area.querySelectorAll("svg[data-bc]").forEach(svg => { const c = svg.dataset.bc; drawBarcode(svg, c, {format: bcFormat(c), height: 38, fontSize: 11, margin: 0, width: 1.6, textMargin: 0}); });
  document.body.classList.add("printing-labels");
  const done = () => { document.body.classList.remove("printing-labels"); window.removeEventListener("afterprint", done); };
  window.addEventListener("afterprint", done);
  try { window.print(); } catch(e) { toast(I.alert, "Printing is not available here. Open the page in the browser to print."); }
}

/* ---------- toast ---------- */
let toastT = 0;
function toast(icon, msg){
  const t = document.getElementById("toast");
  t.innerHTML = icon + "<span></span>"; t.lastChild.textContent = msg;
  t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 3200);
}

/* the scanner's own Enter/Tab that arrives right after an early auto-submit must not press a button or submit a form on the next screen */
let scanTail = 0;
document.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === "Tab" || e.keyCode === 13) && performance.now() < scanTail) {
    e.preventDefault(); e.stopPropagation(); scanTail = 0;
    if (S.lastScan) { S.lastScan.end = e.key === "Tab" ? "Tab" : "Enter"; const d = document.getElementById("scanDiag"); if (d) d.textContent = `Last scan: ${S.lastScan.n} chars · ${S.lastScan.ms} ms · end: ${S.lastScan.end}`; }
  }
}, true);
/* global hardware-scanner catch: typing anywhere outside a field on the home screen starts a price check */
document.addEventListener("keydown", e => {
  if ((S.view !== "home" && S.view !== "result" && S.view !== "lookup" && S.view !== "queue") || e.ctrlKey || e.metaKey || e.altKey) return;
  if (sheetOpen()) return;
  if (/^[0-9]$/.test(e.key) && !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLSelectElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
    e.preventDefault();
    if (S.view === "queue") { const q = document.getElementById("code"); if (q) { q.value = e.key; q.focus(); q.dispatchEvent(new Event("input")); } return; }
    S.fromLookup = false;
    if (S.view === "result") { S.showTicket = false; back(); } if (S.view !== "scan") go("scan");
    const inp = document.getElementById("code"); if (inp) { inp.value = e.key; inp.focus(); inp.dispatchEvent(new Event("input")); }
  }
});
document.addEventListener("visibilitychange", () => { if (document.hidden && cam.stream) { stopCam(); } else if (!document.hidden && S.camOn && (S.view === "scan" || S.view === "queue")) startCam(); });

render();
