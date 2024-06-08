const zod = require("zod")
// if this is an array of numbers , return true, else return false
function validateInput(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
}
// validateInput([1,2,3,"4"])

// Example schema => email    : it should be in email format (aba@gmail.com) 
//                   password : string , atleast 8 letters

function validateLogin(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    });

    const response = schema.safeParse(obj);  // Checking is done here
    console.log(response);
}
validateLogin({
    email : "agm@ail.com",
    password : "1234567dd"
})