
function countOccurrence(inputString){

    let occurrence = {}
    for(let char of inputString){
        if(occurrence.hasOwnProperty(char)){
            occurrence[char] = occurrence[char]+=1;
        }
        else{
            occurrence[char] = 1;
        }
    }

    return occurrence;
}


let input ="abcd eab c"
console.log(countOccurrence(input))