const express = require("express")
const connection=require("./config/db.js")
const cors = require("cors")
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
const userRouter=require("./router/userRouter")
app.use("/",userRouter)


app.listen(7020,  async() => {
    try {
        await connection;
        console.log("server started")
    }
    catch (err) {
        console.log(err)
    }
})