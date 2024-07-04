const express = require("express");
const app = express();
let port = 2222;

app.listen(port,(req,res)=>{
    console.log("Akshat");
})
app.get("/registered",(req,res)=>{
    let {Name,Password} = req.query;
    console.log(Name + Password);
    res.send(`Response get ${Name}, ${Password}`);
})
app.post("/registered",(req,res)=>{
    res.send("Response Post");
})