const express = require("express");
const fs = require("fs").promises;
const path = require("path")
const http = require("http")
const {Server} = require("socket.io")
const indexSockets = require("../sockets/index.sockets")
const cors = require("cors")

class ServerPrincipal {
  constructor() {
    this.app = express();
    
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
    this.server = http.createServer(this.app)
    this.io = new Server(this.server)
    this.sockets();
    indexSockets(this.io)
  }
  // Listen on port 3000
  listen() {
    return this.server.listen(3001, () => console.log("Listen on port 3000"));
  }

  async routes() {
    try {
        const routesFiles = await fs.readdir(path.join(__dirname, "../routes"));
        //console.log("estas son las rutas: "+routesFiles);
        routesFiles.forEach(e => {
            const router = require("../routes/"+ e)
            const route = router.__route
            //console.log(route);
            this.app.use(route, router);
        })
      } catch (err) {
        console.error('Error occured while reading directory!', err);
      }
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.static("src/public"));
    this.app.use(express.json())
    
  }
  sockets(){
    
  }
}

module.exports = ServerPrincipal;
