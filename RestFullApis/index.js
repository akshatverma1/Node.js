const express = require("express");
const app = express();

const port = 8080;
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"Public")));

let post =[
    {
        username : "activa",
        age : "it's is a very relax two wheelers"
    },
    {
        username : "bike",
        age : "it's is a two wheelers"
    },
    {
        username : "cars",
        age :"this is very good car in the market"
    },
];
app.listen(port, () => {
    console.log("Listen Command");
})
app.get("/post",(req,res)=>{
    res.render("index.ejs",{post});
})
app.get("/post/new",(req,res)=>{
    res.render("form.ejs");
})
app.post("/post",(req,res)=>{
    console.log(req.body);
    let {username,age} = req.body;
    post.push({username,age});
    // res.send("accepted");
    res.redirect("http://localhost:8080/post")
})