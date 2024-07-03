const express = require("express");
const app = express();
let port = 88;
const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log(`Port = ${port}`);
})

app.get("/home",(req,res)=>{
    res.render("home.ejs");
})