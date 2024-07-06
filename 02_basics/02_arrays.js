const hero = ["thor", "IronMan", "Spiderman"]
const dc = ["superman", "flash", "batman"]

//-------------------push
//hero.push(dc)
//console.log(hero);      //array in array
//console.log(hero[3][1]);

//-------------------concat
//const heros = hero.concat(dc)  
//console.log(heros);

//--------------------spread
//const heros = [...hero, ...dc]
//console.log(heros);

const another_Arr = [1, 2, [3, 4, 5], 7, [6, [2, 3, [5, 6]]]];
const real_another_Arr = another_Arr.flat(3);
//console.log(real_another_Arr);

console.log(Array.isArray("Hisytest"))
console.log(Array.from("AVNI"));
console.log(Array.from({name: "Avni"}));        //intresting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));