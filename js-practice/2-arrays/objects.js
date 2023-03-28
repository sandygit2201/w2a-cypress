// Objects are complex data types in js. 
// objects are similar to hash in java like key value pair 
let car = {
    type:"Hyundai",
    make:"2022",
    cost:1000000
}
// Object details can be accessed in two ways
console.log(car.type)
console.log(car["type"])
// New property can be added in two ways 
car.number = 1234
car["number"] = 1234
// delete is used to remove property form the object 
delete car.make
// now car will have 3 keys 
let car = {
    type:"Hyundai",
    number:1234,
    cost:1000000
}
