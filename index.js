// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.


// let easyArray = [2, 4, 7, 11, 15, 16]

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// let odds = arr.filter(n => n%2)
// // let evens = arr.filter(n => 2)

// console.log(odds)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let odds = arr.filter(n => n % 2)
let evens = arr.filter(n => n / 2)

console.log(odds)
console.log(evens)