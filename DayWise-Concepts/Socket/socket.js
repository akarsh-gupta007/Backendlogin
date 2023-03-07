const express = require("express")
// const cors=require("cors")
const socket = require("socket.io")

const app = express()
const server = app.listen(6000, () => {
    console.log("server is started 6000")
})
const io = socket(server, { cors: { origin: "*" } })

io.on("connection", (socket) => {
    console.log("socket is connected", socket.id);
    socket.emit("message", "Hello from the server");
})
