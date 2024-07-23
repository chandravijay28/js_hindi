const accountId = 1234
let accountEmail = "charul2264@gmail.com"
var accountPassword = "1234556"
accountCity = "Noida"


accountEmail = "chandra@gmail.com"
accountPassword = "21212121"
accountCity = "Greater Noida"

/*
prefer not to use var bcoz of issue in block scope and functional scope. 

*/

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])