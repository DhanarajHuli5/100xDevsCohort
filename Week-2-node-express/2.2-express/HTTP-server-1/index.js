const express = require("express");
const port = 3000;
const app = express()

app.get('/profile',(req,res)=>{
    res.json({
        name:"dhanaraj",
        age:19
    })
})

app.listen(port)