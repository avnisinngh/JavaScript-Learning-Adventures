const coding = ["js", "java", "ruby", "python", "C++"]

coding.forEach( function (item ) {
   // console.log(item);
    
} )

coding.forEach( (val) => {
//    console.log(val);
    
})

function printMe(item) {
// console.log(item);
    
}
//coding.forEach(printMe)

coding.forEach( (item, index , arr) => {
//    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageNmae : "JavaScript",
        languageFileNmae : "js"
    },
    {
        languageNmae : "Java",
        languageFileNmae : "java"
    },
    {
        languageNmae : "Python",
        languageFileNmae : "py"
    }
]

myCoding.forEach ((item) => {
    console.log(item.languageNmae);
    
})
 
