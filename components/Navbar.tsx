"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#0c1220]/90 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo/MINERVA logo.png" alt="Minerva Logo" className="w-22" />
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a
            href="/#home"
            className="nav-link hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a
            href="/#product"
            className="nav-link hover:text-blue-400 transition-colors"
          >
            Product
          </a>
          <a
            href="/#portfolio"
            className="nav-link hover:text-blue-400 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="/#about"
            className="nav-link hover:text-blue-400 transition-colors"
          >
            About Us
          </a>
        </div>

        {/* Language + Hamburger */}
        <div className="flex items-center gap-4 relative z-[60]">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-[#0c1220] z-[55] flex flex-col items-center justify-center space-y-8 md:hidden text-white overflow-hidden">
           <a
            href="/#home"
            className="text-2xl font-medium hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/#product"
            className="text-2xl font-medium hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Product
          </a>
          <a
            href="/#portfolio"
            className="text-2xl font-medium hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="/#about"
            className="text-2xl font-medium hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
        </div>
      )}
    </nav>
  );
}
