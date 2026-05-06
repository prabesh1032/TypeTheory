import React, { useState } from "react";
import Navlinks from "./navlinks";
import { FaSearch } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-8 py-4 shadow-sm sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">TypeTheory</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-7">
          <Navlinks />
        </div>

        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <div className="flex items-center cursor-pointer text-gray-700 hover:text-black">
            <span className="mr-1 font-medium">Search</span>
            <FaSearch />
          </div>

          {/* Hamburger - mobile only */}
          <button
            className="md:hidden text-gray-700 hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-2 border-t pt-4">
          <Navlinks isMobile onNavigate={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}