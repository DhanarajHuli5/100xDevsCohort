// const currDate = new Date();
// console.log(currDate.getDate());
// console.log(currDate.getMonth()+1);
// console.log(currDate.getYear());
// console.log(currDate.getFullYear());
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getTime());

// write prgm to calculte time take by a function
function calcSum(n){
    let sum =0;
    for(let i=0; i<n; i++){
        sum = sum + i;
    }
    return sum;
}

const beforeTime = new Date();
const bt = beforeTime.getTime();
calcSum(1000000);
const afterTime = new Date();
const at = afterTime.getTime();

const timeTaken = at - bt;
console.log("time taken by function is ->" + timeTaken);