// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.


// let easyArray = [2, 4, 7, 11, 15, 16]

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// let odds = arr.filter(n => n%2)
// // let evens = arr.filter(n => 2)

// console.log(odds)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let odds = arr.filter(n => n % 2)
let evens = arr.filter(n => n % 2 === 0)

console.log(odds)
console.log(evens)

// let arr2 = [0, 1, 2, 3, 4].filter(function (n) { return n % 2 === 0; });
// console.log(arr2)

//Create a function that checks an array for prime numbers then inserts any pimes into a new array.               


// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}