const express = require("express")
const body_parser = require("body-parser")

const app = express();

app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json)
app.get("/",(req,res)=>{
    res.send("<form method='post' action='/serevr'> <input type='text' name='name' placeholder='please enter your name' /> <input type='text' name='email' placeholder='please enter your email' /></form>")
})
app.post("/login", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(name, email)
    res.send("login succesfully")

})

app.listen(4018, () => {
    console.log("serevr is running")
})