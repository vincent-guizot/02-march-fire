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
// var status = 'dewasa';
// var ticket;

// //   if(status === 'Anak'){
// //       ticket = 10000;
// //   }else if(status === 'Remaja'){
// //       ticket = 15000;
// //   }else if(status === 'Dewasa'){
// //       ticket = 30000;
// //   }

// switch (status) {
//     case 'Anak':
//         ticket = 10000;
//         break;
//     case 'Remaja':
//         ticket = 15000;
//         break;
//     case 'Dewasa':
//         ticket = 30000;
//         break;
//     default:
//         ticket = 0;
//         break;
// }
// console.log('Status : ' + status + ', Rp. ' + ticket)

// If - else
// Switch case

// Task
/**
 * Jika access kosong, maka tampilkan "Input access"
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika level sama dengan 5 maka tampilkan "Public five"
 * 
 * Access private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private five"
 * 
 * Access protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "Protected five"
 * 
 * Jika access salah, tampilkan "Access is not defined"
 */

// Algoritma 
/**
 * 1. Buat variable access
 * 2. Buat variable level,
 * 3. Jika tidak ada access, tampilkan "Input Access"
 * 
 * 4. Cek access,
 *     4.1. Jika public, jika level di bawah 5 tampilkan "Public di bawah 5"
 *     4.2. Jika public, jika level di atas 5 tampilkan "Public di atas 5"
 *     4.3. Jika public, jika level sama dengan 5 tampilkan "Public five"
 *     4.4. Jika private, jika level di bawah 5 tampilkan "Private di bawah 5"
 *     4.5. Jika private, jika level di atas 5 tampilkan "Private di atas 5"
 *     4.6. Jika private, jika level sama dengan 5 tampilkan "Private five"
 *     4.7. Jika protected, jika level di bawah 5 tampilkan "Protected di bawah 5"
 *     4.8. Jika protected, jika level di atas 5 tampilkan "Protected di atas 5"
 *     4.9. Jika protected, jika level sama dengan 5 tampilkan "Protected five"
 *     4.10. Jika access salah, tampilkan "Access is not defined"
 */

// PSEUDOCODE
/**
 * STORE access WITH ANY STRING
 * STORE level WITH ANY NUMBER
 * 
 * IF access EQUAL undefined
 *    DISPLAY "Input Access"
 * ELSE 
 *    IF access EQUAL 'public'
 *        IF level LESS THAN 5
 *            DISPLAY 'Public di bawah 5'
 *        ELSE IF level MORE THAN 5
 *            DISPLAY 'Public di atas 5'
 *        ELSE IF level EQUAL 5
 *            DISPLAY 'Public five'
 *        END IF
 * 
 *    ELSE IF access EQUAL 'private'
 *        IF level LESS THAN 5
 *            DISPLAY 'Private di bawah 5'
 *        ELSE IF level MORE THAN 5
 *            DISPLAY 'Private di atas 5'
 *        ELSE IF level EQUAL 5
 *            DISPLAY 'Private five'
 *        END IF
 * 
 *    ELSE IF access EQUAL 'protected'
 *        IF level LESS THAN 5
 *            DISPLAY 'Protected di bawah 5'
 *        ELSE IF level MORE THAN 5
 *            DISPLAY 'Protected di atas 5'
 *        ELSE IF level EQUAL 5
 *            DISPLAY 'Protected five'
 *        END IF
 *    
 *    ELSE 
 *        DISPLAY 'Access is not defined'
 *    END IF
 * END IF
 *    
 */

// // Coding
// var access = "protected"
// var level = 5;

// if (access === '') {
//     console.log("Input access")
// } else {
//     switch (access) {
//         case 'public':
//             // console.log('public')
//             if(level < 5){
//                 console.log("Public di bawah 5")
//             }else if(level > 5){
//                 console.log("Public di atas 5")
//             }else if(level === 5){
//                 console.log("Public five")
//             }
//             break;
//         case 'private':
//             // console.log('private')
//             if(level < 5){
//                 console.log("Private di bawah 5")
//             }else if(level > 5){
//                 console.log("Private di atas 5")
//             }else if(level === 5){
//                 console.log("Private five")
//             }
//             break;
//         case 'protected':
//             // console.log('protected')
//             if(level < 5){
//                 console.log("Protected di bawah 5")
//             }else if(level > 5){
//                 console.log("Protected di atas 5")
//             }else if(level === 5){
//                 console.log("Protected five")
//             }
//             break;
//         default:
//             console.log("Access denied") 
//         break;
//     }
// }

// TASK
/**
 * Seorang HRD ingin menghire seorang karyawan.
 * Loker yang tersedia ada 3 jenis : Junior, Middle, Senior.
 * 
 * Syarat :
 * Junior : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 3.000.000
 * - memiliki pengalaman antara 2 sampai 5, maka gaji Rp. 4.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 5.000.000
 * 
 * Middle : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 5.500.000
 * - memiliki pengalaman antara 2 sampai 5, maka gaji Rp. 6.500.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 7.500.000
 * 
 * Senior : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 * - memiliki pengalaman antara 2 sampai 5, maka gaji Rp. 9.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 10.000.000
 * 
 * Buatlah algoritma, pseudocode dan codingnya.
 */

 /**
  * ALGORITMA
  * -----------
  * 1. siapkan variable position
  * 2. siapkan variable experience
  * 3. siapkan variable salary
  * 4. jika posisi junior :
  * - jika pengalaman kurang dari 2, maka salary 3000000
  * - jika pengalaman 2 sampai 5, maka salary 4000000
  * - jika pengalaman lebih dari 5, maka salary 5000000
  * 5. jika posisi middle :
  * - jika pengalaman kurang dari 2, maka salary 5500000
  * - jika pengalaman 2 sampai 5, maka salary 6500000
  * - jika pengalaman lebih dari 5, maka salary 7500000
  * 6. jika posisi senior :
  * - jika pengalaman kurang dari 2, maka salary 7500000
  * - jika pengalaman 2 sampai 5, maka salary 9000000
  * - jika pengalaman lebih dari 5, maka salary 10000000
  *  7. tampilkan hasil gajinya
  */

  /**
   * 
   * PSEUDOCODE
   * ------------
   * STORE position WITH ANY STRING
   * STORE experience WITH ANY NUMBER
   * STORE salary WITH ANY NUMBER
   * 
   * IF position EQUAL TO 'Junior' THEN
   *    IF experience LESS THAN 2 THEN
   *        SET salary WITH 3000000
   *    ELSE IF experience MORE THAN 2 AND LESS THAN 5 THEN
   *        SET salary WITH 4000000
   *    ELSE IF experience MORE THAN 5 THEN
   *        SET salary WITH 5000000
   *    ENDIF
   * ELSE IF position EQUAL TO 'Middle' THEN
   *    IF experience LESS THAN 2 THEN
   *        SET salary WITH 5500000
   *    ELSE IF experience MORE THAN 2 AND LESS THAN 5 THEN
   *        SET salary WITH 6500000
   *    ELSE IF experience MORE THAN 5 THEN
   *        SET salary WITH 7500000
   *    ENDIF
   * ELSE IF position EQUAL TO 'Senior' THEN
   *    IF experience LESS THAN 2 THEN
   *        SET salary WITH 7500000
   *    ELSE IF experience MORE THAN 2 AND LESS THAN 5 THEN
   *        SET salary WITH 9000000
   *    ELSE IF experience MORE THAN 5 THEN
   *        SET salary WITH 10000000
   *    ENDIF
   * ENDIF
   * 
   * DISPLAY salary
   */

  var position = 'Senior';
  var experience = 10;
  var salary;
 
  switch(position){
      case 'Junior':
         if(experience < 2){
             salary = 3000000
         }else if(experience >= 2 && experience <= 5){
             salary = 4000000
         }else if(experience >5){
             salary = 5000000
         }
      break;
      case 'Middle':
         if(experience < 2){
             salary = 5500000
         }else if(experience >= 2 && experience <= 5){
             salary = 6500000
         }else if(experience >5){
             salary = 7500000
         }
      break;
      case 'Senior':
         if(experience < 2){
             salary = 7500000
         }else if(experience >= 2 && experience <= 5){
             salary = 9000000
         }else if(experience >5){
             salary = 10000000
         }
      break;
  }
 
  console.log('Salary anda adalah Rp. ' + salary );
 