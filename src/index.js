const Server  = require("./server/server");
const server = new Server()
const db = require('./db')




db()

server.listen()
