// Object Methods
function objectMethods(obj){
    console.log("original obj ->",obj);

    let keys = Object.keys(obj);
    console.log("keys ->",keys);

    let values = Object.values(obj);
    console.log("values ->",values);
    
    let entries = Object.entries(obj);
    console.log("entries ->",entries);

    let newObj = Object.assign({},obj,{key4:'value4'})    
    console.log("newObj ->",newObj);

    Object.assign(obj,{random:'rvaue'})
    console.log(obj);
}

const myObj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
}
objectMethods(myObj);
console.log("orgn obj in GLOBAL",myObj);