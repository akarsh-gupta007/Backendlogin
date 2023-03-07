const express = require("express")
const app = express();

const middleware1 = (req, res, next) => {
    console.log("middleware one is running")
    next();
}
const middleware2 = (req, res, next) => {
    console.log("middleware two is running")
    next();
}
app.use(middleware1)

app.use(middleware2)

app.get("/", (req, res) => {
    // res.sendStatus(200)
    res.send("Home page")
})
app.get("/blogdata", (req, res) => {
    // res.sendStatus(200)
    res.send("blogdata page")
})



app.listen(5001, () => {
    console.log("server is running on the port 5001")
})