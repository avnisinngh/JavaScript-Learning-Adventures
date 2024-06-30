const name = "Avni"
const repoCount = 4

//console.log(name + repoCount + " Value");

//modern way -> string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Avni-Singh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);        //object // {}

//console.log(gameName.length);       //4
//console.log(gameName.toUpperCase());  //og value is not changed 
//console.log(gameName.charAt(2));        //n

//console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-18,4)
console.log(anotherString);

const newString1 = "  AVNI  "
console.log(newString1);
console.log(newString1.trim())

const url = "https://avni.com/avni%20singh"
console.log(url.replace('%20', '-'))
console.log(url.includes('avni'));

console.log(gameName.split('-'))