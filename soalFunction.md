# TUGAS FUNCTION

## Soal 1 - Buat Kotak

Tampilkan sesuai hasil berikut :

```javascript
function printKotak(num){
    // code here

}
// Result: Input : 5
printKotak(5);

xxxxx
x   x
x   x
x   x
xxxxx
```

## Soal 2

Cek palindrome

```javascript
function cekPalindrome(kata) {
  // code here
}

// Test Case ->
console.log(cekPalindrome("katak")); // true
console.log(cekPalindrome("baso")); // false
console.log(cekPalindrome("kasur rusak")); // true
```

## Soal 3

Cari pasangan angka terbesar dari string number.

Diberikan 2 buah function dengan task sebagai berikut :

- splitToArray : mengambil pasangan angka ke dalam array

Contoh : let input = "5279312" -> [52,27,79,93,31,12]

- findTheLargest : function utama mengahasilkan number

```javascript
function splitToArray(string) {
  // code here
}
function findTheLargest(string) {
  let arrayNumbers = splitToArray(string);
  // code here
}

// test case ->
console.log(findTheLargest("5275789312")); // 93
console.log(findTheLargest("313282787")); // 87
console.log(findTheLargest("19")); // 19
console.log(findTheLargest("7")); // 7
console.log(findTheLargest()); // Input number
```

## Soal 4

Cari mean

```javascript
function mean(arr) {
  // code here
}

// test case =>
console.log(mean([1, 2, 3, 4, 5, 6, 7])); // 4.00
console.log(mean([2.1, 1.7, 5.4])); // 3.07
console.log(mean()); // Masukkan angka
```

## Soal 5

Ubah kalimat berikut menjadi sebuah array.

Aplikasikan modular function dengan rincian sebagai berikut :

- function commaSeparator() -> memisahkan koma menghasilkan array
- function dashSeparator() -> memisahkan dash menghasilkan array
- function joinSpaces() -> menggabungkan array dengan spasi menghasilkan array
- function stringFormater() -> function utama

```javascript
let food = "nasi-goreng,nasi-uduk,nasi-kuning";
/*
 * Result => ["nasi goreng","nasi uduk","nasi kuning"]
 */
function commaSeparator(str) {
  // code here
}
function dashSeparator(arr) {
  // code here
}
function joinSpaces(arr) {
  // code here
}
function stringFormater(string) {
  // code here
}
```
