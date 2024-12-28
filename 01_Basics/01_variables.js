const accountId =114553; //cannot be changed

// let and var are used to declare variables whereas const is used to store constant
let accountEmail = "owais@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"

let accountState;

// accountId = 2; error**

accountEmail = "hc@hc.com"
accountPassword = "212121";

console.table([accountEmail, accountId, accountPassword, accountState]);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/