const router = require("express").Router();
const bcrypt = require("bcrypt")
const signupModel = require("../model/signupmodel.js")
router.post("/login", async (req, res) => {

    try {
        const user = await signupModel.findOne({ email: req.body.email });
       
        if (!user) {
            res.send({ msg: "invalid data" })
        }
        else {
            const validpassword = await bcrypt.compare(req.body.password, user.password)
            if (!validpassword) {
                res.send({ msg: "invalid data" })
            }
            else {
                res.send({ msg: "login success", user: user })
            }
        }

    }
    catch (err) {
        console.log(err)
    }


})
router.post("/signup", async (req, res) => {


    const { firstName, lastName, email, password } = req.body

    const exitsuser = await signupModel.findOne({ email: email }).exec()

    if (exitsuser) {
        res.send({ msg: "user already registered" })
        return
    }

    console.log("hi")
 
    bcrypt.genSalt(10, (err, salt) => {
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
      
})

module.exports = router