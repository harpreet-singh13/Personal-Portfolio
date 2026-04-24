import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const experiences = [
  {
    year: "Feb 2026 – Present",
    role: "Senior Software Engineer",
    company: "Bounteous",
    description: "Building intelligent AI agents on Salesforce Agentforce and developing full-stack enterprise applications using React and Node.js.",
    current: true,
  },
  {
    year: "Jan 2024 – Jan 2026",
    role: "Solution Developer",
    company: "Tata Technologies",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies for automotive clients.",
    current: false,
  },
  {
    year: "Jan 2023 – Jan 2024",
    role: "Graduate Trainee",
    company: "Tata Technologies",
    description: "Built and maintained client projects focusing on responsive design and backend optimization.",
    current: false,
  },
  {
    year: "Jan 2022 – Apr 2022",
    role: "Software Intern",
    company: "HighRadius",
    description: "Created interactive UI/UX experiences with modern JavaScript frameworks for fintech products.",
    current: false,
  },
];

const highlights = [
  { label: "Yrs Experience", value: "3+" },
  { label: "Certifications", value: "5" },
  { label: "Projects", value: "10+" },
];

const skills = [
  { label: "Salesforce Agentforce", color: "text-[#00A1E0] border-[#00A1E0]/25 bg-[#00A1E0]/8" },
  { label: "Einstein AI",           color: "text-[#00A1E0] border-[#00A1E0]/25 bg-[#00A1E0]/8" },
  { label: "React",                 color: "text-[#22D3EE] border-[#22D3EE]/25 bg-[#22D3EE]/8" },
  { label: "Node.js",               color: "text-emerald-400 border-emerald-400/25 bg-emerald-400/8" },
  { label: "JavaScript",            color: "text-yellow-400 border-yellow-400/25 bg-yellow-400/8" },
  { label: "Apex",                  color: "text-[#00A1E0] border-[#00A1E0]/25 bg-[#00A1E0]/8" },
  { label: "LWC",                   color: "text-[#6366F1] border-[#6366F1]/25 bg-[#6366F1]/8" },
  { label: "REST APIs",             color: "text-slate-300 border-slate-600 bg-slate-700/30" },
  { label: "MongoDB",               color: "text-emerald-400 border-emerald-400/25 bg-emerald-400/8" },
  { label: "Prompt Engineering",    color: "text-[#6366F1] border-[#6366F1]/25 bg-[#6366F1]/8" },
];

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="about" className="py-14 md:py-20 bg-[#070B14]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal-item">
          <p className="text-[#00A1E0] text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4">
            About <span className="text-gradient-ai">Me</span>
          </h2>
          <div className="flex justify-center">
            <span className="section-line"></span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-10 items-start">

          {/* Bio + stats */}
          <div className="md:col-span-3 space-y-4 reveal-item reveal-delay-1">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I'm an <span className="text-white font-medium">AI Generalist</span> and{" "}
              <span className="text-[#00A1E0] font-medium">Salesforce Agentforce Specialist</span> currently building
              intelligent enterprise solutions at <span className="text-white font-medium">Bounteous</span>. My work sits
              at the intersection of AI, the Salesforce platform, and modern web development.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              I specialise in designing and deploying autonomous AI agents using Salesforce Agentforce and Einstein AI,
              alongside crafting full-stack web applications with React and Node.js. I'm passionate about making AI
              practical — turning cutting-edge models into reliable, production-grade products.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Outside of work, I stay current through Trailhead, Anthropic's developer resources, and hands-on
              experimentation with emerging AI frameworks.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              {highlights.map((h) => (
                <div key={h.label} className="bento-card text-center py-3 sm:py-4">
                  <p className="text-xl sm:text-2xl font-bold text-gradient-ai font-display">{h.value}</p>
                  <p className="text-slate-500 text-[10px] sm:text-xs mt-1 leading-tight">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Skill tags */}
            <div className="pt-1">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-3 font-mono">Key Technologies</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((tag) => (
                  <span key={tag.label} className={`skill-pill ${tag.color}`}>{tag.label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-2 reveal-item reveal-delay-2">
            <div className="bento-card">
              <div className="flex items-center gap-2 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00A1E0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-white font-semibold font-display">Experience</h3>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-6 pb-4 border-l border-[#1E2D45] last:border-l-0 last:pb-0">
                    <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 ${
                      exp.current
                        ? "bg-[#00A1E0] border-[#00A1E0] shadow-[0_0_8px_rgba(0,161,224,0.6)]"
                        : "bg-[#1E2D45] border-[#243550]"
                    }`} />
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="text-xs text-[#00A1E0] font-mono">{exp.year}</span>
                      {exp.current && (
                        <span className="text-[10px] bg-[#00A1E0]/15 text-[#00A1E0] border border-[#00A1E0]/25 px-1.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                    <p className="text-slate-500 text-xs mb-1">{exp.company}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
