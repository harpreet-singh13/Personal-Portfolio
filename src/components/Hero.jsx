import React from "react";
import harpreet from "../images/harpreet.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-3/5 text-center md:text-left">
            <p className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-6 animate-fade-in">
              Full Stack Developer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-gradient">Harpreet Singh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in opacity-0 animation-delay-300">
              A passionate developer creating robust and user-friendly web
              applications with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 animate-fade-in opacity-0 animation-delay-600">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Tech stack icons */}
            <div className="mt-12 hidden md:block">
              <p className="text-gray-400 text-sm mb-4 animate-fade-in opacity-0 animation-delay-900">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-6 animate-fade-in opacity-0 animation-delay-900">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt="MongoDB"
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile image with animation */}
          <div className="md:w-2/5 animate-scale animation-delay-600">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
                <img
                  src={harpreet}
                  alt="Harpreet Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
