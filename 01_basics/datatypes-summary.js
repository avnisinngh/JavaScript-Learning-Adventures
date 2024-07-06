// PRIMITIVE - call by values
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id === anotherid)

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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// Stack(primitve),                 Heap(non primitive)

// copy is created,                 changes are made in original, take refrence

let myytname = "Avni"
let anothername = myytname
anothername = "AvniSingh"
console.log(myytname)       //different vallue
console.log(anothername)

let user1 = {
    email:"avni@gmail.com",
    upi:"as@ybl"
}

let user2 = user1
user2.email = "a@google.com"
console.log(user1.email)        //same value
console.log(user2.email)