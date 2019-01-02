let localip = Math.floor(Math.random() * 193) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256); // termporary madeup IP address
let nameDatabase = ["JohnyJohny","YesPapa","Michal","Vipe","Leming","SS-ObergruppenFuhrer-Touskova","Fillet","Edgelord","Cricket","woooo","ecs dee"];
let user = nameDatabase[Math.floor(Math.random()*nameDatabase.length)];



// server
const socket = io();


// socket.emit("updateDat",{
//     ip:localip,
//     name:user
// });
// socket.on("updateData",function(data){
//    // $("#database").html(data.idNow);
//    console.log(data);
//    for(let i = 0;i<data.length;i++){
//     console.log("what");
//       $("#database table tr:last").after(`<tr><td>${data[i].nameNow}: </td><td>${data[i].idNow}</td></tr>`);
//    }
    
// })
socket.emit("upDatabase", {
    ip: localip,
    name: user
});
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

let letterFirst = 0;
let letter = 0;
let connected = false;
let celkovyTerminalu = "";
let textarea = document.getElementById("TerminalOutput");
let zindex = 50;

let focus = false;
$("input").focus(function () {
    focus = true;
})
$("input").blur(function () {
    focus = false;
})

let update = function() { //temporary database that shows all ip addresses online/offline that have connected since server startup
    socket.emit("DBreq",{
    });
    socket.on("DBres", function(data){
        $("#DB").html(data.res);
    })
}
$(".draggable").mousedown(function(event){ // click on new element will take the selected element in the first view place
    $(event.target).css("z-index", zindex);
    zindex++;
})
$(".icons div").hover(
    function(){
    $(this).children().children().css("color","rgba(0, 0, 0, 0.55)");
    $(this).children().children().css("cursor","pointer");
}, function(){
    $(this).children().children().css("color","rgb(185, 185, 185)");
    $(this).children().children().css("cursor","auto");
});

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
                    celkovyTerminalu += "Connected to "+user + "\n";
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
            if (connected) { // TBA
            }

            

            $("#TerminalOutput").val(celkovyTerminalu);
        } else if (arrayInputu[0] == "ipconfig") { // IPCONFIG
            $("#TerminalOutput").val(celkovyTerminalu);
            setTimeout(function () {
                celkovyTerminalu += user + "'s ip is: " + localip + "\n";
                $("#TerminalOutput").val(celkovyTerminalu);
            }, 1500);

        } else {
            celkovyTerminalu+= "error, invalid command"+"\n";
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
    $("#date").text(day + '. ' + monthIndex + "."); // 
    $("#dateTime").text(hour + ":" + minutes + ":" + seconds); // 
}
setInterval(formatDate, 1000);


//   let now = new Date();

//   alert( now );
