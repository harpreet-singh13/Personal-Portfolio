import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const certs = [
  {
    name: "Salesforce Administrator",
    issuer: "Salesforce",
    category: "Platform",
    color: "#00A1E0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#00A1E0">
        <path d="M10.065 5.606a4.175 4.175 0 0 1 2.903-1.165c1.56 0 2.916.857 3.64 2.128a5.06 5.06 0 0 1 1.98-.402c2.818 0 5.1 2.3 5.1 5.138s-2.282 5.138-5.1 5.138a5.033 5.033 0 0 1-.978-.096 3.824 3.824 0 0 1-3.42 2.127 3.798 3.798 0 0 1-1.632-.367 4.52 4.52 0 0 1-4.204 2.892 4.538 4.538 0 0 1-4.33-3.21 4.094 4.094 0 0 1-.76.072C1.467 17.861 0 16.377 0 14.554c0-1.156.587-2.172 1.474-2.763a4.524 4.524 0 0 1-.12-1.04c0-2.494 2.006-4.515 4.481-4.515.82 0 1.588.228 2.244.625a4.16 4.16 0 0 1 1.986-.255z" />
      </svg>
    ),
    description: "Core Salesforce platform administration, configuration, and data management.",
    href: "https://www.salesforce.com/trailblazer/harpreet13",
  },
  {
    name: "Platform Developer I",
    issuer: "Salesforce",
    category: "Development",
    color: "#00A1E0",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#00A1E0" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    description: "Salesforce application development with Apex, LWC, and platform APIs.",
    href: "https://www.salesforce.com/trailblazer/harpreet13",
  },
  {
    name: "Agentforce Specialist",
    issuer: "Salesforce",
    category: "AI · Agents",
    color: "#22D3EE",
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#22D3EE" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    description: "Designing and deploying autonomous AI agents on the Salesforce Agentforce platform.",
    href: "https://www.salesforce.com/trailblazer/harpreet13",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    category: "AI · Dev Tools",
    color: "#8B5CF6",
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#8B5CF6" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    description: "AI-assisted software engineering with Claude Code CLI and agentic workflows.",
    href: "https://www.salesforce.com/trailblazer/harpreet13",
  },
  {
    name: "Intro to Agent Skills",
    issuer: "Anthropic",
    category: "AI · Agents",
    color: "#6366F1",
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#6366F1" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description: "Fundamentals of building, composing, and deploying skills for AI agents.",
    href: "https://www.salesforce.com/trailblazer/harpreet13",
  },
];

const Certifications = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="certifications" className="py-14 md:py-20 bg-[#07090F]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal-item">
          <p className="text-[#6366F1] text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">Verified Credentials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Certifi<span className="text-gradient-ai">cations</span>
          </h2>
          <div className="flex justify-center mb-4">
            <span className="section-line"></span>
          </div>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Credentials from Salesforce and Anthropic validating expertise in AI agents, Agentforce, and enterprise development.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block card-dark rounded-2xl p-4 sm:p-5 group reveal-item reveal-delay-${i + 1}`}
              style={{ textDecoration: "none" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                >
                  {cert.icon}
                </div>
                {cert.featured && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium border"
                    style={{ color: cert.color, borderColor: `${cert.color}40`, backgroundColor: `${cert.color}12` }}
                  >
                    AI Cert
                  </span>
                )}
              </div>

              <h3 className="text-white font-semibold text-sm font-display mb-1 group-hover:text-[#00A1E0] transition-colors duration-300 leading-tight">
                {cert.name}
              </h3>
              <p className="text-xs font-mono mb-2" style={{ color: cert.color }}>
                {cert.issuer} · {cert.category}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">{cert.description}</p>

              <div className="mt-3 flex items-center gap-1 text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-300">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>View on Trailhead</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 reveal-item reveal-delay-5">
          <a
            href="https://www.salesforce.com/trailblazer/harpreet13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-[#1E2D45] hover:border-[#00A1E0]/50 text-slate-400 hover:text-[#00A1E0] rounded-lg text-sm transition-all duration-300"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.5l7.5-7.5 4.5 4.5 6-7.5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 6h-4.5v4.5" />
            </svg>
            View Full Trailhead Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
