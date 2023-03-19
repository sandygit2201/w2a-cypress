for(let i=1;i<5;i++){
    // console.log(i)
}

let carDetails = {
    name:"i20",
    make:"2023",
    cost:"300000"
}

for(let key in carDetails){
    // console.log(key +"::"+carDetails[key])
}

let months = ["jan","feb","mar","apr"]

for(let month in months){
    // console.log(months[month])
}

let numbers = [10,20,30,40]
let total=0
numbers.forEach(num=>{total+=num})
console.log(total)

//  added a comment 