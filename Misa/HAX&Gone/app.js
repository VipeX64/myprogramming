
const express = require("express");
const app = express();
const serv = require("http").Server(app);

const nameDatabase = ["JohnyJohny", "YesPapa", "Michal", "Vipe", "Leming", "SS-ObergruppenFuhrer-Touskova", "Fillet", "Edgelord", "Cricket", "woooo", "ecs dee"];


app.get("/", function (req, res) {
    //res.sendFile(__dirname + "/client/index.html");
    res.redirect('/login');
});
app.use("/game", express.static(__dirname + "/client"));
app.use("/challanges", express.static(__dirname + "/challanges"));
app.use("/login", express.static(__dirname + "/login"));
app.use("/server", express.static("./server/")); // makes it possible for pages to get files from here
serv.listen(6400);

let userList = {};
let online = [];
let preDatabase = "";


const io = require("socket.io")(serv, {});
io.sockets.on("connection", function (socket) {
    userList[socket.ip];
    //console.log("socket connection: " + socket); [object object]
    socket.user = nameDatabase[Math.floor(Math.random() * nameDatabase.length)];
    socket.ip = Math.floor(Math.random() * 193) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256); // termporary madeup IP address
    
    socket.emit("letsplay", {
        user: socket.user,
        ip: socket.ip
    });
    
    online.push(socket.user);
    online.push(socket.ip);
    console.log(`${socket.user} connected with an IP of ${socket.ip}`)
    socket.on("disconnect", function () {
        console.log(`${socket.user} disconnected with an IP of ${socket.ip}`)
        delete userList[socket.ip];
        online.splice(online.indexOf(socket.user), 1);
        online.splice(online.indexOf(socket.ip), 1);
        console.log(online);
    });
    // socket.on("upDatabase", function (data) {
    //     //preDatabase += data.name + ": " + data.ip + "\n";
    //     preDatabase = "";


    // });
    socket.on("uplogin", function (data) {
        if (data.user == "admin" && data.pwd == "admin") {
            socket.emit("readyToPlay", {
                success: true
            });
        }
    });
    socket.on("DBreq", function (data) {
        console.log(Object.keys(io.engine.clients));
        console.log(online);
        preDatabase = "";
        for(let i = 0;i<online.length;i +=2){
            preDatabase += `${online[i]} with IP: ${online[i+1]} \n`; 
            
        }
        
        socket.emit("DBres", {
            res: preDatabase
        })
    });

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

