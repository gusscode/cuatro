const {Server} = require("socket.io")

const sockets = (io =new Server()) => {
     io.on("connection",(socket)=>{

        console.log("a user connected");
        socket.on("disconnect", () => {
          console.log("user disconnected");
        });
        
        socket.on("alerta", function (msg){
          console.log(msg);
          socket.emit("alerta", msg)
        })

        socket.on("notification", function (msg){
          io.emit("notification", msg)
        })
    })
};

module.exports = sockets;
