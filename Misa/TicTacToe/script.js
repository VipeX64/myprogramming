var playground = [[0,0,0],
[0,0,0],
[0,0,0]];
var hraje = 0;
var player1 = prompt("Whats your name?: "); // X
var player2 = prompt("Whats your name?: "); // O
var vyhral = false;

function hra(id) {

if(!vyhral){
var x = id.charAt(0);
var y = id.charAt(1);
// console.log(x);
// console.log(y);
// console.log(playground[x][y]);
if(playground[x][y] != 0){
console.log("nic se nemá stát");
} else if((hraje%2) == 0) { //hrac 1
//do kliknutýho elementu napiš křížek
document.getElementById(id).innerHTML = "X";
//checkni výhru == vezmi proměnnou ID
playground[x][y] = 1; //hráč 1
//přičíst jedna k hráči
hraje++;
} else if((hraje%2) == 1){ //hrac 2
document.getElementById(id).innerHTML = "O";
playground[x][y] = 5;        
hraje++;
}
var pole = [3,15];
if((pole.includes(playground[0][0] + playground[0][1] + playground[0][2]))||
(pole.includes(playground[1][0] + playground[1][1] + playground[1][2]))||
(pole.includes(playground[2][0] + playground[2][1] + playground[2][2]))||
(pole.includes(playground[0][0] + playground[1][0] + playground[2][0]))||
(pole.includes(playground[0][1] + playground[1][1] + playground[2][1]))||
(pole.includes(playground[0][2] + playground[1][2] + playground[2][2]))||
(pole.includes(playground[0][0] + playground[1][1] + playground[2][2]))||
(pole.includes(playground[0][2] + playground[1][1] + playground[2][0]))){
vyhral = true;
if((hraje%2)==1){
document.getElementById("winner").innerHTML = "Congrats, well done "+player1;
} else {
document.getElementById("winner").innerHTML = "Congrats, well done "+player2;
}
}

}
if(hraje == 9){
vyhral = true;
document.getElementById("winner").innerHTML = "Ani jeden z vas debilů nevyhrál :)";
}
}