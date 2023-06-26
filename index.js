const express=require("express")
const app=express()
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("<center><h1>appGenuis work</h1></center>")
})
app.listen(port,()=>{console.log("server start")})
