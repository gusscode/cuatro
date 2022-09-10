const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lavado'
const connectDB =()=>{
    mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Conectado a MongoDB')
    })
    .catch(err => {
        console.log(err)
    })

} 


module.exports = connectDB