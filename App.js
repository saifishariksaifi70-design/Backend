const http = require("http");
const { url } = require("inspector");
const PORT = 3000;
const server =  http.createServer((req,res)=>{
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.end(`
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis rem culpa at quidem nostrum hic, 
        eaque blanditiis alias neque minima assumenda? Harum facilis nulla accusamus assumenda cupiditate sunt ab?</h1>
        
</body>
</html> 
        `)
});

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});