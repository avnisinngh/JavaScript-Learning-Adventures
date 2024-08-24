// Immediately Invoked Function Expressions(IIFE)

//global scope ke pullution se issues ke karan we use iife

(function chai() {
    console.log(`DB connected`);
    
})();

//()() //jaha hum function likhenge , execution call

(function aurcode() {
    console.log(`DB connected two`);
    
})();

((name) => {
    console.log(`DB connected three ${name}`);
    
})('Avni');

