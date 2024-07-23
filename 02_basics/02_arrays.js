const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

/*
marvel.push(dc)
console.log(marvel);
console.log(marvel[3][1]);
*/

//const heroes = marvel.concat(dc)
//console.log(heroes);

const newheroes = [...marvel, ...dc]
//console.log(newheroes);

const arr = [1,2,3,[4,5,6,], 7,8,9, [4,5,[6,7]]]
const arr1  = arr.flat(Infinity)
console.log(arr1);

console.log(Array.isArray("chandra"));
console.log(Array.from("chandra"));

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3








    
));



