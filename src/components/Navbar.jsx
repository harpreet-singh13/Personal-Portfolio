import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topVisible = rect.top <= 100;
          const bottomVisible = rect.bottom > 100;

          if (topVisible && bottomVisible) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "py-5 bg-gray-900/95" // Changed from transparent to maintain visibility
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center relative">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold relative z-10 group"
          >
            <span className="inline-block transform-gpu transition-transform duration-300 group-hover:scale-110 text-blue-400">
              Dev
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-indigo-400">
                Portfolio
              </span>
            </span>
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                    activeSection === link.href.substring(1)
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded"></span>
                  )}
                  <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </li>
            ))}

            <li className="ml-4">
              <a
                href="https://drive.google.com/file/d/1viFEmHbKtk7CLreNTS2yY8p1r4MYJUUT/view"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-sm font-medium"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
            }`}
          >
            <ul className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2 transition-colors duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "text-blue-400 font-medium"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1viFEmHbKtk7CLreNTS2yY8p1r4MYJUUT/view"
                  className="block w-full text-center py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-sm font-medium mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
