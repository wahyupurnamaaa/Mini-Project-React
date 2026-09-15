function Hero() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left - Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Temukan Pekerjaan
                <br />
                Impian kamu disini
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Cari ribuan lowongan kerja dari berbagai perusahaan terpercaya. Temukan peluang terbaik sesuai keahlianmu.
              </p>

              {/* Search Bar */}
              <div className="flex max-w-md mx-auto lg:mx-0">
                <input
                  type="text"
                  placeholder="Cari Pekerjaan anda"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 bg-white"
                />
                <button className="px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-r-lg hover:bg-green-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex-1">
              <img
                src="/images/hero.jpg"
                alt="Profesional bekerja di laptop"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
