console.log("Soal 1");

// Array Multidimensional
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

const dataHandling = (inputArray) => {
  inputArray.forEach((data) => {
    console.log("Nomor ID: " + data[0]);
    console.log("Nama Lengkap: " + data[1]);
    console.log("TTL: " + data[2] + " " + data[3]);
    console.log("Hobi: " + data[4]);
  });
};

console.log(dataHandling(input));

console.log("Soal 2");

// Kombinasikan dua array menggunakan array spreading ES6
const people1 = ["Will", "Chris", "Sam", "Holly"];
const people2 = ["Gill", "Brian", "Noel", "Maggie"];

const combine = [...people1, ...people2];

console.log(combine);
