console.log("Soal Looping");

// Menampilkan bilangan ganjil sesuai batas parameter number
const loopingGanjil = (number) => {
  for (let i = 1; i <= number; i += 2) {
    console.log(i);
  }
};

console.log(loopingGanjil(13));
console.log(loopingGanjil(20));
