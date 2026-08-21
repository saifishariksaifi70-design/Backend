const fs = require("fs")

// fs.readFile("example.txt" , "utf-8" , (err,data)=>{
//     if(err){
//         console.error(err)
//         return

//     }
//     console.log("data : ", data)
// })
// fs.writeFile("example.txt", "Node.js" , (err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("File system successfully")

// })

// try{
// const data = fs.readFileSync("example.txt", "utf-8")
// console.log("data : ", data)
// }catch(err){
//         console.error("Error")
// }

// try{
// fs.writeFileSync("file1.txt", "Hello file")
// console.log("craete file successfully")
// }catch(err){
//         console.error("Error")
// }
fs.appendFile("file1.txt","- Node", (err)=>{
    if(err){
        console.error("Error")
        return

    }
    console.log("create successfully")
})
fs.rename("file1.txt","file.txt", (err)=>{
    if(err){
        console.error("Error")
        return

    }
    console.log("successfully")
})
fs.unlink("file2.txt", (err)=>{
    if(err){
        console.error("Error")
        return

    }
    console.log("delete successfully")
})