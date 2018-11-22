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

function nakup(mnozstvi, typ){
    let penize = mnozstvi * Prices[kolo][typ];
    if (penize > moneyz){
        alert("Na tento nákup nemáš dost peněz");
    }

    else{
    switch(typ){
        case 0:
            moneyz -= penize;
            PyroxAm += mnozstvi;
            $("#PyroxAmount").text(PyroxAm);
            $("#cash").text(moneyz + "$");
            break;
    
        case 1:
            moneyz -= penize;
            SportAm += mnozstvi;
            $("#SportAmount").text(SportAm);
            $("#cash").text(moneyz + "$");
            break;
            
        case 2:
            moneyz -= penize;
            WOEAm += mnozstvi;
            $("#WOEAmount").text(WOEAm);
            break; 
            
        case 3:
            moneyz -= penize;
            PharmaAm += mnozstvi;
            $("#PharmaAmount").text(PharmaAm);
            $("#cash").text(moneyz + "$");
            break;

        case 4:
            moneyz -= penize;
            OilAm += mnozstvi;
            $("#OilAmount").text(OilAm);
            $("#cash").text(moneyz + "$");
            break;

        default:
            alert("chyba switche");
        }
    }
}

function prodej(mnozstvi, typ){
    switch(typ){
        case 0:
            if (mnozstvi > PyroxAm){
                alert("Pokusil ses prodat více akcií než vlastníš")
            } else {
                PyroxAm -= mnozstvi;
                moneyz += (mnozstvi * PyroxVal);
                $("#PyroxAmount").text(PyroxAm);
                $("#cash").text(moneyz + "$");
            }
            break;

        case 1:
            if (mnozstvi > SportAm){
                alert("Pokusil ses prodat více akcií než vlastníš")
            } else {
                SportAm -= mnozstvi;
                moneyz += (mnozstvi * SportVal);
                $("#SportAmount").text(SportAm);
                $("#cash").text(moneyz + "$");
            }
            break;

        case 2:
            if (mnozstvi > WOEAm){
                alert("Pokusil ses prodat více akcií než vlastníš")
            } else {
                WOEAm -= mnozstvi;
                moneyz += (mnozstvi * WOEVal);
                $("#WOEAmount").text(WOEAm);
                $("#cash").text(moneyz + "$");
            }
            break;

        case 3:
            if (mnozstvi > PharmaAm){
                alert("Pokusil ses prodat více akcií než vlastníš")
            } else {
                PharmaAm -= mnozstvi;
                moneyz += (mnozstvi * PharmaVal);
                $("#PharmaAmount").text(PharmaAm);
                $("#cash").text(moneyz + "$");
            }
            break;
        
        case 4:
            if (mnozstvi > OilAm){
                alert("Pokusil ses prodat více akcií než vlastníš")
            } else {
                OilAm -= mnozstvi;
                moneyz += (mnozstvi * OilVal);
                $("#OilAmount").text(OilAm);
                $("#cash").text(moneyz + "$");
            }
            break;
        
        default:
            alert("Chyba switche");
            break;

    }

}

 

let Prices = [[23.70,35.52,68.75,81.22,51.98],[27.36,38.10,69.81,80.56,54.18],[22.02,35.85,70.19,79.38,57.52],[24.18,39.85,68.90,78.06,54.32],[23.09,37.23,71.12,79.54,56.21],[25.39,36.53,68.12,82.30,53.68]];
let kolo = 0;
let moneyz = 100000; 


let PyroxAm = 0;
$("#PyroxAmount").text(PyroxAm);
let PyroxVal = Prices[kolo][0];
$("#PyroxValue").text(PyroxVal + "$");
let PyroxCur = PyroxAm * PyroxVal;
$("#PyroxInCur").text(PyroxCur + "$");

let SportAm = 0;
$("#SportAmount").text(SportAm);
let SportVal = Prices[kolo][1];
$("#SportValue").text(SportVal + "$");
let SportCur = SportAm * SportVal;
$("#SportInCur").text(SportCur + "$");

let WOEAm = 0;
$("#WOEAmount").text(WOEAm);
let WOEVal = Prices[kolo][2];
$("#WOEValue").text(WOEVal + "$");
let WOECur = WOEAm * WOEVal;
$("#WOEInCur").text(WOECur + "$");

let PharmaAm = 0;
$("#PharmaAmount").text(PharmaAm);
let PharmaVal = Prices[kolo][3];
$("#PharmaValue").text(PharmaVal + "$");
let PharmaCur = PharmaAm * PharmaVal;
$("#PharmaInCur").text(PharmaCur + "$");

let OilAm = 0;
$("#OilAmount").text(OilAm);
let OilVal = Prices[kolo][4];
$("#OilValue").text(OilVal + "$");
let OilCur = OilAm * OilVal;
$("#OilInCur").text(OilCur + "$");

moneyStocks = (PyroxCur + SportCur + WOECur + PharmaCur + OilCur);
$("#moneyInStocks").text(moneyStocks + "$");
$("#cash").text(moneyz + "$");

nakup(10,1);
prodej(5,1);
