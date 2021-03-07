// var angka = 10;
// var n = 5;
// var temp = ''
// var total = 0;

// for(var i = 0; i < n; i++){
// console.log("x" + (i+1));
// console.log(angka + (i+1))
// temp = temp + "x" + (i+1);
// console.log(temp)
// temp = ''
// console.log(angka + (i+1))
//     total = total + (i+1)
// }
// console.log("Total = " + total)

// Result : 12345
// Result : *****
// Result : x1x2x3x4x5

// Result : 
/**
x1
11
x2
12
x3
13
x4
14
x5
15
 */
// Result : Total = 15

// 1 2 3 4 5
// 3 3 4 5
// 6 4 5
// 10 5
// 15
/**
SIMULASI LOOP
i = 0 -> 10

i= 1 ->
10
10

i= 2 ->
10
10
10

i = 3 ->
10
10
10
10

i = 4 ->
10
10
10
10
10

i= 5 X
 */

// var name = "Vincent Guizot";
// // built in function -> .length, .toUpperCase(), .toLowerCase()
// for(var i = 0; i< name.length ; i++){
//     console.log(name[i].toUpperCase())
// }
// console.log(name.length)

// var kode = "abbaabbaabaa";
// var flagA = 0;
// var flagB = 0;

// for(var i = 0; i<kode.length; i++){
//     if(kode[i] === 'a'){
//         flagA++;
//     }else if(kode[i] === 'b'){
//         flagB++;
//     }
// }
// console.log('Jumlah a : ' + flagA)
// console.log('Jumlah b : ' + flagB)

// TASK
/**
 * Input = 5;
 * Result :
 * 
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 */

// Algoritma

/**
 * 1. Buat variable number
 * 2. Looping dari 1 hingga variable number
 * 3. Cek 1 per 1,
 *     3.1. Jika habis dibagi 2 maka genap
 *     3.2. Jika tidak habis dibagi 2 maka ganjil
 */
// Pseudocode

/**
 * STORE number WITH ANY NUMBER
 * 
 * FOR i EQUAL 1 TO number
 *     IF i MOD 2 EQUAL 0
 *         DISPLAY i + ' adalah genap'
 *     ELSE IF i MOD 2 EQUAL 1
 *         DISPLAY i + ' adalah ganjil'
 *     END IF
 * END FOR
 */// Coding

//   var number = 10;

//   for(var i = 1; i <= number; i++){
//       if(i % 2 === 0){
//           console.log(i + ' adalah genap');
//       }else if(i % 2 === 1){
//         console.log(i + ' adalah ganjil');
//     }
//   }

// for(var i = 0; i < number; i++){

// }

// var number = 5;
// var i = 1;

// while (i <= number) {
//     if (i % 2 === 0) {
//         console.log(i + ' adalah genap');
//     } else if (i % 2 === 1) {
//         console.log(i + ' adalah ganjil');
//     }
//     i++;
// }

// TASK
// Print num angka ganjil pertamax -> 1 3 5 7 9
// var num = 5
// var i = 0;
// var flag = 0;

// while(num>0){
//     i++;
//     if(i%2 === 1){
//         console.log(i);
//         flag++
//     }
//     if(flag === num){
//         break;
//     }
// }

// Result
/**
 xxx
 xxx
 xxx
 */
// var temp =''
//  for(var i = 0; i< 7;i++){
//      for(var j = 0; j < 5; j++){
//         temp += "x"
//         // console.log(i, j)
//     }
//      console.log(temp)
//      temp = ''
//  }

var kalimat = "saya makan nasi ayam enak"
// Result
/**
 * saya
 * makan
 * nasi
 * ayam
 * enak
 */
// var temp = ''
//  for(var i = 0; i < kalimat.length; i++){
//     temp += kalimat[i]
//     if(kalimat[i] === ' '){
//         console.log(temp);
//         temp = ''
//     }
//     if(i === kalimat.length - 1){
//         console.log(temp);
//         temp = ''
//     }
// }

// Result
/**
 * AYAS
 * NAKAM
 * ISAN
 * MAYA
 * KANE
 */
var temp = ''

 for(var i = 0; i < kalimat.length; i++){
     if(kalimat[i] !== ' '){
         temp += kalimat[i]
     }else if(kalimat[i] === ' '){
        var temp1 = ''
        for(var j = temp.length-1; j >= 0;j--){
            temp1 += temp[j].toUpperCase()
        }
        console.log(temp1)
        temp = ''
    }
    if(i === kalimat.length - 1){
        var temp1 = ''
        for(var j = temp.length-1; j >= 0;j--){
            temp1 += temp[j].toUpperCase()
        }
        console.log(temp1)
        temp = '' 
    }
}