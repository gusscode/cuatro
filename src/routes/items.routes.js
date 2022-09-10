const express = require("express")
const {request, response} = require("express")
const itemModel = require("../models/Item")
const moment = require("moment")


class IndexRoutes {
    constructor(){
        this.router = express.Router();
        this.router.__route = "/items"
    }
    routes(){
        //this.router.get     ("/", /* middleware, */     this.get);
        //this.router.get     ("/:id", /* middleware, */  this.getId);
        
        // CRUD
        this.router.get     ("/alltoday",            this.readAllbyDate );
        this.router.post    ("/",                       this.create);         
        
        this.router.get     ("/:id",                    this.readOne);
        this.router.get     ("/",                    this.readAll); 
        
        this.router.put     (/* "/:id" */ "/",                    this.update);           
        this.router.delete  ("/:id",                    this.delete);          

        return this.router;
    }

    async create(req = request , res = response){
        const {imagen, tipo, precio, autos, pagado, id_lavador, id_cliente} = req.body
        const itemPrev = {
        imagen, tipo, precio, autos, pagado, id_lavador, id_cliente
        }
    
        const item = new itemModel(itemPrev)
        const result = await item.save()
        console.log(result)
        res.json(result)
    }
    async readAll(req = request , res = response){
        const items = await itemModel.find({})
        res.json(items)
    }

    async readOne(req = request , res = response){
        
    }

    async update(req = request , res = response){
        const {imagen, tipo, precio, autos, pagado, id_lavador, id_cliente, _id} = req.body
        const updatedAt = moment().format()
        const itemPrev = {
            imagen, tipo, precio, autos, pagado, id_lavador, id_cliente, updatedAt
        }
        const item = await itemModel.findByIdAndUpdate(_id, itemPrev, {new: true})
        res.json(item)
    }

    async delete(req = request , res = response){
        const item = await itemModel.findByIdAndDelete(req.params.id)
        console.log(item);
        res.json(item)
    }

    async readAllbyDate  (req = request , res = response) {
        const {date} = req.body
        console.log(date);
        const fecha = new Date(date)
    
        const items = await itemModel.find({createdAt: {$gte: new Date().setHours(0,0,0)}})
        console.log(items)
        const fechhhh = new Date()
        console.log(fechhhh.setHours(0,0,0));
        console.log(new Date(fechhhh));
        res.json(items)
    }

    async get(req = request , res = response){
        res.send("Hola mundo desde la clase quizes")
    }
    async getId(req = request , res = response){
        res.send("Hola mundo desde la clase quizes: " + req.params.id)
    }
    
}


module.exports = new IndexRoutes().routes()