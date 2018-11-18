
celkovyTerminalu = "";

let focus = false;
    $("input").focus(function () {
        focus = true;
    })
    $("input").blur(function () {
        focus = false;
    })

function connectFunc(adress) {
    alert(adress);
}
    
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

    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  $("#date").text(formatDate(new Date()));

//   let now = new Date();

//   alert( now );
dragElement(document.getElementById("terminal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
