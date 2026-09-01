const fs = require('fs')
const readStream = fs.createReadStream('story.txt', {highWaterMark: 32});
let totalChunks = 0
let totalCharacter = 0
let totalWord = 0

readStream.on('data',(chunk)=>{
    totalChunks++
    totalCharacter +=chunk.toString().length
    totalWord +=chunk.toString().trim().split(/\s+/).length
})
readStream.on('end',()=>{
    console.log(
        `Total Chunks: ${totalChunks} | Total Characters: ${totalCharacter} | Total Words: ${totalWord}.`
    )
})