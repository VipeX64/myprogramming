$(document).ready(function() {
    console.log("I'm ready!");
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#titleScreen").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('#titleScreen').css("background-position", newvalueX+"px     "+newvalueY+"px");
              
    });
});
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
