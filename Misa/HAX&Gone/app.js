
const express = require("express");
const app = express();
const serv = require("http").Server(app);

app.get("/",function(req, res) {
    res.sendFile(__dirname+"/client/index.html");
});
app.use("/client",express.static(__dirname+"/client"));

serv.listen(6400);

const io = require("socket.io") (serv,{});
io.sockets.on("connection", function(socket){
    console.log("socket connection");

    socket.on("test",function(data){
        console.log("you have logged onto a pc: "+data.responce);
    })
})