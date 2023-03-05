const http = require("http");

const app = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("hello the server is running")
        res.end();
    }
    else if (req.method==="POST" && req.url==="/signup") {
        req.on("data", (e) => {
            res.write(e)
            res.end()
            console.log(e.toString())
        })
    }
    else if(req.method=="POST" && req.url==="/login"){
        req.on("data",(e)=>{
            res.write(e)
            res.end();
        })
    }

})

module.exports = app;