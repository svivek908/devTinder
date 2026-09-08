const express=require('express');

const app= express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Vivke",latName:"sharma"});
});
app.post("/user",(req,res)=>{

    res.send("Data save in db successfully!");
});

app.delete("/user",(req,res)=>{

    res.send("Data delete from db successfully!");
});
app.use("/hello",(req,res)=>{
    res.send("Hello hello!");
});
app.use("/test",(req,res)=>{
    res.send("Hello from server!");
});

app.listen(3000,()=>{
    console.log("server is successfully listen port 3000");
});