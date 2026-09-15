import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="text-lg font-bold text-gray-800">PrebuiltUI</span>
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-800 hover:text-green-600 transition-colors">
            Home
          </Link>
          <a href="#about" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
            About
          </a>
          <a href="#cta" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Login Button */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            Login
          </Link>

          {/* Mobile hamburger */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-xl z-50 mt-2 w-48 p-2 shadow-lg border border-gray-100">
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#cta">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
