//dates

let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toLocaleString()) // 7/2/2024 + time
//console.log(myDate.toLocaleDateString()) //date
//console.log(typeof myDate)  //object

//let myCreatedDate = new Date(2024, 0, 23)  //month start with zero in js
//let myCreatedDate = new Date(2024, 0, 23,5,3)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/10000));

let newDate = new Date()
console.log(newDate);

// `${newDate.getDay()}`

newDate.toLocaleString('default', {
    weekday: "long"
})