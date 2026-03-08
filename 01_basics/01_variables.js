const accounId = 11;
let accountEmail = "shivkarcse@gmail.com";
var accountPassword = "Shivkar_itsme";
accountCity = "Jaipur";

// Note - const cannot be changed and rest can be 

console.log("printing all above at once");

console.table( [ accounId, accountEmail, accountCity ] );

/*
prefer not to use var
because of issues in block scope
and functional scope 
*/

let accountState;

console.log(accountState);
