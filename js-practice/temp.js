let a =[1,2,3,4,5,6,7,2]

// console.log(a.indexOf(2))

let indexes =[]
for(let index =0;index<a.length;index++){

    if(a[index]==2)
      indexes.push(index)

}

console.log(indexes)

