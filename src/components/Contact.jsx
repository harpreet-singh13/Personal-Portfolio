import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const contactCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "01sharpreet@gmail.com",
    href: "mailto:01sharpreet@gmail.com",
    color: "#00A1E0",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/harpreet13",
    href: "https://www.linkedin.com/in/harpreet13/",
    color: "#00A1E0",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/harpreet-singh13",
    href: "https://github.com/harpreet-singh13/",
    color: "#8B5CF6",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l7.5-7.5 4.5 4.5 6-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 6h-4.5v4.5" />
      </svg>
    ),
    label: "Trailhead",
    value: "trailblazer/harpreet13",
    href: "https://www.salesforce.com/trailblazer/harpreet13",
    color: "#22D3EE",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Pune, Maharashtra, India",
    color: "#6366F1",
  },
];

const Contact = () => {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#111D30] border border-[#1E2D45] text-white placeholder-slate-600 rounded-lg focus:outline-none focus:border-[#00A1E0]/60 focus:ring-1 focus:ring-[#00A1E0]/30 transition-all duration-300 text-sm";

  return (
    <section ref={sectionRef} id="contact" className="py-14 md:py-20 bg-[#070B14]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10 md:mb-14 reveal-item">
            <p className="text-[#00A1E0] text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">Let's Connect</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Get In <span className="text-gradient-ai">Touch</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="section-line"></span>
            </div>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Interested in AI agent development, Salesforce Agentforce, or a full-stack project? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-5 md:gap-6 items-start">

            {/* Contact cards */}
            <div className="md:col-span-2 space-y-2 sm:space-y-3 reveal-item reveal-delay-1">
              {contactCards.map((card, i) => (
                <div key={i}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 card-dark rounded-xl group"
                    >
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${card.color}15`, color: card.color }}
                      >
                        {card.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-500 text-xs mb-0.5">{card.label}</p>
                        <p className="text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300 truncate">
                          {card.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bento-card rounded-xl">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${card.color}15`, color: card.color }}
                      >
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">{card.label}</p>
                        <p className="text-slate-300 text-xs sm:text-sm">{card.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3 bento-card rounded-2xl p-5 sm:p-6 md:p-8 reveal-item reveal-delay-2">
              <h3 className="text-white font-semibold mb-5 font-display">Send a Message</h3>

              {submitted && (
                <div className="mb-5 p-3 sm:p-4 bg-emerald-400/10 border border-emerald-400/25 rounded-xl flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-emerald-400 text-sm">Message sent! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-slate-500 mb-1.5">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-slate-500 mb-1.5">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs text-slate-500 mb-1.5">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass} placeholder="What's this about?" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-slate-500 mb-1.5">Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className={inputClass} placeholder="Tell me about your project or idea..." required></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#00A1E0] hover:bg-[#0090C8] text-white font-medium rounded-lg shadow-lg hover:shadow-[#00A1E0]/25 transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
