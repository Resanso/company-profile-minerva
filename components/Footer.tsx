export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#151b29] pt-10 pb-5 text-white border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Deskripsi + Try Product */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/minerva-logo.png" alt="Minerva" className="w-40" />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-5 mt-10">
            Real-Time Digital Twin AI Optimization for
            <br />
            Sustainable Manufacturing
          </p>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white mt-10 px-4 py-2 rounded-md text-sm transition-colors">
              Request Demo
            </button>
          </a>
        </div>

        {/* Garis Vertikal (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center">
          <div className="border-l border-gray-600 h-full opacity-70"></div>
        </div>

        {/* Menu + Contact */}
        <div className="grid grid-cols-2 gap-4">
          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-4">Event Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="/#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#product" className="hover:text-blue-400 transition">
                  Product
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="hover:text-blue-400 transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                +62 822-1725-7007 (dhafin)
              </li>
              <li className="flex items-center gap-2">minerva@gmail.com</li>
              <li className="flex items-start gap-2">
                <span>
                  Bandung, Jawa Barat,
                  <br />
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-4">
        © Develop by MINERVA Team. 2025
      </div>
    </footer>
  );
}
