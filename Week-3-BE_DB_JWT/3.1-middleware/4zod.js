// zod is a TypeScript-first schema declaration and validation library. It is designed to be easy to use with TypeScript, but still allow for easy integration with plain JavaScript.


const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.unknown());
// zod.array difens input should be array & zod.array(zod.number()) -> array of numbers or stirng or any (zod.unknown())

app.use(express.json());

app.post("/health-checkup", (req, res)=> {
    //kidneys = [1, 2] 
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys); // returns object -> {"response":{"success":true,"data":[]}}
    
    res.send({
        response
    })
    // if(!response.success){
    //     res.status(411).json({msg:"input is invalid"})
    // } else{
    //     res.send({response})
    // }
})
app.listen(3000);

// example zod schema for login
// {
//     email: string => email
//     password : atlest 8 letters
//     country: "IN" or "US"
// }
const zod = require("zod");
const schema2 = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(z.literal("US")),
    kidneys : zod.array(z.number())
})