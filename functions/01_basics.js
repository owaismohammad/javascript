function sayMyname(){
    console.log("H")
    console.log("E");
    console.log("LL")
    
}
// sayMyname();
function addTwoNumbers(number1, number2){
    console.log( number1+number2)
}

// addTwoNumbers(6,5)

function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter a username")
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("owo"))

// const chai = () =>{
//     console.log(this)
// }

// const chai = function(){
//     console.log(this)
// }
chai();