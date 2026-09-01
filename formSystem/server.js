const http = require('http')
const fs = require('fs')
const path = require('path');
const PORT = 4000;
const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === 'GET'){
        const filePath = path.join(__dirname, 'index.html')
        fs.readFile(filePath, (err, data)=>{
            if(err){
                console.error(err)
                return
            }
            res.setHeader("content-type", "text/html")
            res.end(data)
        })
        
        
    }else if(req.url === "/message" && req.method === "POST"){
        const body = []
        req.on('data',(chunk)=>{
            body.push(chunk)
            
        });
        req.on('end' , ()=>{
            const newText = Buffer.concat(body).toString()

            const parseData = new URLSearchParams(newText)
            
            const userName = parseData.get('username')
            const courseName = parseData.get('course')

            const cleanData = `username : ${userName} and course : ${courseName}\n`

            const newPath = path.join(__dirname, "data")
            const targetFile = path.join(newPath, 'newData.txt')

            fs.appendFile(targetFile, cleanData, (err)=>{
                if(err) return console.log(err)
                    res.end('Congratulation')

            })
        })

    }
});
server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})
