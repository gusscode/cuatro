const express = require("express");



class Server {
    constructor(){
        this.app = express()

    }

    listen(){
        return this.app.listen(3000, function (){
          console.log("Listen on port 30000");
        })
    }

}