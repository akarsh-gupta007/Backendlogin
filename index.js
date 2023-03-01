const express = require("express")
const connection = require("./config/config.js")
const cors = require("cors")
const signupModel = require("./model/signupmodel")
// const bcrypt = require("bcrypt")
const app = express()
// const saltrounds = 10;
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const exitsuser = await signupModel.findOne({ email: email, password: password }).exec()
    if (!exitsuser) {
        console.log("credential wrong")
        res.status(400).send({ msg: "credential wrong or doesnot exit" })
        return
    }
    console.log("it is loged in")
    res.send({ msg: "user loged in successfull" })
})
app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const exitsuser = await signupModel.findOne({ email: email }).exec()

    if (exitsuser) {
        res.send({ msg: "user already registered" })
        return
    }
    const user = new signupModel({
        firstName,
        lastName,
        email,
        password
    })
    console.log(user)

    await user.save()
    res.send({ msg: "user is succeesfully registered" })
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