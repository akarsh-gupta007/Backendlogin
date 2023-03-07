const ex = require("express")
const jwt = require("jsonwebtoken")
const app = ex()
const secretkey = "akaka"

app.post("/logins", (req, res) => {
    const user = {
        id: 1,
        username: "akarsh",
        email: "ak@gmail.com"
    }
    jwt.sign({ user }, secretkey, { expiresIn: "300s" }, (err, token) => {
        res.json({
            token
        })
    })
})
app.post("/profile", verifytoken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, authdata) => {
        if (err) {
            res.send({
                result: "token invalid"
            })
        }
        else {
            res.json({
                authdata
            })
        }
    })
    console.log("profile")
})

function verifytoken(req, res, next) {
    const berare = req.headers["authorization"];
    if (typeof berare !== undefined) {
        const token = berare.split(" ")[1]
        req.token = token;
        next();
    } else {
        res.send({
            result: "token is not valid"
        })
    }
}
app.listen(8800, () => {
    console.log(" server is running")
})