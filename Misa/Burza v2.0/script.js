let money = $("#cash").text();
let moneyStocks = "";
let opened = false;

function fuckouttahere() { // funke umožňující náhled do rozvahy majetku
    $("#instructions").css("display", "none");
    $("#titleScreen").css("display", "none");
}
$("#buyInput").click(function(e) { // funkce tolerující input v buy/sell menu
    e.stopPropagation();
})
$("#buyStocks").click(function () { // animace animace buy a sell čudlítek
    if (!opened) {
        $("#buyStocks").animate({
            width: "7vw"
        }, 1000);
        $("#buyInput").animate({
            width: "4vw"
        }, 1000, function () {

        });
        opened = true;
    } else {
        $("#buyStocks").animate({
            width: "2.5vw"
        }, 1000);
        $("#buyInput").animate({
            width: "0vw"
        }, 1000, function () {

        });
        opened = false;
    }
});
$(document).ready(function () {
    console.log("I'm ready!");
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#titleScreen").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#titleScreen').css("background-position", newvalueX + "px     " + newvalueY + "px");

    });
});
let PyroxAm = $("#PyroxAmount").text();
let PyroxVal = $("#PyroxValue").text();
PyroxVal = PyroxVal.slice(0, -1);
let PyroxCur = parseInt(PyroxAm, 10) * PyroxVal;
PyroxCur += "$";
$("#PyroxInCur").text(PyroxCur);

let SportAm = $("#SportAmount").text();
let SportVal = $("#SportValue").text();
SportVal = SportVal.slice(0, -1);
let SportCur = parseInt(SportAm, 10) * SportVal;
SportCur += "$";
$("#SportInCur").text(SportCur);

let WOEAm = $("#WOEAmount").text();
let WOEVal = $("#WOEValue").text();
WOEVal = WOEVal.slice(0, -1);
let WOECur = parseInt(WOEAm, 10) * WOEVal;
WOECur += "$";
$("#WOEInCur").text(WOECur);

let PharmaAm = $("#PharmaAmount").text();
let PharmaVal = $("#PharmaValue").text();
PharmaVal = PharmaVal.slice(0, -1);
let PharmaCur = parseInt(PharmaAm, 10) * PharmaVal;
PharmaCur += "$";
$("#PharmaInCur").text(PharmaCur);

let OilAm = $("#OilAmount").text();
let OilVal = $("#OilValue").text();
OilVal = OilVal.slice(0, -1);
let OilCur = parseInt(OilAm, 10) * OilVal;
OilCur += "$";
$("#OilInCur").text(OilCur);

moneyStocks = (parseInt(PyroxCur.slice(0, -1), 10) + parseInt(SportCur.slice(0, -1), 10) + parseInt(WOECur.slice(0, -1), 10) + parseInt(PharmaCur.slice(0, -1), 10) + parseInt(OilCur.slice(0, -1), 10));
$("#moneyInStocks").text(moneyStocks);
