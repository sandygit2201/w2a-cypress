function printFibo(numbersToPrint){
    let fiboSeries = [1,1]
    for(let i=2;i<=numbersToPrint;i++){
       fiboSeries[i] = fiboSeries[i-1]+ fiboSeries[i-2]
    }
    return fiboSeries;
}

console.log(printFibo(6))