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

// Coding
var access = "protected"
var level = 5;

if (access === '') {
    console.log("Input access")
} else {
    switch (access) {
        case 'public':
            // console.log('public')
            if(level < 5){
                console.log("Public di bawah 5")
            }else if(level > 5){
                console.log("Public di atas 5")
            }else if(level === 5){
                console.log("Public five")
            }
            break;
        case 'private':
            // console.log('private')
            if(level < 5){
                console.log("Private di bawah 5")
            }else if(level > 5){
                console.log("Private di atas 5")
            }else if(level === 5){
                console.log("Private five")
            }
            break;
        case 'protected':
            // console.log('protected')
            if(level < 5){
                console.log("Protected di bawah 5")
            }else if(level > 5){
                console.log("Protected di atas 5")
            }else if(level === 5){
                console.log("Protected five")
            }
            break;
        default:
            console.log("Access denied") 
        break;
    }
}