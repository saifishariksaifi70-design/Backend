const fs = require('fs')
const path = require('path')

const targetFile = path.join(__dirname, 'files')
const newName = 'Sharik_';

fs.readdir(targetFile, (err, file)=>{
    if(err) console.error(err)
    console.log(file.length);


    file.forEach((f)=>{
    const oldPath = path.join(targetFile, f)
    console.log(oldPath)
    const newpath = path.join(targetFile, `${newName}${f}`)
    console.log(newpath)

    fs.rename(oldPath, newpath, (err)=>{
        if(err){
            console.error(err)
        }else{
            console.log('Rename successfully')
        }

    })

})
})

