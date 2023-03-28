// Functions are block of code that is being executed on calling 
// function parameters  
//   1. empty
//   2. data
//   3. another function
//  function returnType
//   1. functions can OR cannot have return types
//   2. return type can be data OR another function

//  accessing function parameters using arguments 
function sum(){
    let num1 = arguments[0]
    let num2 = arguments[1]
    return num1+num2
}
let total = sum(3,5)
console.log(total)

//  data can be passed using rest parameters with ...notation 

function restEx(...numbers){
 console.log(numbers)
}
restEx(5) // valid
restEx(2,3) // valid
restEx(2,3,4) // valid
restEx("Hello") // valid

//  function as param
let greet = ()=> console.log("Hello world")  // arrow function 

function functionAsParam(fxnAsParam){
   fxnAsParam()
}

functionAsParam(greet)