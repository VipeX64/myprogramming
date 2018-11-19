let money = $("#cash").text();
let moneyStocks = "";

let PyroxAm = $("#PyroxAmount").text();
let PyroxVal = $("#PyroxValue").text();
PyroxVal = PyroxVal.slice(0, -1);
let PyroxCur = parseInt(PyroxAm,10) * PyroxVal;
PyroxCur += "$";
$("#PyroxInCur").text(PyroxCur);

let SportAm = $("#SportAmount").text();
let SportVal = $("#SportValue").text();
SportVal = SportVal.slice(0, -1);
let SportCur = parseInt(SportxAm,10) * SportVal;
SportCur += "$";
$("#SportInCur").text(SportCur);

let WOEAm = $("#WOEAmount").text();
let WOEVal = $("#WOEValue").text();
WOEVal = WOEVal.slice(0, -1);
let WOECur = parseInt(WOEAm,10) * WOEVal;
WOECur += "$";
$("#WOEInCur").text(WOECur);

let PharmaAm = $("#PharmaAmount").text();
let PharmaVal = $("#PharmaValue").text();
PharmaVal = PharmaVal.slice(0, -1);
let PharmaCur = parseInt(PharmaAm,10) * PharmaVal;
PharmaCur += "$";
$("#PharmaInCur").text(PharmaCur);

let OilAm = $("#OilAmount").text();
let OilVal = $("#OilValue").text();
OilVal = OilVal.slice(0, -1);
let OilCur = parseInt(OilAm,10) * OilVal;
OilCur += "$";
$("#OilInCur").text(OilCur);

moneyStocks = (parseInt(PyroxCur.slice(0, -1),10) + parseInt(SportCur.slice(0, -1),10) + parseInt(WOECur.slice(0, -1),10) + parseInt(PharmaCur.slice(0, -1),10) + parseInt(OilCur.slice(0, -1),10));
$("#moneyInStocks").text(moneyStocks);