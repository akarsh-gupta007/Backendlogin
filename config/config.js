const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const connection=mongoose.connect("mongodb://localhost:27017/login",()=>{
    console.log("db id connected")
})

module.exports=connection;