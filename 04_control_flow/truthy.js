const userEmail = []
if(userEmail) {
    console.log("got user email");
    
} else {
    console.log("Dont have user email");
    
}

//falsy values
// false, 0, -0, bigInt, 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}
/*
if(userEmail.length === 0) {
    console.log("Array is empty");
    
} */
const emptyobj = {}
if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 =  null ?? 10

//agr value null or undefined hai then other value daldo

// val1 = undefined ?? 15 

val1 = null ?? 10 ?? 20

console.log(val1);

//ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

