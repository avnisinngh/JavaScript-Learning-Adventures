// array

const myArr = [1, 2, 3, 4, 5]
const alphabet = ['A','B']
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// array method 

//myArr.push(6)
//myArr.pop()

//myArr.unshift(9)    //ADD in starting
//myArr.shift() //removes 1st elemnt 

//console.log(myArr.includes(9)); //boolean
//console.log(myArr.indexOf(9));

const newArr = myArr.join()
//console.log(myArr);     //[1, 2, 3]
//console.log(newArr);    // 1,2,3 
//console.log(typeof newArr); //string

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)      //last range is not included
console.log(myn1);
console.log("B", myArr);        //orginal arr not changed

const myn2 = myArr.splice(1, 3)
console.log(myn2);      //last range is included
console.log("C", myArr);        // orginal arr is changed

