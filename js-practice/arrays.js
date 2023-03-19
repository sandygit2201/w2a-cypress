// arrays are not type-specific in js
// different data types can be stored in an array
let a = [1,2,3,4] // valid
// data can be accessed using the index of the element
console.log(a[3]) // printing 4 on console
a = [1,"sun",["a","b"],{"name":"js"}] //valid
console.log(a[2][1]) // printing b on console
a = [1,2,3,4]
// Push - adding data in the end
// Unshift - adding element in the beginning
// Pop - removing element from the last
// Shift - remove an element from the beginning
a.push(5) // [1,2,3,4,5]
a.unshift(0) // [0,1,2,3,4,5]
a.pop() // [0,1,2,3,4]
a.shift() // [1,2,3,4]
a.sort() // will sort data in an array