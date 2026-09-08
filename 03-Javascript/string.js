console.log("Soal 1");

let sentences = 'wow javascript is so awesome';
let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 17);
let fourthWords = sentences.substring(18, 20);
let fifthWords = sentences.substring(21);

let panjangKata1 = firstWords.length;
let panjangKata2 = secondWords.length;
let panjangKata3 = thirdWords.length;
let panjangKata4 = fourthWords.length;
let panjangKata5 = fifthWords.length;

console.log('Kata Pertama: ' + firstWords + " dan panjang " + panjangKata1 + " karakter");
console.log('Kata Kedua: ' + secondWords + " dan panjang " + panjangKata2 + " karakter");
console.log('Kata Ketiga: ' + thirdWords + " dan panjang " + panjangKata3 + " karakter");
console.log('Kata Keempat: ' + fourthWords + " dan panjang " + panjangKata4 + " karakter");
console.log('Kata Kelima: ' + fifthWords + " dan panjang " + panjangKata5 + " karakter");

console.log("Soal 2");

let kata1 = "keberuntugan";
let kata2 = "kerja keras";
let kata3 = "ketekunan";

let kalimat = `Masa depan tidak ditentukan oleh ${kata1}, tetapi oleh ${kata2} dan ${kata3}`;
console.log(kalimat);
