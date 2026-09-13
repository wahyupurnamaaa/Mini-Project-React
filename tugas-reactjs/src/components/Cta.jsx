function Cta() {
  return (
    <section id="cta" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-900 rounded-2xl px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Siap Memulai karirmu sekarang?
          </h2>

          {/* Button */}
          <a
            href="#"
            className="px-8 py-3 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
