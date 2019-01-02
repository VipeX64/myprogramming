
const express = require("express");
const app = express();
const serv = require("http").Server(app);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/client/index.html");
});
app.use("/client", express.static(__dirname + "/client"));

serv.listen(6400);

let userList = [];
let preDatabase = "";


const io = require("socket.io")(serv, {});
io.sockets.on("connection", function (socket) {
    userList.push(socket);
    console.log("socket connection");

    socket.on("disconnect",function(){
         console.log("User disconnected");
         let i = userList.indexOf(socket);
         userList.splice(i, 1);
         console.log(userList.length);
         
     })


    socket.on("upDatabase", function (data) {
        preDatabase += data.name + ": " + data.ip + "\n";


    })
    socket.on("DBreq", function (data) {
        socket.emit("DBres", {
            res: preDatabase
        })
    })

    // socket.on("updateDat",function(data){
    //     socket.emit("updateData",{
    //         idNow:data.ip,
    //         nameNow:data.name
    //     })
    // });

    socket.on("test", function (data) {
        console.log("you have logged onto a pc: " + data.responce);
    })


})

