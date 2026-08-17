const express=require("express")
const app=express()
app.use(express.json())
let employees=[
    {eid:101,ename:"sanmati",esalary:3000},
    {eid:102,ename:"Rahul",esalary:50000}
]
app.get("/employees",(req,resp)=>{
    resp.json(employees)
})
app.get("/employees/:eid",(req,resp)=>{
    let eid=req.params.eid
    const e=employees.find((e)=>{return e.eid==eid})
    if(e){
        resp.json(e)
    }else{
        resp.status(404).json({"message":"Employee details not found"})
    }
})
app.post("/employees",(req,resp)=>{
    let eid=req.body.eid
    let ename=req.body.ename
    let esalary=req.body.esalary
    let e={eid:eid,ename:ename,esalary:esalary}
    employees.push(e)
    resp.status(201).json({"message":"new employees entered","employee":e})
})
app.put("/employees/:eid",(req,resp)=>{
    let eid=req.params.eid
    let index=employees.findIndex((e)=>e.eid==eid)
    if(index!=-1){
        let ename=req.body.ename
        let esalary=req.body.esalary
        let e={eid:eid,ename:ename,esalary:esalary}
        employees[index]=e
        resp.json({"message":"Employees details updated","employee":e})
    }else{
        resp.status(404).json({"message":"employee details not found"})
    }
})
app.delete("/employees/:eid",(req,resp)=>{
    let eid=req.params.eid
    let e=employees.find((e)=>{return e.eid==eid})
    if(e){
        employees=employees.filter((e)=>{return e.eid!=eid})
        resp.status(200).json({"message":"Employee details deleted"})
    }else{
        resp.status(400).json({"message":"Employee details not found"})
    }
})
app.listen(3000,()=>{console.log("Server started")})