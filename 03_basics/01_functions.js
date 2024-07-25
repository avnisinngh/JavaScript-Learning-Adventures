
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
console.log(loginUserMessage("Avni"));
console.log(loginUserMessage());    //undefined
