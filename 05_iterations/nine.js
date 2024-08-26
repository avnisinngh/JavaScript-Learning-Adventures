const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//    console.log(`acc : ${acc} and currval: ${currval}`);
//    
//    return acc+ currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// onsole.log(myTotal);

const shoppingCart = [
    {
        itemNmae: "js course",
        price : 2999
    },
    {
        itemNmae: "java course",
        price : 1999
    },
    {
        itemNmae: "py course",
        price : 999
    },
    {
        itemNmae: "data Science course",
        price : 4999
    }
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(pricetopay);
