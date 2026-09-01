const fs = require('fs')
const readStream = fs.createReadStream("source.txt", {highWaterMark : 64})
const writeStream = fs.createWriteStream("file2.txt")
let count = 0;
readStream.on("data", (chunk)=>{
    count++
    console.log(`Reacieve Chunk ${count} : ${chunk.length} bytes`)


readStream.pipe(writeStream)

writeStream.on('finish',()=>{
    console.log('finshed')
})

readStream.on('error',(err)=>{
    console.error(err)

})
writeStream.on('error',(err)=>{
    console.error(err)

})
})


