

{}  //scope ->curly braces , scope of that prog , ex - scope of if -else

//var c = 300    //global scope
let a = 300
if(true) {
    let a = 10              //block scope
    const b = 20
    //c = 30
    //console.log("inner:", a);
}

for(let i = 0; i< Array.length;i++) {
   // const elemnt = array[i];
}


//console.log(a);
//console.log(b);
//console.log(c);     //it will be printed

function one(){
    const username = "Avni"

    function two() {
        const website = "youtuve"
        console.log(username);
    }
    //console.log(website);

    //two()
}
//one()

if(true) {
    const username = "avni"
    if(username === "avni") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//++++++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++

console.log(addone(5));   // no error
function addone(num) {
    return num + 1;
}


addTwo(5)       //error, hoisting
const addTwo = function(num) {  //expression, function
    return num + 2
}
