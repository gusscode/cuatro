const mongoose = require('mongoose')
const {Schema} = mongoose
const ObjectId = Schema.Types.ObjectId
const moment = require('moment')
moment.locale('es')


const schema = new Schema({ 
    imagen: String,
    tipo: String,
    precio: Number,
    pagado: Boolean,
    id_lavador: ObjectId,
    id_cliente: ObjectId,
    

}, {
    timestamps: true
})


module.exports = mongoose.model('Item', schema)

