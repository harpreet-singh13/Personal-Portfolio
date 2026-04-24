import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const bentoCards = [
  {
    id: "salesforce",
    label: "Salesforce Platform",
    colSpan: "md:col-span-2",
    accentColor: "#00A1E0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00A1E0">
        <path d="M10.065 5.606a4.175 4.175 0 0 1 2.903-1.165c1.56 0 2.916.857 3.64 2.128a5.06 5.06 0 0 1 1.98-.402c2.818 0 5.1 2.3 5.1 5.138s-2.282 5.138-5.1 5.138a5.033 5.033 0 0 1-.978-.096 3.824 3.824 0 0 1-3.42 2.127 3.798 3.798 0 0 1-1.632-.367 4.52 4.52 0 0 1-4.204 2.892 4.538 4.538 0 0 1-4.33-3.21 4.094 4.094 0 0 1-.76.072C1.467 17.861 0 16.377 0 14.554c0-1.156.587-2.172 1.474-2.763a4.524 4.524 0 0 1-.12-1.04c0-2.494 2.006-4.515 4.481-4.515.82 0 1.588.228 2.244.625a4.16 4.16 0 0 1 1.986-.255z" />
      </svg>
    ),
    description: "Enterprise cloud platform for AI-powered business automation",
    skills: [
      { name: "Agentforce", highlight: true },
      { name: "Einstein AI", highlight: true },
      { name: "Apex" },
      { name: "LWC" },
      { name: "Salesforce Flow" },
      { name: "SOQL" },
      { name: "Platform Events" },
      { name: "Experience Cloud" },
      { name: "CRM Analytics" },
    ],
    pillStyle: "text-[#00A1E0] border-[#00A1E0]/30 bg-[#00A1E0]/10",
    highlightStyle: "text-white border-[#00A1E0]/60 bg-[#00A1E0]/20 font-semibold",
  },
  {
    id: "ai",
    label: "AI & LLM",
    colSpan: "md:col-span-1",
    accentColor: "#6366F1",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#6366F1" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    description: "Working with modern AI models and agent frameworks",
    skills: [
      { name: "Claude API", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "OpenAI API" },
      { name: "RAG" },
      { name: "LangChain" },
      { name: "AI Agents" },
    ],
    pillStyle: "text-[#6366F1] border-[#6366F1]/30 bg-[#6366F1]/10",
    highlightStyle: "text-white border-[#6366F1]/60 bg-[#6366F1]/20 font-semibold",
  },
  {
    id: "web",
    label: "Web Development",
    colSpan: "md:col-span-1",
    accentColor: "#22D3EE",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#22D3EE" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    description: "Modern frontend & backend web engineering",
    skills: [
      { name: "React", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Express.js" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
    ],
    pillStyle: "text-[#22D3EE] border-[#22D3EE]/30 bg-[#22D3EE]/10",
    highlightStyle: "text-white border-[#22D3EE]/60 bg-[#22D3EE]/20 font-semibold",
  },
  {
    id: "data",
    label: "Data & DevOps",
    colSpan: "md:col-span-2",
    accentColor: "#34D399",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="#34D399" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description: "Databases, cloud infrastructure, and delivery pipelines",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "Git" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "GraphQL" },
      { name: "Jest" },
    ],
    pillStyle: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    highlightStyle: "text-white border-emerald-400/60 bg-emerald-400/20 font-semibold",
  },
];

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="skills" className="py-14 md:py-20 bg-[#070B14]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal-item">
          <p className="text-[#00A1E0] text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">What I Work With</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4">
            AI Stack & <span className="text-gradient-ai">Skills</span>
          </h2>
          <div className="flex justify-center mb-4">
            <span className="section-line"></span>
          </div>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            A curated stack spanning the Salesforce platform, AI/LLM tooling, and modern web development.
          </p>
        </div>

        {/* Bento grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {bentoCards.map((card, i) => (
            <div
              key={card.id}
              className={`bento-card group ${card.colSpan} reveal-item reveal-delay-${i + 1}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${card.accentColor}15`, border: `1px solid ${card.accentColor}25` }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm font-display">{card.label}</h3>
                  <p className="text-slate-600 text-xs mt-0.5 leading-tight">{card.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {card.skills.map((skill) => (
                  <span key={skill.name} className={`skill-pill ${skill.highlight ? card.highlightStyle : card.pillStyle}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
