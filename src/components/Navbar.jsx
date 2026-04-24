import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "projects", "skills", "certifications", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
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
    { href: "#skills", label: "AI Stack" },
    { href: "#certifications", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#070B14]/90 backdrop-blur-md border-b border-[#1E2D45]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center relative">
          <Link to="/" className="text-xl md:text-2xl font-bold relative z-10 group font-display">
            <span className="text-gradient-ai">HS</span>
            <span className="text-slate-400 font-light text-sm ml-2 hidden sm:inline">/ AI Generalist</span>
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 relative group ${
                    activeSection === link.href.substring(1)
                      ? "text-white font-medium"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#00A1E0] to-[#6366F1] rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a
                href="https://drive.google.com/file/d/1i_5ffyt6-YdxcHnhtrBY7cLFkkxSbjre/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#00A1E0] hover:bg-[#0090C8] text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-[#00A1E0]/30"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden text-slate-300 z-50 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

          {/* Mobile menu */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-[#070B14]/98 backdrop-blur-md border-b border-[#1E2D45] transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
            }`}
          >
            <ul className="flex flex-col space-y-1 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2.5 px-3 rounded-lg text-sm transition-colors duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "text-[#00A1E0] font-medium bg-[#00A1E0]/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1i_5ffyt6-YdxcHnhtrBY7cLFkkxSbjre/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-5 bg-[#00A1E0] hover:bg-[#0090C8] text-white rounded-lg text-sm font-medium transition-all duration-300"
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
