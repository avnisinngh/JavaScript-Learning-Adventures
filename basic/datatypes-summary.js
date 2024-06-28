// PRIMITIVE - call by values
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)

//REFRENCE TYPE(NON PRIMITIVE)
// Array, objects, Functions

const heros  = ['Shaktiman', "Najraj"];
let myobj = {
    name : "avni",
    age : "20"
}

const myfunction  = function() {
    console.log("Hello ");
}

