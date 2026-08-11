/*1.Write a Node js program to create basic http server about college*/
//Step1:import http module
const http=require("http")
//Step2:Create server using createServer() function of http module
const server=http.createServer((req,resp)=>{
/*Step4:write the response header using writeHead() function with
status code 200 and content-type as text/html as object literal*/
resp.writeHead(200,{"content-type":"text/html"})
//Step5:display college information using html and write() function
resp.write(`<h1>BLDEA's commerce BHS Arts and TGP science college,jamkhandi</h1>`)
resp.write(`<h2>Started in the year 1963<h2>`)
resp.write(`<h3>Located in jamkhandi<h3>`)
//step:6 end the response
resp.end()    
})
//Step3:Listen the server request port number 3000
server.listen(3000,()=>{console.log("Server has been started")})