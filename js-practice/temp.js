// getting digits out a number 
//  n is number of digits 
// calculate nth power of digit 
//  total of nthpower of digits 




function getDigitsOfNumber(num){
  let digits =[]
   while(num>0){
    digits.push(num%10)
    num = Math.trunc(num/10)
   }
   return digits
}

function getSumOfNthPowOfDigits(digits){
  let total = 0;
  let length = digits.length
  // map
  for(let i=0;i<digits.length;i++){
    let nthPowerOfDigit = Math.pow(digits[i],length)
    console.log(`pow(${digits[i]},${length})= ${nthPowerOfDigit}`)
    total = total + nthPowerOfDigit
  }
  return total;
  
}
let num = 1634;

let digits = getDigitsOfNumber(num)
console.log(digits)
let total = getSumOfNthPowOfDigits(digits)
console.log("total::"+total)

if(total == num)
 console.log("Given number is armStrong")
 else 
 console.log("Given number is not armStrong")

