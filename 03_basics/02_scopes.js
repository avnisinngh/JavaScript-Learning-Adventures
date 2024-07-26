

{}  //scope ->curly braces , scope of that prog , ex - scope of if -else

//var c = 300    //global scope
let a = 300
if(true) {
    let a = 10              //block scope
    const b = 20
    //c = 30
    console.log("inner:", a);
}

for(let i = 0; i< Array.length;i++) {
    const elemnt = array[i];
}


console.log(a);
//console.log(b);
//console.log(c);     //it will be printed

