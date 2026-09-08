const express=require('express');

const app= express();

app.use("/hello",(req,res)=>{
    res.send("Hello hello!");
});
app.use("/test",(req,res)=>{
    res.send("Hello from server!");
});
app.listen(3000,()=>{
    console.log("server is successfully listen port 3000");
});