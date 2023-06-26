const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("<center><h1>appGenuis work</h1></center>")
})
app.listen(80,()=>{console.log("server start")})