const http = require("http");
const server = http.createServer();
const PORT = 4000

server.on("request", (req,res)=>{
    if(req.url === "/about"){
        res.writeHeader(200, {"content-Type" : "text/html"})
        res.end("About page")

    }else if(req.url === "/contact"){
        res.wruteHeader(200, {"content-Type" : "text/html"})
        res.end("Contact page")
    }else if(req.url === "/project"){
        res.writeHeader(200, {"content-Type" : "text/html"})
        res.end("Project Page")

    }
    else{
        res.end("Home Page")
    }

})
  server.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
