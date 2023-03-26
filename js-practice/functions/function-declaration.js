

function greet(name="world"){
    console.log(`Hello ${name}` )
}

// greet();

function getUserScope(userType){

    switch(userType){
        case ((userType == "owner") || (userType="admin")):
            return "owner has read, write and delete access to the doc"
            break;
        case "collaborator":
            return "collaborator has read  and write access"
            break;
        case "user":
            return "user has read only access"
            break
        default:
            return "given user type does not have access to the doc"    
    }

}

let userAccess = getUserScope("admin")
// console.log(userAccess)

// function sum(x,y){
//     return x+y;
// }

// function diff(x,y){
//     return x-y;
// }

function sumEx(){
    for(let i=0;i<arguments.length;i++){
        console.log(`argument ${i} ::${arguments[i]}`)
    }
 
}

// console.log(sum(3,4))

function calculate(){
   return function(x,y){
    return x+y;
   }
}
let sum = function(x,y){
    return x+y;
}

// let returnFxn = calculate();
// let total = returnFxn(6,7)
// console.log(total)

(function(){
    console.log("Hello world")
}());

function printNumbers(...numbers){
 console.log(numbers)
}
printNumbers(2,3,4)