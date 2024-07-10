// const tinderUser = new Object()      singleton obj
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Avni",
            Lastname :"Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 ={ 3:"c", 4: "d"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
    },
    {

    },
    {},{

    }
]

users[1].id
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));  // check is property is present or not

