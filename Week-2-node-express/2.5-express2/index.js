const express = require('express')
const app = express()


function sum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

// input from query
app.get("/",function(req,res){
    const n = req.query.a;
    res.send("Your answer is "+sum(n));
})
app.listen(3000) 