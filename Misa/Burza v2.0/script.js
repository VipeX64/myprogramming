let opened = false;
let openedSell = false;

function fuckouttahere() { // funke umožňující náhled do rozvahy majetku
    $("#instructions").css("display", "none");
    $("#titleScreen").css("display", "none");
}
$(".buyInput").click(function (e) { // funkce tolerující input v buy/sell menu
    e.stopPropagation();
})
$(".sellInput").click(function (e) { // funkce tolerující input v buy/sell menu
    e.stopPropagation();
})
$(".buyStocks").click(function () { // animace animace buy a sell čudlítek
    if (!opened) {
        $(this).children("input:first").show();
        $(this).animate({
            width: "7.5vw"
        }, 500);
        $(this).children("input:first").animate({
            width: "5vw"
        }, 500);
        opened = true;
    } else {
        $(this).animate({
            width: "2.5vw"
        }, 500);
        $(this).children("input:first").delay(200).hide(0);
        $(this).children("input:first").animate({
            width: "0vw"
        }, 500);
        opened = false;
    }
});

$(".sellStocks").click(function () {
    if (!openedSell) {
        $(this).children("input:first").show();
        $(this).animate({
            width: "7.5vw"
        }, 500);
        $(this).children("input:first").animate({
            width: "4.5vw"
        }, 500);
        openedSell = true;
    } else {
        $(this).animate({
            width: "2.5vw"
        }, 500);
        $(this).children("input:first").delay(200).hide(0);
        $(this).children("input:first").animate({
            width: "0vw"
        }, 500);
        openedSell = false;
    }
})
$(document).keypress(function (e) { // zmáčknul enter --> pošle se požadavek na koupení/prodej akcií
    if (e.which == 13) {
        let focused;
        let sell = false;
        let amount = $(":focus").val();
        if ($(":focus").parent().parent().attr("id").charAt(0) == "S") { //kliknul na sell
            focused = $(":focus").parent().parent().prev().prev();
            // focused = document.activeElement.parentElement.parentElement.previousElementSibling.previousElementSibling.id;
            sell = true;
        } else { // kliknul na nákup
            focused = $(":focus").parent().parent().prev();
        }
        let pre = focused.next().next().next().text().slice(0, -1);
        console.log(pre+" and a uhh: ");
        if (sell) {
            focused.html(parseInt(focused.html()) - parseInt(amount));
            focused.next().next().next().text(parseInt(pre) - (parseInt(focused.prev().text().slice(0, -1)) * parseInt($(":focus").val())) + "$");
        } else {
            focused.html(parseInt(focused.html()) + parseInt(amount));
            focused.next().next().next().text(parseInt(pre) + (parseInt(focused.prev().text().slice(0, -1)) * parseInt($(":focus").val())) + "$");
        }
        // co když je rovna 0? co když je menší než nula?
        console.log(focused + " and " + amount);


    }
});

// $(document).ready(function () {
//     console.log("I'm ready!");
//     var movementStrength = 25;
//     var height = movementStrength / $(window).height();
//     var width = movementStrength / $(window).width();
//     $("#titleScreen").mousemove(function (e) {
//         var pageX = e.pageX - ($(window).width() / 2);
//         var pageY = e.pageY - ($(window).height() / 2);
//         var newvalueX = width * pageX * -1 - 25;
//         var newvalueY = height * pageY * -1 - 50;
//         $('#titleScreen').css("background-position", newvalueX + "px     " + newvalueY + "px");

//     });
// });

let kolo = 0;
let penize = 100000;
let akcie = [[23.71, 35.52, 68.75, 81.22, 51.98], [27.36, 38.10, 69.81, 80.56, 54.18], [22.02, 35.85, 70.19, 79.38, 57.52], [24.18, 39.85, 68.90, 78.06, 54.32], [23.09, 37.23, 71.12, 79.54, 56.21], [25.39, 36.53, 68.12, 82.30, 53.68]];
let tabulka = [0, 0, 0, 0, 0];

function updateTabulky() {
    let pyrMoney = (akcie[kolo][0] * tabulka[0]);
    let sportMoney = (akcie[kolo][1] * tabulka[1]);
    let WOEMoney = (akcie[kolo][2] * tabulka[2]);
    let pharmaMoney = (akcie[kolo][3] * tabulka[3]);
    let oilMoney = (akcie[kolo][4] * tabulka[4]);

    document.getElementById("pyrKurz").innerHTML = akcie[kolo][0] + "$";
    document.getElementById("sportKurz").innerHTML = akcie[kolo][1] + "$";
    document.getElementById("WOEKurz").innerHTML = akcie[kolo][2] + "$";
    document.getElementById("pharmaKurz").innerHTML = akcie[kolo][3] + "$";
    document.getElementById("oilKurz").innerHTML = akcie[kolo][4] + "$";

    document.getElementById("pyrAkcie").innerHTML = tabulka[0];
    document.getElementById("sportAkcie").innerHTML = tabulka[1];
    document.getElementById("WOEAkcie").innerHTML = tabulka[2];
    document.getElementById("pharmaAkcie").innerHTML = tabulka[3];
    document.getElementById("oilAkcie").innerHTML = tabulka[4];

    document.getElementById("pyrPenize").innerHTML = Math.round(pyrMoney) + "$";
    document.getElementById("sportPenize").innerHTML = Math.round(sportMoney) + "$";
    document.getElementById("WOEPenize").innerHTML = Math.round(WOEMoney) + "$";
    document.getElementById("pharmaPenize").innerHTML = Math.round(pharmaMoney) + "$";
    document.getElementById("oilPenize").innerHTML = Math.round(oilMoney) + "$";

    document.getElementById("money").innerHTML = Math.round(penize) + "$";
    document.getElementById("akcieMoney").innerHTML = Math.round(pyrMoney + sportMoney + WOEMoney + pharmaMoney + oilMoney) + "$";
}

function nakup(firma) {
    let ammound = 0;
    switch (firma) {
        case 0:
            ammound = document.getElementById("pyrMnozstvi").value
            break;

        case 1:
            ammound = document.getElementById("sportMnozstvi").value
            break;

        case 2:
            ammound = document.getElementById("WOEMnozstvi").value
            break;

        case 3:
            ammound = document.getElementById("pharmaMnozstvi").value
            break;

        case 4:
            ammound = document.getElementById("oilMnozstvi").value
            break;

        default:
            alert("Chyba!");
    }
    ammound = parseInt(ammound);
    if ((akcie[kolo][firma] * ammound) <= penize) {
        penize -= (akcie[kolo][firma] * ammound);
        tabulka[firma] += ammound;
        updateTabulky();
    } else {
        alert("Nemas dost penez, abys koupil tolik akcii");
    }
}

function prodej(firma) {
    let ammound = 0;
    switch (firma) {
        case 0:
            ammound = document.getElementById("pyrMnozstvi").value
            break;

        case 1:
            ammound = document.getElementById("sportMnozstvi").value
            break;

        case 2:
            ammound = document.getElementById("WOEMnozstvi").value
            break;

        case 3:
            ammound = document.getElementById("pharmaMnozstvi").value
            break;

        case 4:
            ammound = document.getElementById("oilMnozstvi").value
            break;

        default:
            alert("Chyba!");
    }
    ammound = parseInt(ammound);
    if (ammound <= tabulka[firma]) {
        penize += (akcie[kolo][firma] * ammound);
        tabulka[firma] -= ammound;
        updateTabulky();
    } else {
        alert("Pokusil ses prodat vice akcii nez vlastnis");
    }

}
function nextTurn() {
    if (kolo < 5) {
        noviny(kolo);
        kolo++;
        updateTabulky();
    } else {
        alert("konec hry");
    }
}
