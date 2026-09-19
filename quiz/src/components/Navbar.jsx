import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-primary rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">
          <span className="text-2xl">🍳</span> RecipeApp
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a href="#home" className="font-medium hover:bg-primary-content/20 rounded-lg">Home</a></li>
          <li><a href="#recipes" className="font-medium hover:bg-primary-content/20 rounded-lg">Recipes</a></li>
          <li><a href="#about" className="font-medium hover:bg-primary-content/20 rounded-lg">About</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input type="text" placeholder="Search recipes..." className="input input-bordered input-sm w-36 md:w-auto bg-primary-content/10 border-primary-content/30 placeholder:text-primary-content/60 text-primary-content" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
