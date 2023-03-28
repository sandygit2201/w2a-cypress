function numberDigits(number){
    let temp = number;
    let digits =[];
    while(temp>0){
        digits.push(temp%10)
        temp = Math.trunc(temp/10);
    }
    return digits
}

function getPowerOfDigits(input,numberOfDigits){
 return input.map(x => Math.pow(x,numberOfDigits))
}

function getSumOfArray(input){
    let sum =0
    for(let i=0;i<input.length;i++){
        sum+=input[i]
    }
    return sum
}

let number = 1634
let digits = numberDigits(number)
console.log(digits)

let digitsCubs= getPowerOfDigits(digits,digits.length)
console.log(digitsCubs)

let sumOfCubes = getSumOfArray(digitsCubs)
console.log(`sum of cubes :: ${sumOfCubes}`)

if(number==sumOfCubes){
    console.log(`given number ${number} is armstrong`)
}

