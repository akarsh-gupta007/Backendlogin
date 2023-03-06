const router = require("express").Router();
const bcrypt = require("bcrypt")
const signupModel = require("../model/signupmodel.js")
router.post("/login", async (req, res) => {

  try {
    const user = await signupModel.findOne({ email: req.body.email });
    // !user && res.status(404).send({ msg: "invalid data" })
    // const validpassword = await bcrypt.compare(req.body.password, user.password)
    // !validpassword && res.status(400).send({ msg: "invalid data" })
    // // res.status(200)
    // res.send({ msg: "login success", user: user })
    if(!user){
      res.send({ msg: "invalid data" })
      console.log("invalid")
    }
    else{
      const validpassword = await bcrypt.compare(req.body.password, user.password)
      if(!validpassword){
        res.send({ msg: "invalid data" })
      }
      else{
        res.send({ msg: "login success", user: user })
        console.log(user)
      }
    }

  }
  catch (err) {
    console.log(err)
  }




  // const { email, password } = req.body
  // signupModel.findOne({ email: email }, (err, user) => {


  //     if (user) {

  //             bcrypt.compare(password, user.password, (err, password) => {
  //                 if (err) {
  //                     res.send({ msg: "invalid data" })
  //                 } else {
  //                     res.send({ msg: "login success", user: user })
  //                 }
  //             })


  //         }
  //     else {
  //         res.send({ msg: "user not exits" })
  //     }

  // })
})
router.post("/signup", async (req, res) => {

  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new signupModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.send(user);
    console.log(user)
  } catch (err) {
    // res.status(500)
    console.log(err)
  }







  // console.log("hi")
  // const { firstName, lastName, email, password } = req.body
  // bcrypt.genSalt(saltrounds, (err, salt) => {
  //     if (err) {
  //         console.log(err)
  //     }
  //     console.log(salt)
  //     bcrypt.hash(password, salt, async (err, password) => {
  //         if (err) {
  //             console.log(err)
  //         }
  //         else {
  //             var user = new signupModel({
  //                 firstName,
  //                 lastName,
  //                 email,
  //                 password
  //             })
  //             console.log(user)
  //             await user.save()
  //             res.send({ msg: "user is succeesfully registered" })
  //         }
  //     })

  // })
  // const exitsuser = await signupModel.findOne({ email: email }).exec()

  // if (exitsuser) {
  //     res.send({ msg: "user already registered" })
  //     return
  // }
})

module.exports = router