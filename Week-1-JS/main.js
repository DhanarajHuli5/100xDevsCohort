//Call back

function sum(num1,num2,funToCall){
    let result = num1 + num2;
    funToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+data);
}

// can call only one function and displayReslt()
sum(10,20,displayResult);

