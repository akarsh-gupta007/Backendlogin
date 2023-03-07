// const Server = require("./Httpserver")

const express = require("express");

const app = express();

app.get("/",(req, res) => {
    
    res.send("hi it is runnung using express server")
})


app.post("/host/:id",(req, res) => {
   if(req.id===5){
    req.on("data",(decode)=>{
        res.send(decode.toString())
        console.log(decode)
    })
   }
   else{
    res.send("error")
   }
})
app.listen(4010, () => {
    console.log("port is running")
})