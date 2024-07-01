const express = require('express')
const app = express();


let port =3;

app.listen(port,()=>{
    console.log(`this is first web server ${port}`);
})

// app.use((req,res)=>{
//     console.log("request received");
//     res.send("Lakshay is a pagal man");
// })  
// app.get("/akshat",(req,res)=>{
//     console.log("Akshat Page");
//     res.send("<h1>Akshat Is a very good Developer and also coderr</h1>");
//     res.send("hghsdgfh");
// })
// app.get("/lakshya",(req,res)=>{
//     console.log("Lakshya Page");
//     res.send("<h1>Lakshya Is a very good Cricketer</h1>");
// })
app.get("/",(req,res)=>{
    res.send("All Page Paths");
})
// app.get("*",(req,res)=>{
//     res.send("All Page Paths");
// })
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(username+" "+id+" "+" Hello,I am akshat");
    console.log();
})
app.get("/search",(req,res)=>{
    let {q}= req.query;
    res.send(q);
})
console.log("for git commit");
console.log("for git commit");
console.log("for git commit");