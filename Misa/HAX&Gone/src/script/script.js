
celkovyTerminalu = "";

let focus = false;
    $("input").focus(function () {
        focus = true;
    })
    $("input").blur(function () {
        focus = false;
    })

<<<<<<< HEAD
function connectFunc(adress) {
    alert(adress);
}
    
=======
>>>>>>> e85c5c4f8152defcfdbdde39d18098fd22f275ea
$(document).keyup(function (e) {
    
    if (e.which == 122) {
        e.preventDefault();//kill anything that browser may have assigned to it by default
        //do what ever you wish here :) 
        
        return false;
    }
    if (e.which == 13 && focus) {
        vstupTerminalu = $("#TerminalInput").val();
        celkovyTerminalu += ">";
        celkovyTerminalu += vstupTerminalu;
        celkovyTerminalu += "\n";
        let arrayInputu = vstupTerminalu.split(" ");
        if (arrayInputu[0] == "connect") {
            connectFunc(arrayInputu[1]);
        }
        $("#TerminalOutput").val(celkovyTerminalu);
    }
});

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  $("#date").text(formatDate(new Date()));

//   let now = new Date();
//   alert( now );