// import DataPeserta from "./components/DataPeserta";
// import PostContainer from "./components/PostContainer";

// Tugas 6 - React : UI with Tailwind CSS
import Hero from "./components/Hero";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Tugas 4 - DataPeserta */}
      {/* <DataPeserta
        name="Rezky Putra"
        email="rezky@example.com"
        alamat="Makassar, Sulawesi Selatan"
      />
      <DataPeserta
        name="Andi Saputra"
        email="andi@example.com"
        alamat="Gowa, Sulawesi Selatan"
      />
      <DataPeserta
        name="Siti Aisyah"
        email="siti@example.com"
        alamat="Maros, Sulawesi Selatan"
      /> */}

      {/* Tugas 5 - PostContainer */}
      {/* <PostContainer /> */}

      {/* Tugas 6 - Landing Page dengan Tailwind CSS + DaisyUI */}
      <Hero />
      <About />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
