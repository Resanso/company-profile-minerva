import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#0c1220]/90 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/minerva-logo.png" alt="Minerva Logo" className="w-20" />
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
        <div className="flex items-center gap-4 relative">
          {/* Language Button (Static representation based on index.html) */}
          <button id="langBtn" className="flex items-center gap-2">
            <img
              id="langFlag"
              src="https://flagcdn.com/w20/id.png"
              alt="IND"
              className="w-6 h-4"
            />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
