let localip;
//let nameDatabase = ["JohnyJohny", "YesPapa", "Michal", "Vipe", "Leming", "SS-ObergruppenFuhrer-Touskova", "Fillet", "Edgelord", "Cricket", "woooo", "ecs dee"];
let user;
const vipefact = [""]; // command vipe


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
// socket.emit("upDatabase", {
//     ip: localip,
//     name: user
// });
// server

$(function () {
    $(".draggable").draggable({
        containment: "#workplace"
    });
});
socket.on("letsplay", function (data) {
    localip = data.ip;
    user = data.user;
    typeWriter();
    startem();
});

// socket.on(localip, function (data) {
//     console.log("at least");
//     celkovyTerminalu += `${data.from} says ${data.msg}`;
//     $("#TerminalOutput").val(celkovyTerminalu);
//     textarea.scrollTop = textarea.scrollHeight;
// });

socket.on("message", function (data) {
    if (data.ip == localip) {

        celkovyTerminalu += `${data.from} says ${data.msg} \n`;
        $("#TerminalOutput").val(celkovyTerminalu);
        textarea.scrollTop = textarea.scrollHeight;
    } else {
        console.log("at least");
    }
    

});



$(document).ready(function () {
    console.log("ready!");
});
let ndClick = false;
let letterFirst = 0;
let letter = 0;
let connected = false;
let celkovyTerminalu = "";
let textarea = document.getElementById("TerminalOutput");
let zindex = 50;
let msg;
let chatIp;
let BottomI = 0; // sets degrees for bottomBar rotation

let focus = false;
$("input").focus(function () {
    focus = true;
})
$("input").blur(function () {
    focus = false;
})

let update = function () { //temporary database that shows all ip addresses online/offline that have connected since server startup
    socket.emit("DBreq", {
    });
    socket.on("DBres", function (data) {
        $("#DB").html(data.res);
    })
}
$(".draggable").mousedown(function (event) { // click on new element will take the selected element in the first view place
    $(event.target).css("z-index", zindex);
    zindex++;
})



function bottomBar(){ //automatic rotation of background
if(BottomI ==360){
    BottomI = 0;
}
$("#bottomDesk").css("background",`repeating-linear-gradient(${BottomI}deg, #32134a, #823cc1 100px)`);
BottomI++;
}

$(".icons div").click(function (event) { //icons being visually toggled - ON and OFF
    if ($(this).attr("data-ng-value") == "nonactive") { //not on --> open tab
        $(this).attr("data-ng-value", "active");
        $(`#${$(this).attr("data-ng-list")}`).fadeTo(200, 1);
        $(`#${$(this).attr("data-ng-list")}`).css("pointer-events", "auto");
        $(this).css("background-image", "linear-gradient(to top, rgba(102, 17, 132, 0.6), rgba(183, 92, 183, 0.6))");
    } else { // on --> close tab
        $(this).attr("data-ng-value", "nonactive");
        $(`#${$(this).attr("data-ng-list")}`).fadeTo(200, 0);
        $(this).css("background", "transparent");
        $(`#${$(this).attr("data-ng-list")}`).css("pointer-events", "none");
    }
});

$(".icons div").hover(
    function () {
        $(this).children().children().css("color", "rgba(0, 0, 0, 0.55)");
        $(this).children().children().css("cursor", "pointer");
    }, function () {
        $(this).children().children().css("color", "rgb(185, 185, 185)");
        $(this).children().children().css("cursor", "auto");
    });

$("#optionMenu").hover(
    function () {
        $(this).children().css("color", "rgb(128, 52, 163);");
        $(this).children().css("cursor", "pointer");
    }, function () {
        $(this).children().css("color", "rgb(185, 185, 185)");
        $(this).children().css("cursor", "auto");
    }
)

// closing windows
$("#closeCons").click(function () {
    $("#terminal").fadeTo(200, 0);
    $("#terminal").css("pointer-events", "none");
    $("#icTerminal").attr("data-ng-value", "nonactive");
    $("#icTerminal").css("background", "transparent");
});
$("#closeDats").click(function () {
    $("#databaseDiv").fadeTo(200, 0);
    $("#databaseDiv").css("pointer-events", "none");
    $("#icDBase").attr("data-ng-value", "nonactive");
    $("#icDBase").css("background", "transparent");
});
//closing windows

// $("#optionMenu").click(function(){
//     $("#desktopMenu").css("display","block");
//     let ndClick = true;
//     console.log(ndClick);
// })
// $("body").click(function(){
//     console.log("hey");
//     console.log(ndClick);
//     if(ndClick){
//         $("#desktopMenu").css("display","none");
//         ndClick = false;
//         console.log("heyaa");
//     }
// })

$("#optionMenu").click(function () {
    $(document).on("click", function (e) {
        if (e.target.id === "optionMenu" || e.target.id === "desktopMenu") {
            $("#desktopMenu").show();
        } else {
            $("#desktopMenu").hide();
        }
    })
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
                    celkovyTerminalu += "Connected to " + user + "\n";

                    $("#TerminalOutput").val(celkovyTerminalu);
                    textarea.scrollTop = textarea.scrollHeight;
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
function startem() { // which elements are to be visible upon startup
    $("#icTerminal").css("background-image", "linear-gradient(to top, rgba(102, 17, 132, 0.6), rgba(183, 92, 183, 0.6))");
    $("#icDBase").css("background-image", "linear-gradient(to top, rgba(102, 17, 132, 0.6), rgba(183, 92, 183, 0.6))");
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
            }, 750);

        } else if (arrayInputu[0] == "bcgr") { //BCGR - list all available 
            $("#TerminalOutput").val(celkovyTerminalu);
            if (arrayInputu[1] == "hacknet") {
                $("#workplace").css("background-image", "url(../../../../server/src/img/hcknet.jpg)");
                $("#workplace").css("background-size", "cover");

            } else {
                $("#workplace").css("background-image", "url(../../../../server/src/img/HAXNGONE.png)");
                $("#workplace").css("background-size", "50%");
            }


        } else if (arrayInputu[0].toLowerCase() == "msg" && arrayInputu.length >= 2) {
            chatIp = arrayInputu[1];
            msg = "";
            
            //celkovyTerminalu += `msg ${arrayInputu[1]}`;
            for (let i = 2; i < arrayInputu.length; i++) {
                msg += ` ${arrayInputu[i]}`;
                //celkovyTerminalu += ` ${arrayInputu[i]}`;
                $("#TerminalOutput").val(celkovyTerminalu);
            }
            console.log(arrayInputu[1]);
            socket.emit("chatSend", {
                from: localip,
                ip: chatIp,
                message: msg
            });


        } else {
            celkovyTerminalu += "error, invalid command" + "\n";
            $("#TerminalOutput").val(celkovyTerminalu);
        }
        textarea.scrollTop = textarea.scrollHeight;
        $("#TerminalInput").val("");
    }
});

setInterval(update, 2000);

setInterval(bottomBar,50);

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