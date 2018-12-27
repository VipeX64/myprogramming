// server
const socket = io();

let testResponce = function () {
    socket.emit("test", {
        responce: localip
    })
}
// server

$(function () {
    $(".draggable").draggable({
        containment: "#workplace"
    });
});
$(document).ready(function () {
    console.log("ready!");
    typeWriter();

});
let nameDatabase = ["JohnyJohny","YesPapa","Michal","Vipe","Leming","SS-ObergruppenFührer-Toušková","Chick-fill-a","Edgelord","Cricket","woooo","ggE retsaE"]
let localip = Math.floor(Math.random() * 193) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256); // termporary madeup IP address
let user = nameDatabase[Math.floor(Math.random()*nameDatabase.length)]
let letterFirst = 0;
let letter = 0;
let connected = false;
celkovyTerminalu = "";
let textarea = document.getElementById("TerminalOutput");

let focus = false;
$("input").focus(function () {
    focus = true;
})
$("input").blur(function () {
    focus = false;
})

function connectFunc(address) { // function that let's the user connect to another pc
    let connected = false;
    // alert(address);
    celkovyTerminalu += ("connecting to " + address);
    $("#TerminalOutput").val(celkovyTerminalu);
    let i = 0;
    $("#TerminalInput").prop("readonly", true);
    let dots = setInterval(function () {
        if (i == 2) {
            clearInterval(dots); $("#TerminalInput").prop("readonly", false);
            setTimeout(() => {
                celkovyTerminalu += "\n";
                if (address == localip) { // connect to yourself
                    celkovyTerminalu += "sick dude";
                    $("#TerminalOutput").val(celkovyTerminalu);
                }
            }, 200);

        }
        celkovyTerminalu += ".";
        $("#TerminalOutput").val(celkovyTerminalu);
        i++;
    }, 500);
    $("#TerminalOutput").val(celkovyTerminalu);
}
function typeWriter() { // function that "typewrites" the welcome message
    $("#TerminalInput").prop("readonly", true);
    let welcome = "> Program Hax&Gone initiated.. " + "\n" + "> Login succesfull.." + "\n" + "> Welcome back " + user + "\n" + ">" + "\n";
    if (letter < welcome.length) {
        celkovyTerminalu += welcome.charAt(letter);
        $("#TerminalOutput").val(celkovyTerminalu);
        letter++;
        setTimeout(typeWriter, 75);
    } else {
        $("#TerminalInput").prop("readonly", false);
    }

}
$(document).keyup(function (e) {

    if (e.which == 122) {
        e.preventDefault();//kill anything that browser may have assigned to it by default
        //do what ever you wish here :) 

        return false;
    }
    if (e.which == 13 && focus) {
        vstupTerminalu = $("#TerminalInput").val();
        celkovyTerminalu += "> ";
        celkovyTerminalu += vstupTerminalu;
        celkovyTerminalu += "\n";
        let arrayInputu = vstupTerminalu.split(" ");
        if (arrayInputu[0] == "connect") { // CONNECT
            connectFunc(arrayInputu[1]);
            if (connected) {

            }
            $("#TerminalOutput").val(celkovyTerminalu);
        } else if (arrayInputu[0] == "ipconfig") { // IPCONFIG
            $("#TerminalOutput").val(celkovyTerminalu);
            setTimeout(function () {
                celkovyTerminalu += user + "'s ip is: " + localip + "\n";
                $("#TerminalOutput").val(celkovyTerminalu);
            }, 1500);

        } else {
            $("#TerminalOutput").val(celkovyTerminalu);
        }
        textarea.scrollTop = textarea.scrollHeight;
        $("#TerminalInput").val("");
    }
});
function formatDate() {
    let date = new Date();

    // let monthNames = [
    //     "January", "February", "March",
    //     "April", "May", "June", "July",
    //     "August", "September", "October",
    //     "November", "December"
    // ];
    let day = ("0" + date.getDate()).slice(-2);
    let monthIndex = date.getMonth() + 1;
    monthIndex < 10 ? monthIndex = '0' + monthIndex : monthIndex = '' + monthIndex; // ('' + month) for string result
    let hour = date.getHours();
    hour < 10 ? hour = "0" + hour : hour = "" + hour; // makes sure the format ends as eg. 06 and not as 6
    let minutes = date.getMinutes();
    minutes < 10 ? minutes = "0" + minutes : minutes = "" + minutes; // makes sure the format ends as eg. 06 and not as 6
    let seconds = date.getSeconds();
    seconds < 10 ? seconds = "0" + seconds : seconds = "" + seconds; // makes sure the format ends as eg. 06 and not as 6
    $("#date").text(day + '.' + monthIndex + "."); // 
    $("#dateTime").text(hour + ":" + minutes + ":" + seconds); // 
}
setInterval(formatDate, 1000);


//   let now = new Date();

//   alert( now );
