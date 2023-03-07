        const fs = require("fs")

        fs.writeFile("read.txt", " this is the another msg by using asyncmethod",
            (err) => {
                console.log("file is created")
            }
        )