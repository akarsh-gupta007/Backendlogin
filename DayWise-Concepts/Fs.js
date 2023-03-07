// using syncronus way

const fs=require("fs")

fs.writeFileSync("read.txt","hello this is another file added using FS module")
fs.appendFileSync("read.txt","  hello it is appendend without overwriting the preious data")
const bufferdata=fs.readFileSync("read.txt","utf-8")
fs.renameSync("read.txt","rename.txt")
console.log(bufferdata)
fs.unlinkSync("read.txt") // deleting the file 


//------------------------------------