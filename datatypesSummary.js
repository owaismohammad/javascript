// Two types of datatypes

//primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt(for scientific values)




//Reference (Non Primitive)

//Array, Objects, Functions

const heroes= ["sp", "ng", "doga"]

let myObj = {
    name:"hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("HelloWorld");
}

console.log(myFunction);

//datatyeps

/*
Undefined = undefined
null = object
boolean = boolean
number = number
string = string
funtion = funtion
*/

//+++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive), Heap(NonPrimitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "owais"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user2.com",
    upi : "ues@ybl"
}

let userTwo = userOne
userTwo.email ="124"
console.log(userTwo.email)
console.log(userOne.email)
