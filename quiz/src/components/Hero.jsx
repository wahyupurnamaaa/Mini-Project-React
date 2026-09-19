import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="hero min-h-[70vh] relative overflow-hidden" style={{
      backgroundImage: 'url(https://cdn.dummyjson.com/recipe-images/1.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="hero-overlay bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <div className="mb-6 animate-bounce">
            <span className="text-6xl">🍽️</span>
          </div>
          <h1 className="mb-5 text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Discover <span className="text-primary">Delicious</span> Recipes
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            Explore a world of flavors with our curated collection of recipes from around the globe. 
            From classic Italian to exotic Asian cuisine — find your next favorite dish!
          </p>
          <a href="#recipes" className="btn btn-primary btn-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            Explore Recipes
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
