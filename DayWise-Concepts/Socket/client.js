const io = require("socket.io-client")

const socketClient = io("http://localhost:6000/")


socketClient.on("connect", () => {
    console.log("socket client is connected")
})
socketClient.on("message", (data)=>{
console.log("Receved a message from the server",data)
})
