/* const express = require("express")
const Router = express.Router()
const indexControllers = require("../controllers/index.controllers")


Router.get("/", indexControllers.index)






module.exports = Router */

const express = require("express")
//const {request, response} = require("express")

class IndexRoutes {
    constructor(){
        this.router = express.Router();
        //this.routes()
        this.router.__route = "/"
    }
    routes(){
        this.router.get("/n", this.get);
        this.router.get("/m", this.get2 );
        return this.router;
    }

    get(req /* = request */ , res /* = response */){
        res.send("Hola mundo desde la clase rutas")
    }
    get2(req /* = request */ , res /* = response */){
        res.send("Hola chanchito feliz, bueno ya no tan chanchito")
    }
}

//indexRoutes = new IndexRoutes()
module.exports = new IndexRoutes().routes()

