//const tinder = new Object() this is an singleton object
const tinder = { }// this is not a singleton object
tinder.id = "123abc"
tinder.name = "samy"
// console.log(tinder);

const user = {
    emai: "ndfjd",
    fullname: {
        userfullname: {
            firstname: "chandra",
            lastname: "vijay"
        }
    }
}
// console.log(user.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2,}
// console.log(obj3);
const course = {
    name: "js",
    price: "999",
    teacher: "chandra"
}
// console.log(course.teacher);
const {teacher: faculty} = course
console.log(faculty);

// {
//     "name": "chandra",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]