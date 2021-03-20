/*  
   INCOME & EXPENSE TRACKER
   
   SUMMARY
   =========
   Buatlah sebuah income and expense tracker yang dapat mengatur list pengeluaran dan pemasukan.
   
   TASKS
   =========
   Aplikasikan modular function untuk membuat aplikasi tersebut. Berikut rincian :
   
   1. function getTracks()
   - mengambil variable tracks lalu menghasilkan output seperti berikut :
    Expense :
    1. Bayar cicilan : Rp. 1.000.000
    2. Beli Makan : Rp. 500.000
    Income
    1. Income 1 : Rp. 1.000.000
    2. Jual makan : Rp. 500.000
   
    2. function addTrack(type,name,price)
    - menambahkan track (type : expense dan income), diluar itu error ("Input the right track!!")

    3. function deleteTrack(type,id)
    - menghapus track (type : expense dan income) diluar itu error ("Input the right track")

    4. function statusTrack()
    - untuk mengecek balance dengan rumus income - expense
    jika Minus tampilkan message : "Kurangi pengeluaran"
    jika Plus tampilkan message : "Aman gan"

    5. function rupiahFormatter(price)
    - mengubah digit harga menjadi rupiah
  */

let tracks = {
  expense: {
    lists: [
      {
        id: 1,
        name: "Bayar cicilan",
        subtotal: 1000000,
      },
      {
        id: 2,
        name: "Beli makan",
        subtotal: 500000,
      },
    ],
    total: 1500000,
  },
  income: {
    lists: [
      {
        id: 1,
        name: "Jualan online",
        subtotal: 1000000,
      },
      {
        id: 2,
        name: "Jual makan",
        subtotal: 500000,
      },
    ],
    total: 1500000,
  },
};

let expenseList = tracks.expense.lists;
let incomeList = tracks.income.lists;

/**
 * 
 *    1. function getTracks()
   - mengambil variable tracks lalu menghasilkan output seperti berikut :
    Expense :
    1. Bayar cicilan : Rp. 1.000.000
    2. Beli Makan : Rp. 500.000
    Income
    1. Income 1 : Rp. 1.000.000
    2. Jual makan : Rp. 500.000

    *? with destructuring? 
*/

function getTrackers() {
  // code here
  // ES5
  // console.log("expense");

  // for (let i = 0; i < expenseList.length; i++) {
  //   console.log(
  //     `${expenseList[i].id}. ${expenseList[i].name} : ${rupiahFormatter(expenseList[i].subtotal)}`
  //   );
  // }
  // console.log("income");
  // for (let i = 0; i < incomeList.length; i++) {
  //   console.log(
  //     `${incomeList[i].id}. ${incomeList[i].name} : ${rupiahFormatter(incomeList[i].subtotal)}`
  //   );
  // }

  //ES6
  console.log("Expense:");
  expenseList.forEach((el) => {
    const { id, name, subtotal } = el;
    console.log(`${id}. ${name} : ${rupiahFormatter(subtotal)}`);
  });

  console.log("Income:");
  incomeList.forEach((el) => {
    const { id, name, subtotal } = el;
    console.log(`${id}. ${name} : ${rupiahFormatter(subtotal)}`);
  });
}
/**
 * 
 2. function addTrack(type,name,price)
    - menambahkan track (type : expense dan income), diluar itu error ("Input the right track!!")

    *? temp needed?
 */
function addTracks(type, name, price) {
  // code here
  if (type === "expense") {
    let newExpense = [...expenseList];

    let temp = {};

    temp.id = newExpense[newExpense.length - 1].id + 1;
    temp.name = name;
    temp.subtotal = price;

    newExpense.push(temp);
    expenseList = newExpense;
    console.log("expense added");
    //console.log(expenseList);
  } else if (type === "income") {
    let newIncome = [...incomeList];
    let temp = {};

    temp.id = newIncome[newIncome.length - 1].id + 1;
    temp.name = name;
    temp.subtotal = price;

    newIncome.push(temp);
    incomeList = newIncome;
    console.log("income added");
    //console.log(incomeList);
  } else {
    console.log("Input the right type!");
  }
}

/**
 * 
3. function deleteTrack(type,id)
    - menghapus track (type : expense dan income) diluar itu error ("Input the right track")
 */
function deleteTracks(type, id) {
  // code here
  if (type === "expense") {
    let delExpense = [...expenseList];
    let res = [];
    // *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // for (let i = 0; i < delExpense.length; i++) {
    //   if (delExpense[i].id !== id) {
    //     res.push(delExpense[i]);
    //   }
    // }
    // expenseList = res;
    // console.log("expense deleted");

    //ES6
    delExpense.forEach((el) => {
      const { id: delId } = el;
      id !== delId ? res.push(delExpense[id]) : null;
      // if (delId !== id) {
      //       res.push(delExpense[id]);
      // }
    });
    expenseList = res;
    console.log("expense deleted");
  } else if (type === "income") {
    let delIncome = [...incomeList];
    let res = [];
    // for (let i = 0; i < delIncome.length; i++) {
    //   if (delIncome[i].id !== id) {
    //     res.push(delIncome[i]);
    //   }
    // }
    // incomeList = res;
    // console.log("income deleted");

    //ES6
    delIncome.forEach((el) => {
      const { id: delId } = el;
      id !== delId ? res.push(delIncome[id]) : null;
    });
    incomeList = res;
    console.log("income deleted");
  } else {
    console.log("Input the right type!");
  }
}

/**
 * 4. function statusTrack()
    - untuk mengecek balance dengan rumus income - expense
    jika Minus tampilkan message : "Kurangi pengeluaran"
    jika Plus tampilkan message : "Aman gan"
 */

function statusTrack() {
  // code here
  let tempTotalExp = 0;
  let tempTotalInc = 0;

  // *!!!!!!!!!!!!!!!
  // for (let i = 0; i < expenseList.length; i++) {
  //   tempTotalExp += expenseList[i].subtotal;
  // }

  // ES6
  expenseList.forEach(el => {
    const {subtotal} = el;
    tempTotalExp += subtotal;
  })

  // for (let i = 0; i < incomeList.length; i++) {
  //   tempTotalInc += incomeList[i].subtotal;
  // }

  //ES6
  incomeList.forEach(el => {
    const {subtotal} = el;
    tempTotalInc += subtotal;
  })

  tracks.expense.total = tempTotalExp;
  tracks.income.total = tempTotalInc;

  console.log("Total income:");
  console.log(rupiahFormatter(tracks.income.total));
  console.log("Total expense:");
  console.log(rupiahFormatter(tracks.expense.total));
  tracks.income.total - tracks.expense.total < 0
    ? console.log("Kurangi pengeluaran")
    : console.log("Aman gan!");
}

/**
 * 
 * 5. function rupiahFormatter(price)
    - mengubah digit harga menjadi rupiah
 */
function rupiahFormatter(price) {
  // code here
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "IDR",
  });
}

// console.log(tracks.expense.total);
// console.log(expenseList[0].subtotal);

// getTrackers();
// addTracks("expense", "Beli mobil", 1000);
// addTracks("income", "Jual tanah", 2000);
// getTrackers();
// deleteTracks("expense", 2);
// getTrackers();

// getTrackers();
//deleteTracks("income", 1);
getTrackers();
statusTrack();

//rupiahFormatter(5000000);

// let delExpense = [...expenseList];

// delExpense.forEach(el => {
//   const {id} = el
//   console.log(id);
// })
