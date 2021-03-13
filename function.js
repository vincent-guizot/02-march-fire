// Function -> kumpulan perintah untuk menjalankan suatu task tertentu

/**
 * Karakteristik function
 * 1. Hanya melakukan 1 tugas tertentu
 * 2. Reusable : dapat dipakai berkali - kali
 */

function print(string) {
    let temp = string += " 1"
    console.log(temp)
}

// Invoke / call function
// print("Hello World")
// print("Hai")
// print("Ini Vincent")
// print()
// print()


// tambah(1,2)
// tambah(3,7)
// tambah(1.2,2.75)

function cekGanjilGenap(num) {
    if (num === undefined) {
        return "Masukkan nilai";
    } else {
        if (num % 2 === 0) {
            return "Genap"
        } else {
            return "Ganjil"
        }
    }

    // if(!num){
    //     return "Masukkan nilai"
    // }else{
    //     return "Ada nilai"
    // }
    // Ternary
    // return num % 2 === 0 ? "Genap" : "Ganjil"
}

// console.log(cekGanjilGenap(5))

function tambah(a, b) {
    return a + b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}
function kurang(a, b) {
    return a - b;
}
function modulus(a, b) {
    return a % b;
}

// Task
/**
 * Input : 5
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 * 
 */
function printNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (cekGenap(i) === true) {
            console.log(`${i} adalah Genap`)
        }
        if (cekGanjil(i) === true) {
            console.log(`${i} adalah Ganjil`)
        }
    }
}
function cekGenap(num) {
    return num % 2 === 0 ? true : false
}
function cekGanjil(num) {
    return num % 2 === 1 ? true : false
}
// printNumber(5)

let watches = ['Swiss Army', 'Dublot', 'Alba', 'DW', "G-shock"];

// Result -> Saya punya Swiss Army, Dublot, dan Alba.
function printArloji(watches) {
    let temp = "Saya punya"
    for (let i = 0; i < watches.length; i++) {
        if (i !== watches.length - 1) {
            temp += ` ${watches[i]},`
        } else {
            temp += ` dan ${watches[i]}.`
        }
    }
    return temp
}
// console.log(printArloji(watches))

let pantun = "makan nasi bayar pake paku"

function pantunFormatter(poetry) {
    let temp = ''
    let result = []
    for (let i = 0; i < poetry.length; i++) {
        if (poetry[i] !== ' ') {

            temp += poetry[i]
        }
        else if (poetry[i] === ' ') {
            result.push(temp);
            temp = ''
        }
        if (i === poetry.length - 1) {
            result.push(temp);
            temp = ''
        }
    }
    return result
}
// console.log(pantunFormatter(pantun))

// console.log(pantun.split(' '))

let input = ['blueberry', 'apple', 'orange', 'anggur', 'banana', 'pineapple', 'papaya']

function groupFruits(input) {
    let kamus = 'abcdefghijklmnopqrstuvwxyz';
    let temp = [];
    let result = [];

    for (let i = 0; i < kamus.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (kamus[i] === input[j][0]) {
                temp.push(input[j])
            }
        }
        if (temp.length !== 0) {

            result.push(temp)
            temp = []
        }
    }
    return result;
}
// console.log(groupFruits(input))

/**
Determinan = a*d - b*c
A = | a b |
    | c d |
 */

function determinan(matrix) {
    let result = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    return result
}

// console.log(determinan([
//     [1,2],
//     [3,4]
// ]))

function susunKata(arr) {
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] !== ' '){
                temp+= arr[i][j]
            }
        }
    }
    return temp
}

console.log(susunKata([
    [" "," ","M"," "," "],
    [" "," "," ","a"," "],
    [" "," "," "," "," "],
    [" ","k"," "," "," "],
    [" "," "," "," "," "],
    [" "," "," "," ","a"],
    [" "," "," ","n"," "],

]))