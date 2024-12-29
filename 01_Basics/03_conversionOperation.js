let score = "33a";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let value = null;
let valueInNumber1= Number(value)
console.log(typeof valueInNumber1);
console.log(valueInNumber1)

// "33" => 33
// "33abc" => Nan
// true => 1, false=> 0
// "" => false
// "abc" => true
// null => 0


let isLoggedIn ="";
let valueInNumber2= Boolean(isLoggedIn)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)


//********************Operations***************** */

let val =3;
let negval = -val;



console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(+true); //1
console.log(+""); //0
