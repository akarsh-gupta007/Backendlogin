const express = require("express")
const connection = require("./config/config.js")
const cors = require("cors")


const app = express()
// const saltrounds = 10;
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const userRouter=require("./router/userRouter")
app.use("/",userRouter)


app.listen(7010, async () => {
    try {
        await connection;
        console.log("server started")
    }
    catch (err) {
        console.log(err)
    }
})