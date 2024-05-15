const user = {
    name: "dhanaraj",
    gender: "male"
}

console.log(user["name"])
const finalString = JSON.stringify(user)
console.log(finalString);

// JSON.parse --> convert string to object
const userString = '{"name":"dhanaraj","gender":"male"}'
const userObject = JSON.parse(userString)
console.log(userObject);