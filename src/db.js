const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/lavado'
const connectDB =async ()=>{
    try {
        const db = await mongoose.connect(MONGO_URI);
        console.log("Connected to ", db.connection.name);
      } catch (error) {
        console.error(error);
      }
      
      mongoose.connection.on("connected", () => {
        console.log("Mongoose is connected");
      });
      
      mongoose.connection.on("disconnected", () => {
        console.log("Mongoose is disconnected");
      });

} 


module.exports = connectDB