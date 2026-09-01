// ========= Task 1 ============

// const fs = require('fs')
// const readStream = fs.createReadStream('story.txt', {highWaterMark: 32});
// let totalChunks = 0
// let totalCharacter = 0
// let totalWord = 0

// readStream.on('data',(chunk)=>{
//     totalChunks++
//     totalCharacter +=chunk.toString().length
//     totalWord +=chunk.toString().trim().split(/\s+/).length
// })
// readStream.on('end',()=>{
//     console.log(
//         `Total Chunks: ${totalChunks} | Total Characters: ${totalCharacter} | Total Words: ${totalWord}.`
//     )
// })

// ============= Task 2 ================

// const fs = require('fs')
// const readStream = fs.createReadStream('lowerCase.txt', {highWaterMark : 50})
// const writeStream = fs.createWriteStream('upperCase.txt')

// let chunks = 0
// readStream.on('data', (chunk)=>{
//     chunks++
//     const upperCaseChunk = chunk.toString().toUpperCase()
//     writeStream.write(upperCaseChunk)

// })
// readStream.on('end',()=>{
//     writeStream.end(
//         console.log('Text converted to uppercase successfully!.')
//     )
// })
// readStream.on('error',(err)=>{
//     console.log(err)

// })
// writeStream.on('error',(err)=>{
//     console.log(err)

// })

// ========= Task 3 ==============
// const fs = require('fs')
// const totalSize = fs.statSync('data_input.txt').size
// console.log(`The file size ${totalSize}`)
// const readStream = fs.createReadStream('data_input.txt', {highWaterMark: 1024})
// const writeStream = fs.createWriteStream('data_output.txt')
//  let readBytes = 0
//  readStream.on('data', (chunk)=>{
//     readBytes += chunk.length
//     const percentage = (readBytes/totalSize) * 100
//     console.log(`progress ${percentage.toFixed(2)}% complete`)
//  })
//  readStream.pipe(writeStream)
//  writeStream.on('finish',()=>{
//     console.log('Transfer Complete !')
//  })



