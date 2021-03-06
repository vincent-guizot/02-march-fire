var x = 10;

// if(x === 1){
//     console.log("Angka 1")
// }else if(x === 2){
//     console.log("Angka 2")
// }else {
//     console.log("Angka bukan 1 dan 2")
// }


// Jika nilai di bawah 100, maka tidak maximal
// Jika nilai di atas 100, maka maximal

// var nilai = 100
// if(nilai < 100){
//     console.log("Tidak maximal")
// }else if(nilai >= 100){
//     console.log("Maximal")
// }

// Buat aplikasi sederhana tentang ticket
/**
 * Jika status : Anak, harga ticket Rp. 10000
 * Jika status : Remaja, harga ticket Rp. 15000
 * 
 * Jika status : Dewasa, harga ticket Rp. 30000
 */
// Result : Status : Anak, Rp. 10000

// Algoritma
/**
 * 1. Buat variable status
 * 2. Buat variable ticket
 * 3. Cek status
 *  3.1. Jika Anak, maka masukkan 10000 ke dalam ticket
 * 3.2. Jika Remaja, maka masukkan 15000 ke dalam ticket
 * 3.1. Jika Dewasa, maka masukkan 30000 ke dalam ticket
 * 4. Tampilkan result
 */

 // Pseudocode
 /**
  * STORE status WITH ANY STRING
  * STORE ticket WITH ANY NUMBER
  * 
  * IF status EQUAL 'Anak'
  *     SET ticket WITH 10000
  * ELSE IF status EQUAL 'Remaja'
  *     SET ticket WITH 15000
  * ELSE IF status EQUAL 'Dewasa'
  *     SET ticket WITH 30000
  * END IF
  * 
  * DISPLAY 'Status : ' + status + ', Rp. ' + ticket
  */

  // Coding
  var status = 'Dewasa';
  var ticket;

  if(status === 'Anak'){
      ticket = 10000;
  }else if(status === 'Remaja'){
      ticket = 15000;
  }else if(status === 'Dewasa'){
      ticket = 30000;
  }

  console.log('Status : ' + status + ', Rp. ' + ticket)