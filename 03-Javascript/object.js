console.log("Soal Object");

// Filter product dengan harga di bawah 300000
const products = [
  { name: "Laptop Asus Vivobook 14", price: 750000, stock: 12 },
  { name: "Mouse Logitech M235", price: 150000, stock: 40 },
  { name: "Keyboard Mechanical Royal Kludge", price: 450000, stock: 25 },
  { name: "Monitor Samsung 24 Inch", price: 950000, stock: 15 },
  { name: "Flashdisk Sandisk 32GB", price: 120000, stock: 60 },
  { name: "SSD WD Green 240GB", price: 420000, stock: 20 },
  { name: "Headset HyperX Cloud Stinger", price: 680000, stock: 18 },
  { name: "Webcam Logitech C270", price: 370000, stock: 22 },
  { name: "Bluetooth Speaker JBL Go 3", price: 500000, stock: 10 },
  { name: "Powerbank Anker 10.000mAh", price: 320000, stock: 35 },
  { name: "Smartwatch Xiaomi Mi Band 7", price: 450000, stock: 28 },
  { name: "Tripod Takara 228", price: 140000, stock: 33 },
  { name: "Charger Baseus 30W", price: 180000, stock: 40 },
  { name: "Earphone Sony MDR EX15AP", price: 130000, stock: 55 },
  { name: "Kipas Angin Portable USB", price: 110000, stock: 50 },
  { name: "Keyboard Wireless Logitech K380", price: 490000, stock: 14 },
  { name: "Router TP-Link Archer C54", price: 360000, stock: 17 },
  { name: "MicroSD Samsung EVO 64GB", price: 160000, stock: 45 },
  { name: "Harddisk External Seagate 1TB", price: 890000, stock: 19 },
  { name: "Lampu Meja LED Study Lamp", price: 125000, stock: 42 },
  { name: "Wireless Earbuds Xiaomi Redmi Buds 4", price: 380000, stock: 26 },
  { name: "Gamepad Rexus GX200", price: 210000, stock: 32 },
  { name: "Printer Canon PIXMA MG2570S", price: 820000, stock: 9 },
  { name: "Tas Laptop Lenovo 15 Inch", price: 180000, stock: 29 },
  { name: "HDMI Cable 2 Meter Vention", price: 105000, stock: 47 },
  { name: "CPU Cooler Deepcool Gammaxx 400", price: 350000, stock: 13 },
  { name: "Smart LED Bulb Xiaomi", price: 160000, stock: 38 },
  { name: "Action Camera Bpro 5 Alpha", price: 900000, stock: 7 },
  { name: "Wireless Charger Baseus", price: 250000, stock: 30 },
  { name: "Bluetooth Keyboard iPad Universal", price: 300000, stock: 21 }
];

const filteredProducts = products.filter((product) => product.price < 300000);

console.log(filteredProducts);
