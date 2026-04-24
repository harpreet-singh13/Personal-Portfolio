import React, { useState, useEffect } from "react";
import harpreet from "../images/harpreet.jpg";

const roles = [
  "AI Generalist",
  "Salesforce Agentforce Specialist",
  "React & Node.js Developer",
  "Senior Software Engineer",
];

const techStack = [
  {
    name: "Salesforce",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00A1E0">
        <path d="M10.065 5.606a4.175 4.175 0 0 1 2.903-1.165c1.56 0 2.916.857 3.64 2.128a5.06 5.06 0 0 1 1.98-.402c2.818 0 5.1 2.3 5.1 5.138s-2.282 5.138-5.1 5.138a5.033 5.033 0 0 1-.978-.096 3.824 3.824 0 0 1-3.42 2.127 3.798 3.798 0 0 1-1.632-.367 4.52 4.52 0 0 1-4.204 2.892 4.538 4.538 0 0 1-4.33-3.21 4.094 4.094 0 0 1-.76.072C1.467 17.861 0 16.377 0 14.554c0-1.156.587-2.172 1.474-2.763a4.524 4.524 0 0 1-.12-1.04c0-2.494 2.006-4.515 4.481-4.515.82 0 1.588.228 2.244.625a4.16 4.16 0 0 1 1.986-.255z" />
      </svg>
    ),
  },
  {
    name: "Agentforce",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="#22D3EE" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .409.13.79.35 1.1M14.25 3.104c.251.023.501.05.75.082M12 21v-9.75m0 9.75l-4.5-4.5m9 0L12 21" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" loading="lazy" decoding="async" />,
  },
  {
    name: "Node.js",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4" loading="lazy" decoding="async" />,
  },
  {
    name: "JavaScript",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-4 h-4" loading="lazy" decoding="async" />,
  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[#070B14] text-white pt-16 sm:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-bg absolute inset-0 opacity-60"></div>
        <div className="absolute top-16 left-8 w-72 sm:w-96 h-72 sm:h-96 bg-[#00A1E0]/8 rounded-full blur-[100px] sm:blur-[120px] animate-aurora"></div>
        <div className="absolute bottom-16 right-8 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#6366F1]/8 rounded-full blur-[110px] sm:blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#22D3EE]/4 rounded-full blur-[130px] sm:blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">

          {/* Left content */}
          <div className="md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00A1E0]/10 border border-[#00A1E0]/25 text-[#00A1E0] text-xs sm:text-sm font-medium rounded-full mb-5 animate-fade-in">
              <span className="w-2 h-2 bg-[#00A1E0] rounded-full animate-pulse flex-shrink-0"></span>
              Senior Software Engineer @ Bounteous
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in font-display leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient-ai">Harpreet</span>
            </h1>

            {/* Typewriter */}
            <div className="text-base sm:text-lg md:text-xl text-slate-300 mb-5 animate-fade-in opacity-0 animation-delay-300 h-7 sm:h-8 flex items-center justify-center md:justify-start">
              <span className="text-[#22D3EE] font-mono truncate max-w-[280px] sm:max-w-none">{displayed}</span>
              <span className="ml-0.5 w-0.5 h-5 bg-[#22D3EE] inline-block animate-blink flex-shrink-0"></span>
            </div>

            <p className="text-slate-400 mb-7 max-w-md leading-relaxed text-sm animate-fade-in opacity-0 animation-delay-600 mx-auto md:mx-0">
              Building intelligent AI agents and enterprise solutions on Salesforce Agentforce — bridging AI innovation with real-world business impact. Also crafting modern web apps with React & Node.js.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 animate-fade-in opacity-0 animation-delay-600">
              <a
                href="#projects"
                className="px-6 sm:px-7 py-3 bg-[#00A1E0] hover:bg-[#0090C8] text-white font-medium rounded-lg shadow-lg hover:shadow-[#00A1E0]/30 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm"
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-7 py-3 border border-[#1E2D45] hover:border-[#6366F1]/60 hover:text-[#6366F1] text-slate-400 font-medium rounded-lg transition-all duration-300 w-full sm:w-auto text-center text-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-5 justify-center md:justify-start animate-fade-in opacity-0 animation-delay-900">
              <a href="https://www.linkedin.com/in/harpreet13/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#00A1E0] transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/harpreet-singh13/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors duration-300" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.salesforce.com/trailblazer/harpreet13" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#00A1E0] transition-colors duration-300" aria-label="Trailhead">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l7.5-7.5 4.5 4.5 6-7.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 6h-4.5v4.5" />
                </svg>
              </a>
            </div>

            {/* Tech stack — hidden on mobile to reduce clutter */}
            <div className="mt-8 hidden md:block animate-fade-in opacity-0 animation-delay-900">
              <p className="text-slate-600 text-xs uppercase tracking-widest mb-3 font-mono">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/4 border border-white/8 rounded-lg hover:border-[#00A1E0]/30 transition-colors duration-300">
                    {tech.icon}
                    <span className="text-xs text-slate-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="md:w-2/5 flex justify-center animate-scale animation-delay-600">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-[#00A1E0] via-[#6366F1] to-[#22D3EE] rounded-full blur-sm opacity-60 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full border border-white/10 shadow-2xl">
                <img
                  src={harpreet}
                  alt="Harpreet Singh"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-10 bg-[#0D1626] border border-[#1E2D45] rounded-xl px-3 py-2 shadow-xl whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></span>
                  <span className="text-xs text-slate-300 font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <a href="#about" className="flex flex-col items-center text-slate-600 hover:text-slate-400 transition-colors duration-300 animate-bounce" aria-label="Scroll down">
          <span className="text-xs mb-1.5 tracking-widest uppercase font-mono hidden sm:block">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
