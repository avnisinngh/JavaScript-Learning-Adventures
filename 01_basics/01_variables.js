const accountId = 12344 //cannot be changed
let accountEmail = "a@gmail.com"
var accountpassword = "12"
accountCity = "Delhi"       //not prefered
let accountstate

//accountId = 12443     //not allowed
accountEmail = "b@gmail.com"
accountpassword = "1234"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue of block scope & functional scope
*/
console.table([accountId, accountEmail, accountpassword, accountCity, accountstate])

