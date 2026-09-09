const express=require('express');

const app= express();

const { adminAuth, userAuth}= require("./middlewares/auth");

app.use("/admin",adminAuth);
app.get("/user", userAuth,(req,res,next)=>{
    //route handler
    res.send("Hello hello!");
    
});
app.get("/admin/getAllData",(req,res)=>{
    res.send("All data sent!");
});

app.listen(3000,()=>{
    console.log("server is successfully listen port 3000");
});