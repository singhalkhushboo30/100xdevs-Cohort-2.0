const accountId=134563
let accountEmail="abc@gmail.com"
var accountPassword="abc"
accountCity="Jaipur"

//accountId =234 - not allowed

accountEmail="def@gmail.com"
accountPassword="def"
accountCity="Bengaluru"
let accountState

/*
Prefer not to use var
because of issue in block scope(let) and function scope(var)

*/


console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])