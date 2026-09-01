const fs = require('fs')
const totalSize = fs.statSync('data_input.txt').size
console.log(`The file size ${totalSize}`)
const readStream = fs.createReadStream('data_input.txt', {highWaterMark: 1024})
const writeStream = fs.createWriteStream('data_output.txt')
 let readBytes = 0
 readStream.on('data', (chunk)=>{
    readBytes += chunk.length
    const percentage = (readBytes/totalSize) * 100
    console.log(`progress ${percentage.toFixed(2)}% complete`)
 })
 readStream.pipe(writeStream)
 writeStream.on('finish',()=>{
    console.log('Transfer Complete !')
 })