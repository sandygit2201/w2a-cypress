//Let, Var and cost are the three ways to declare variables in JS
// Let is been introduced in ES6
// JS is a Dynamically typed language
let i = 20 // i is initialized as number
i="Hello" // it can be assigned with a string
i = [1,2,3,4] // can be re-assigned to an array
// similar in case of var
var j = 20 // i is initialized as number
j="Hello" // it can be assigned with a string
j = [1,2,3,4] // can be re-assigned to an array
// variables declared with let are only available inside the block where the variable is declared
// Ex
function let_scope_Ex(){
     if(true){
       let let_variable = "Hello World"
       console.log("inside block scope::"+let_variable)
    }
   
    console.log("Outside Block scope::"+let_variable) // throw an error


}
function var_scope_Ex(){
    if(true){
      let var_variable = "Hello World"
      console.log("inside block scope::"+var_variable)
   }
   console.log("Outside Block scope::"+var_variable) // print Hello world without any error
}


// Const keyword is used to declare constants
// variables declared with const keyword cannot be reassigned


const PI = 3.14
PI = 3.1428  // this will throw an error as const re-assigned with a new value