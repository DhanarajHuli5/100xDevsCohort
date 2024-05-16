const express = require("express");
const app = express()



const users = [{
    name:"John",
    kidneys:[
        {
            healthy: false
        }
    ]
}] 

app.get("/",(req,res)=>{
    
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// Data is sent through body in post req
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})


// PUT
app.put("/",(res,req)=>{
    for(let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/",function(req,res){
    // only if atleast one unhealthy kidney is there do this, else return 411
    const newKidneys = [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done"})
})

app.listen (3000);