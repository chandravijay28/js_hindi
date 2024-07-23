/*"use strict"; // treat all JS code as newer version
// alert( 3 + 3) // we are using nodejs, not browser
console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

//console.log(typeof name); // undefined
//console.log(typeof null); // object


// primitive (call by value only copied is given)
// 7 types : string, integer, boolen, null, undefined, symbol, BigInt

  //const score = 100
//const scoreValue = 100.3







// Non-Primitive (cal by reference)
// Arrays, Objects, Functions
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "ChandraVijay"
let anothername = myYoutubename

anothername = "singh"
console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email:  "chandra",
    upi: "user@byl"
}

let user2 = user1

user2.email = "vijay"

console.log(user1.email);
console.log(user2.email);

