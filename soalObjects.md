# TASK - Object and Array of Objects

## Task 1

Find the modus of an array

```js
let numbers = [10, 5, 12, 7, 15, 10, 5, 10, 12];

function findModus(array) {
  // code here
}

// Test case
console.log(findModus(numbers)); // 10
```

## Task 2

Break money (memecah uang);

Seorang pria berniat ingin menukar atau memecah uang ke bank. Namun dia ditantang untuk membuat aplikasi tersebut dalam js.

```js
let recehan = [10000, 5000, 2000, 1000, 500];

function breakMoney(recehan, uang) {
    // code here
}

// Test case
console.log(breakMoney(recehan, 37000));
/*
    {
        10000 : 3,
        5000 : 1,
        2000 : 1,
        1000 : 0,
        500 : 0
    }
*/
console.log(breakMoney(recehan, 53500));
/*
    {
        10000 : 5,
        5000 : 0,
        2000 : 1,
        1000 : 1,
        500 : 1
    }
*/
```

## Task 3

Categorize the data

Diberikan array 2 dimensi dengan ketentuan sebagai ber8kut :

- Index ke 0 merupakan kategori
- Index ke 1 merupakan makanan

```js
let groceries = [
    ["chicken","meat"],
    ["apple","fruit"],
    ["beef","meat"],
    ["carrot","vegetables"],
    ["banana","fruit"],
    ["potato","vegetables"],
    ["fish","meat"],

]

function categorize(arr2d) {
    // code here
}
// Result
console.log(categorize(groceries)
/*
    {
        meat : ['chicken','beef','fish'],
        fruit : ['apple','banana'],
        vegetables : ['carrot','potato']
    }
*/


```
