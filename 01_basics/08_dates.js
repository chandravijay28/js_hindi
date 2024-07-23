let date = new Date()
/*
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
*/
//let newDate = new Date(2023, 0, 23)
//let newDate = new Date(2023, 0, 23, 5, 3)
let newDate = new Date("2024-01-28")

//console.log(newDate.toLocaleString());

let time = Date.now()
console.log(time);
console.log(newDate.getTime());

date.toLocaleString('default', {
    weekday: "long",
})