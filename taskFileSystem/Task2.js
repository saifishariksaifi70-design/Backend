const fs = require('fs')
const readStream = fs.createReadStream('lowerCase.txt', {highWaterMark : 50})
const writeStream = fs.createWriteStream('upperCase.txt')

let chunks = 0
readStream.on('data', (chunk)=>{
    chunks++
    const upperCaseChunk = chunk.toString().toUpperCase()
    writeStream.write(upperCaseChunk)

})
readStream.on('end',()=>{
    writeStream.end(
        console.log('Text converted to uppercase successfully!.')
    )
})
readStream.on('error',(err)=>{
    console.log(err)

})
writeStream.on('error',(err)=>{
    console.log(err)

})