import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-blue-100">
      <div className="flex justify-between items-center px-4 sm:px-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/images/logo/dexterzsol_logo.png"
            alt="Dexterz Sol Logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex font-bold items-center space-x-4">
          <Link to="/" className="pr-10 hover:text-blue-600">Home</Link>
          <Link to="/about" className="pr-10 hover:text-blue-600">About</Link>
          <Link to="/services" className="pr-10 hover:text-blue-600">Services</Link>
          <Link to="/projects" className="pr-10 hover:text-blue-600">Projects</Link>
          <Link to="/contact" className="pr-10 hover:text-blue-600">Contact</Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 pb-4 font-bold bg-slate-200">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">About</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Services</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Projects</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
