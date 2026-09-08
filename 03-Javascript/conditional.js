console.log("Soal 1");

// if, else if, else
const predikatNilai = (nilai) => {
  if (nilai >= 80) {
    return "A (Sangat Baik)";
  } else if (nilai >= 70) {
    return "B (Baik)";
  } else if (nilai >= 60) {
    return "C (Cukup)";
  } else if (nilai >= 50) {
    return "D (Kurang)";
  } else {
    return "E (Error)";
  }
};

console.log(predikatNilai(94));
console.log(predikatNilai(77));
console.log(predikatNilai(63));
console.log(predikatNilai(54));
console.log(predikatNilai(30));

console.log("Soal 2");

// Switch Case
const trafficLight = (string) => {
  switch (string) {
    case "red":
      return "berhenti";
    case "yellow":
      return "hati-hati";
    case "green":
      return "berjalan";
    default:
      return "warna tidak dikenal";
  }
};

console.log(trafficLight("red"));
console.log(trafficLight("yellow"));
console.log(trafficLight("green"));

console.log("Soal 3");

// Conditional ternary operator
let angka = 2;
angka === 2 ? console.log("angka nya 2") : console.log("bukan angka 2");
