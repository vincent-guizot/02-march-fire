// var let const

// console.log(num)
// var num = 10;

// let num = 10;
// num = "Hello World";
// console.log(num)

// const num = 100;
// num = 10; -> tidak bisa di reassign
// console.log(num)

// const numbers = [1,3,5,7,9];
// numbers.push(10,12); // dapat di modif
// console.log(numbers)

// Luas Lingkaran
// let r = 7;
// const pi = 3.14;

// let luas = pi * r * r;

// Hoisting : diangkat -> var, function declaration

// function

// FUnction DEclaration
// print()
// function print(){
//     console.log("Hello World")
// }

// Function Expression
// print()
// let print = function(){
//     console.log("Hello World")
// }

// Function Arrow

const print = () => console.log("Hello World")
// print()
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;

// console.log(tambah(3,5))
// hof -> high order function untuk array

// let numbers = [1, 2, 3, 4, 5];
// let items = ['laptop', 'hp', 'pc']
// ES5
// for(let i = 0 ; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// ES6
// numbers.forEach(number => console.log(number))
// items.forEach(item => {
//     console.log(item)
// })

// Cek ganjil genap
// function cekGanjilGenap(angka){
//     if(angka % 2 === 0){
//         console.log("Genap")
//     }else {
//         console.log("Ganjil")
//     }
// }
// const cekGanjilGenap = angka => angka % 2 === 0 ? console.log("Genap") : console.log("Ganjil");
// cekGanjilGenap(7)

// numbers.forEach(number => number % 2 === 0 ? console.log(`${number} Genap`) : console.log(`${number} Ganjil`))
// numbers.forEach(number => {
//     if (number % 2 === 0) {
//         console.log(`${number} Genap`)
//     } else {
//         console.log(`${number} Ganjil`)
//     }
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for(let i = 0; i < numbers.length; i++){
//     result.push(numbers[i] * 5)
// }

// let result = numbers.map(number => {
//     return number*5
// })

// let result = numbers.map(number => number * 5)
// console.log(result)

// let result = [];
// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] % 2 ===0){
//         result.push(numbers[i])
//     }
// }
// let result = numbers.filter(number => number % 2 === 1)
// console.log(result)

// destructuring

let student = {
    name: "Vincent",
    gpa: 3.21,
    isGraduate: true
}

// destructuring object
// const {name,gpa,isGraduate} = student;
// console.log(name)
// console.log(gpa)
// console.log(isGraduate)

let items = ["dell 5575", 7500000, 'laptop']

// destructuring array
// const [name,price,type] = items;
// console.log(name);
// console.log(price);
// console.log(type);

let hardwares = [
    ["dell 5575", 7500000, 'laptop'],
    ["hp 1000", 5500000, 'laptop']
]

// hardwares.forEach(hardware => {
//     const [name, price, type] = hardware
//     console.log(name, price, type)
// })

// spread operator dan rest operator

// Mutable dan Immutable

// spread
let num1 = [1, 2, 3]
let num2 = [...num1]

// num1.forEach(el => num2.push(el))
num2[0] = 100;
// console.log(num1)
// console.log(num2)

// rest
const total = (...numbers) => {
    let jumlah = 0
    numbers.forEach(number => jumlah += number)
    return jumlah;
}

// console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))

const numbers = [100, 55, -15, 75, -10, 0, 123, -50];
/**
 * Numbers akan di kali 10
 * Numbers akan di pilih lebih besar dari 0
 * Numbers akan di sort
 * Numbers akan di show
 */
// ES5
function processNumbers(numbers) {
    let temp = []
    for (let i = 0; i < numbers.length; i++) {
        temp.push(numbers[i] * 10)
    }
    let tempMoreZero = []
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] >= 0) {
            tempMoreZero.push(temp[i])
        }
    }
    // Bubble sort
    for (let i = 0; i < tempMoreZero.length; i++) {
        console.log(tempMoreZero[i])
    }
}
// processNumbers(numbers)

// ES6
const numbersProcess = numbers => numbers.map(number => number * 10).filter(number => number >= 0).sort((a, b) => a - b).forEach(number => console.log(number))

numbersProcess(numbers)
