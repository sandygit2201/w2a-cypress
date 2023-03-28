function getVowelCount(input){
    let vowels = ['a','e','i','o','u']
    let count =0
    for(let char of input){
        if(vowels.includes(char))
         count++
    }
    return count;
}

let inputString = "aeiou"

console.log(getVowelCount(inputString))