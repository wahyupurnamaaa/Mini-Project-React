function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Image */}
          <div className="flex-1">
            <img
              src="/images/about.jpg"
              alt="Tentang kami"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Tentang Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              website kami adalah platform kerja yang memudahkan kamu
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              menemukan lowongan, melamar, dan terhubung dengan perusahaan impian kamu. Kami menyediakan ribuan lowongan dari berbagai industri, dilengkapi fitur pencarian cerdas dan notifikasi real-time agar kamu tidak ketinggalan peluang.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
