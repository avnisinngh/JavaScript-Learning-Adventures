// singleton
// Object.create

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Avni",
    "full name": "Avni Singh",
    age: 20,
    [mySym] : "My key1",  
    location: "Delhi",
    email: "a@gmail.com",
    isLoggedIn: false,
    LastLoggedIn: ["Monday", "Saturday"]
}

console.log(JsUser.email)   // not prefered method
console.log(JsUser["email"]);
//console.log(JsUser."full name")
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

JsUser.email = "a@gpt.com"
//Object.freeze(JsUser)
JsUser.email = "a@CHATgpt.com"
console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello js user")
}
JsUser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())