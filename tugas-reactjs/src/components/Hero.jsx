function Hero() {
  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-lg font-bold text-gray-800">PrebuiltUI</span>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              About
            </a>
            <a href="#cta" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              Login
            </a>

            {/* Mobile hamburger */}
            <div className="dropdown dropdown-end md:hidden">
              <div tabIndex={0} role="button" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-white rounded-xl z-50 mt-2 w-48 p-2 shadow-lg border border-gray-100">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#cta">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

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
