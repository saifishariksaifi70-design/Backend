const http = require("http");
const server = http.createServer();
const PORT = 4000

server.on("request", (req,res)=>{
    if(req.url === "/about"){
        res.writeHeader(200, {"content-Type" : "text/html"})
        res.end("<h1 style='color:blue'>About Page</h1>")

    }else if(req.url === "/contact"){
        res.writeHeader(200, {"content-Type" : "text/html"})
        res.end("<h1 style='color : blue'>Welcome to Contact page</h1>")
    }else if(req.url === "/project"){
        res.writeHeader(200, {"content-Type" : "text/html"})
        res.end("<h1 style='color : blue'>Welcome to Project Page</h1>")

    }
    else if(req.url === "/api/student"){
        res.writeHeader(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({"name" : "rahul" , "course" : "full stack", "status" : "Enroll"}))

    }
    else if(req.url === "/Home"){
        res.writeHeader(200, {"content-type" : "text/html"})
        res.end("Home page")
    }else{
        res.writeHeader(404, {"content-type" : "text/html"})
        res.end("not found")
    }

})
  server.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
