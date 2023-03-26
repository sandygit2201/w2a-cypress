function calcFactorial(number){
    let factorial=1;
    let dataToPrint = ""
    let data =[]
    for(let i=1;i<=number;i++){
        factorial = factorial * i;
        dataToPrint = dataToPrint+i
        if(i!=number){
            dataToPrint = dataToPrint + "'X"
        }

    }
    data.push(dataToPrint)
    data.push(factorial)

    return data
}

let data = calcFactorial(5)

console.log(data)
