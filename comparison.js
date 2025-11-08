/*
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 2);
console.log(2 <= 2);
console.log(2 == 2);
console.log(2 != 1);


//when ever you compare two different types javascript converts one type to another type
// when ever you compare two values in js their datatype must be same 

console.log(2 == "2");//true because string converted to number



console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // null coverted to 0
  
*/

// === strict equality operator
console.log(2 === "2")//false
console.log(2 !== "2")//true


const arr = ["ali", "rafey"]

let myobj = {
    name: "rafey",
    age: 21
}

const myfunc = function () {
    console.log("hello world")
}