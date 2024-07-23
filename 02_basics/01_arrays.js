const arr = [1,2,3,4,5]
console.log(arr[0]);
const ar1 = new Array(1,2,3,4) 
/*
ar1.push(8)
ar1.unshift(9) // to add element in first place
ar1.shift() // it removes the first element

//console.log(ar1.includes(5));

const arr2 = ar1.join() 
//console.log(ar1);
//console.log(arr2);
*/

console.log("A ", ar1);
const myn1 = ar1.slice(1, 3)//it gives the value excluding 3
console.log(myn1);
console.log("B ", ar1);

const myn2 = ar1.splice(1, 3)// it gives the value including 3 and it deleted the spliced value from the main array
console.log("C ", ar1);
console.log(myn2);

//console.log(ar1);