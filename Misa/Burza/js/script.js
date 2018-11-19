$(document).ready(function() {
    console.log("I'm ready!");
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#top-image").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
              
    });
    var hv = document.getElementById("HV");
    var dolary = document.getElementById("dolary");
    var akcie = document.getElementById("akcie");
    var celkem = document.getElementById("celkem");

    var AkciePyro = document.getElementById("buyAkciePyr");

});
function firstPage(){
    window.location = "pages/introduction.html";
}
function startBurza(){
    window.location = "firstRound.html";
}
function firstNews(){
    window.location = "firstNews.html";
}
function letsAct(){
    window.location = "firstBuy.html";
}
