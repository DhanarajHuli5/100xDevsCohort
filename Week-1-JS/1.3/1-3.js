// // String handbook

// // String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// // split(), trim(), toUpperCase(), toLowerCase(), etc.

// // Run each function to see the output, play and learn by doing.

// // Length
// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
//   }
//   getLength("Hello World");
  
//   // indexOf
//   function findIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.indexOf(target));
//   }
//   findIndexOf("Hello World", "World");
  
//   // lastIndexOf
//   function findLastIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
//   }
//   findLastIndexOf("Hello World World", "World");
  
  
//   // substring
//   function getSubstring(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After substring:", str.substring(start, end));
//   }
//   getSubstring("Hello World", 0, 5);
  
//   // replace
//   function replaceString(str, target, replacement) {
//     console.log("Original String:", str);
//     console.log("After replace:", str.replace(target, replacement));
//   }
//   replaceString("Hello World", "World", "JavaScript");
  
//   // split
//   function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hello World", " ");
  
//   // trim
//   function trimString(str) {
//     console.log("Original String:", str);
//     console.log("After trim:", str.trim());
//   }
//   trimString(" Hello World ");
  
//   // toUpperCase
//   function toUpper(str) {
//     console.log("Original String:", str);
//     console.log("After toUpperCase:", str.toUpperCase());
//   }
//   toUpper("Hello World");
  
//   // toLowerCase
//   function toLower(str) {
//     console.log("Original String:", str);
//     console.log("After toLowerCase:", str.toLowerCase());
//   }
//   toLower("Hello World");
  
//  -   -   NUMBERS -   -   //
console.log(parseInt("42"));
console.log(parseInt("3.14"));
console.log(parseFloat("4"));


//  -   -   ARRAYS  -   -   //
const arr = [1,2,3]
arr.shift(0);
console.log(arr);

// concat 
const a1 = [1,2,3]
const a2 = [4,5,6]
console.log(a1.concat(a2)); 