
function sayMyNmae() {
    console.log("A");
    console.log("v");
    console.log("n");
    console.log("I");
}

//sayMyNmae();
/*
function addTwoNumber(num1, num2) { //parameters
    console.log(num1 + num2);
}
const result = addTwoNumber(1, 2)  //arguments

console.log(result);    //undefined
*/

function loginUserMessage(username) {
    return `${username} just logged in`
}
//console.log(loginUserMessage("Avni"));
//console.log(loginUserMessage());    //undefined


function calculateCartPrice(val1, val2, ...num1) {  //rest operator
    return num1
}
console.log(calculateCartPrice(200,500,700));


//object
const user = {
    username: "Avni",
    price: 200
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price: 199
})

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
