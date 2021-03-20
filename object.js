// Object : Kumpulan data yang memiliki key dan value

// array
// let students = ["Vincent",3.21,true]

// Object Literal
// let student = {
//     // key : value
//     name : "Vincent",
//     gpa : 3.21,
//     isGraduate : true,
//     "able to code" : "yes",
//     10 : "1"
// }

// console.log(student.name);
// console.log(student["10"]);

// Array of Objects
let items = [
    {
        name: "Dell 5575",
        type: "laptop",
        price: 7500000
    },
    {
        name: "HP Pavillion",
        type: "laptop",
        price: 5500000,
    },
    {
        name: "Corsair 16gb",
        type: 'ram',
        price: 500000
    }
]

// for(let i = 0; i < items.length; i++){
//     console.log(items[i].name)
//     console.log(items[i].type)
//     console.log(items[i].price)
// }

// for(let key in student){
// print key
// console.log(key)

//print value
// console.log(student[key])
// }

// ============================================

/**
 * let students = ["Vincent",3.21,true]
 * 
 * // Result
 * {
 *  name : "Vincent",
 *  gpa : 3.21,
 *  isGraduate : true
 * }
 */

function convertToObject(array) {
    let result = {};

    result.name = array[0];
    result.gpa = array[1];
    result.isGraduate = array[2];

    return result;
}


// console.log(convertToObject(["Vincent",3.21,true]))
// console.log(convertToObject(["James",3.35,true]))

/**
 * Cari jumlah huruf a, b, dan c dalam sebuah string
 * 
 * let string - "ababbcabccabccabcaaabaca";
 * 
 * Result
 * {
 *  a : 10,
 *  b : 7,
 *  c : 7
 * }
 */

function countCharacter(str) {
    // JIKA DIKETAHUI HURUF MANA YG MAU DI CARI (STATIS)
    // let result = {
    //     a : 0,
    //     b : 0,
    //     c : 0
    // }
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] === 'a'){
    //         result.a += 1;
    //     }else if(str[i] === 'b'){
    //         result.b += 1;
    //     }else if(str[i] === 'c'){
    //         result.c += 1;
    //     }
    // }
    // return result

    // HURUF TIDAK CUMA 3 (DINAMIS)
    let result = {}

    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] === undefined) {
            result[str[i]] = 1;
        } else {
            result[str[i]]++;
        }
    }
    return result
}

// console.log(countCharacter('ababbcabcdcabccabdcaeaabaeca'))
// console.log(countCharacter('abaaabbbbgbbchacccbcfcaaahaaabcicbabcigaajajbaca'))

/**
 * Hitung vote dari pemilihan
 * 
 */
let votes = ["Vincent", "James", "Vincent", "James", "Vincent", "Stella", "Stella"]


function countVote(voters) {
    let result = {}

    for (let i = 0; i < voters.length; i++) {
        // if(!result[voters[i]]){
        //     result[voters[i]] = 1;
        // }else {
        //     result[voters[i]] += 1;
        // }

        // Ternary
        !result[voters[i]] ? result[voters[i]] = 1 : result[voters[i]]++;
    }

    return result
}

// console.log(countVote(votes))

let voters = [
    {
        candidate: "Vincent",
        date: "19-03-2021",
        name: "A"
    },
    {
        candidate: "James",
        date: "19-03-2021",
        name: "B"
    },
    {
        candidate: "Vincent",
        date: "19-03-2021",
        name: "C"
    },
    {
        candidate: "Stella",
        date: "19-03-2021",
        name: "D"
    },
    {
        candidate: "Vincent",
        date: "19-03-2021",
        name: "E"
    },
]

function countVotes(votes) {
    let result = {}

    for (let i = 0; i < votes.length; i++) {
        if (result[votes[i].candidate] === undefined) {
            result[votes[i].candidate] = 1
        } else {
            result[votes[i].candidate] += 1

        }
    }

    return result

}
// console.log(countVotes(voters))

let input = [
    ["cookie", 10000, ["flour", "egg", "milk"]],
    ["cake", 15000, ["flour", "milk", "butter"]],
    ["brownies", 30000, ["egg", "milk", "chocolate"]]
]
function arrayToObject(arr2d){
    let temp = []
    let tempObj = {}

    for(let i = 0; i < arr2d.length; i++){
        tempObj.name = arr2d[i][0]
        tempObj.price = arr2d[i][1]
        tempObj.ingredients = arr2d[i][2]

        temp.push(tempObj);
        tempObj = {}
    }

    return temp;
}
// console.log(arrayToObject(input))

function groupByIngredients(ingredient){
    let data = arrayToObject(input);
    let result = []
    for(let i = 0; i < data.length ; i++){
        for(let j = 0; j< data[i].ingredients.length ; j++){
            if(data[i].ingredients[j] === ingredient){
                result.push(data[i])
            }
        }
    }
    return result;
}
console.log(groupByIngredients('chocolate'))