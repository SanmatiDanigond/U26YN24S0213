const http=require("http")
const fs=require("fs")
const { error } = require("console")
const server=http.createServer((req,resp)=>{
    if(req.url=="/"){
        fs.readFile("info.html",(error,data)=>{
            resp.writeHead(200,{"content-type":"text/html"})
            resp.end(data)
        })
    }
         else if(req.method=="GET" && req.url=="/index"){
        fs.readFile("index.html",(error,data)=>{
            resp.writeHead(200,{"content-type":"text/html"})
            resp.end(data)
        })
    }
           else if(req.method=="GET" && req.url=="/about"){
            fs.readFile("about.html",(error,data)=>{
                resp.writeHead(200,{"content-type":"text/html"})
                resp.end(data)
            })
        }    
     else if(req.method=="GET" && req.url=="/course"){
        fs.readFile("course.html",(error,data)=>{
            resp.writeHead(200,{"content-type":"text/html"})
            resp.end(data)
        })
    }
   else if(req.method=="GET" && req.url=="/contactus"){
        fs.readFile("contactus.html",(error,data)=>{
        resp.writeHead(200,{"content-type":"text/html"})
        resp.end(data)
})
   }

      else if(req.method=="POST" && req.url=="/contactus"){
                let body=``;
                req.on("data",(chunk)=>{
                 body=body+chunk
 })   
     req.on("end",()=>{
    let data=new URLSearchParams(body)
    console.log(`rollno=${data.get("rno")}`)
    console.log(`name=${data.get("name")}`)
   resp.writeHead(200,{"content-type":"text/html"})
   resp.write(`<h1>your information received</h1>`) 
   resp.end()
 })
 }
     else{
        resp.writeHead(404,{"content-type":"text/html"})
        resp.end(`<h1>404-Page not Found</h1>`)
    }
   })
server.listen(3000,()=>{console.log("Server started")})