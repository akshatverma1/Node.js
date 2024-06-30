const express = require('express')
const app = express();


let port =3;

app.listen(port,()=>{
    console.log(`this is first web server ${port}`);
})