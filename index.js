const express = require("express")
const connection = require("./config/config.js")
const cors = require("cors")
const bcrypt = require("bcrypt")
const signupModel = require("./model/signupmodel")
// const bcrypt = require("bcrypt")
const app = express()
const saltrounds = 10;
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.post("/login", (req, res) => {
    const { email, password } = req.body
    signupModel.findOne({ email: email }, (err, user) => {


        if (user) {
            
                bcrypt.compare(password, user.password, (err, password) => {
                    if (err) {
                        res.send({ msg: "invalid data" })
                    } else {
                        res.send({ msg: "login success", user: user })
                    }
                })
               
        
            }
        else {
            res.send({ msg: "user not exits" })
        }

    })
})
app.post("/signup", async (req, res) => {
    console.log("hi")
    const { firstName, lastName, email, password } = req.body
    bcrypt.genSalt(saltrounds, (err, salt) => {
        if (err) {
            console.log(err)
        }
        console.log(salt)
        bcrypt.hash(password, salt, async (err, password) => {
            if (err) {
                console.log(err)
            }
            else {
                var user = new signupModel({
                    firstName,
                    lastName,
                    email,
                    password
                })
                console.log(user)
                await user.save()
                res.send({ msg: "user is succeesfully registered" })
            }
        })

    })
    const exitsuser = await signupModel.findOne({ email: email }).exec()

    if (exitsuser) {
        res.send({ msg: "user already registered" })
        return
    }
}
)


app.listen(7010, async () => {
    try {
        await connection;
    }
    catch (err) {
        console.log(err)
    }
})