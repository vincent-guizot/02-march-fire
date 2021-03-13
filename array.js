// Array -> kumpulan variable yang memiliki index

// let a = 10;
// let b = 12;
// let c = 15;

// let numbers = [10,12,15];
// let items = ["pc","hp","laptop"];

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])

// console.log(items[0][0])
// console.log(items[1][0])
// console.log(items[2][0])

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }
// numbers.push(19)
// console.log(numbers)

// numbers.unshift(7)
// console.log(numbers)

// numbers.pop()
// console.log(numbers)

// numbers.shift()
// console.log(numbers)

// ARRAY 2D
let desserts = [
    ["Brownies", 150000, "cake"],
    ["Chocolate cookie", 100000, "cookie"],
    ["Aice", 50000, "ice cream"]
];
// console.log(desserts[0][1][0])

// for(let i = 0; i < desserts.length; i++){
//     // console.log(desserts[i])
//     for(let j = 0; j < desserts[i].length; j++){
//         console.log(desserts[i][j])
//     }
// }

let dessertsCategorize = [];
let tempName = [];
let tempPrice = [];
let tempType = [];

for (let i = 0; i < desserts.length; i++) {
    tempName.push(desserts[i][0]);
    tempPrice.push(desserts[i][1]);
    tempType.push(desserts[i][2]);
}

dessertsCategorize.push(tempName);
dessertsCategorize.push(tempPrice);
dessertsCategorize.push(tempType);

// console.log(dessertsCategorize);
/**
 * Result : [
 *  ["Brownies","Chocolate cookie","Aice"],
 *  [150000,100000,50000],
 *  ["cake","cookie","ice cream"]
 * ]
 */

/**TASK
 * let numbers = [1,2,3,4,5,6,7,8,9,10]
 * 
 * Result : [
 *     [1,3,5,7,9],
 *     [2,4,6,8,10]
 * ]
 */

let numbers = [1,2,3,4,5,6,7,8,9,10];

let result = [];
let ganjil = [];
let genap = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        genap.push(numbers[i])
    } else if (numbers[i] % 2 === 1) {
        ganjil.push(numbers[i])
    }
}
result = [ganjil, genap]
console.log(result)