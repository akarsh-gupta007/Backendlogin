const express = require("express")
const app = express();
const bcrypt = require("bcrypt")
const plainPassword = "akarsh@123";
const saltrounds = 10;
app.get("/", (req, res) => {
    res.sendStatus(200)
    res.send("Home page")
})

// //  ----- 1st method to secure the password ----------------
// //1: firsly generating the salt
// //  2: secondly  generating hash password

// app.get("/Login",(req,res)=>{
//     bcrypt.genSalt(saltrounds,(err,salt)=>{
//         if(err){
//             res.sendStatus(401);

//         }
//         else{
//             bcrypt.hash(plainPassword,salt,(err,encrypt)=>{
//                 if(err){
//                     res.sendStatus(401);

//                 }
//                 else{
//                     res.send(encrypt)
//                 }
//             })
//         }
//     })
// })
// // ---------------------------------

// // ---------------- second method----------------------

// // generate salt and  hash password together


app.get("/register", (req, res) => {
    bcrypt.hash(plainPassword, saltrounds, (err, encrypt) => {
        if (err) {
            res.sendStatus(401);
        }
        else {
            res.send(encrypt)
        }
    })
})


app.listen(5000, () => {
    console.log("server is running on the port 5000")
})