const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const connection=mongoose.connect("mongodb+srv://akarshgupta007:Ak161998@cluster0.aewqbvm.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("db id connected")
})

module.exports=connection;
