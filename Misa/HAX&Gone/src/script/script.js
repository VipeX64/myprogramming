
let focus = false;
    $("input").focus(function () {
        focus = true;
    })
    $("input").blur(function () {
        focus = false;
    })
    
$(document).keyup(function (e) {
    
    if (e.which == 122) {
        e.preventDefault();//kill anything that browser may have assigned to it by default
        //do what ever you wish here :) 
        $("#desktop").css("height", "100%");
        $("#desktop").css("height", "-webkit-fill-available");
        return false;
    }
    if (e.which == 13 && focus) {
        alert("works");
    }
});