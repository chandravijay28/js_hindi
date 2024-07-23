// singleton: 
//if we make objects with literals it doesnot make single and if it does with constructor it makes singleton


//object literals


const sym = Symbol("keys1")

const jsuser = {
    name: "chandra",
    [sym]: "mykeys1",
    age: 20,
    location: "noida",
    email: "charul2264@gmail.com"
}
/*
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(typeof jsuser[sym]);
*/
jsuser.name = "vijay"
//Object.freeze(jsuser)
jsuser.name = "singh"
//console.log(jsuser);

jsuser.greeting = function() {
    console.log("hello");
}

console.log(jsuser.greeting());


