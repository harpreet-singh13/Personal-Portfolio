import React from "react";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import devlinkImg from "../images/devlink.png";
import youtubeUIImg from "../images/youtubeUI.png";
import netflixGPTImg from "../images/netflixGPT.png";

const projects = [
  {
    id: 1,
    title: "Devlink",
    description:
      "A developer networking platform with real-time chat, collaboration features, and secure user authentication.",
    image: devlinkImg,
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    tagColor: "text-[#22D3EE] border-[#22D3EE]/25 bg-[#22D3EE]/8",
    demoLink: "https://devlink.click",
    githubLink: "https://github.com/harpreet-singh13/devTinder-web",
  },
  {
    id: 2,
    title: "Netflix GPT",
    description:
      "AI-powered movie recommender using OpenAI for personalised suggestions, Firebase Auth, TMDB API, and Redux state management.",
    image: netflixGPTImg,
    tags: ["React", "Redux", "OpenAI", "Firebase"],
    tagColor: "text-[#6366F1] border-[#6366F1]/25 bg-[#6366F1]/8",
    demoLink: "#",
    githubLink: "https://github.com/harpreet-singh13/Netflix-GPT",
    aiLabel: "AI Integrated",
  },
  {
    id: 3,
    title: "Media Streaming Platform",
    description:
      "YouTube-like app with real-time video data via YouTube API, debounced search with caching, comments, and live chat.",
    image: youtubeUIImg,
    tags: ["React", "Redux", "YouTube API", "Caching"],
    tagColor: "text-[#00A1E0] border-[#00A1E0]/25 bg-[#00A1E0]/8",
    demoLink: "https://utubeui.netlify.app/",
    githubLink: "https://github.com/harpreet-singh13/Youtube-UI",
  },
];

const Project = () => {
  const sectionRef = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section ref={sectionRef} id="projects" className="py-14 md:py-20 bg-[#07090F]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal-item">
          <p className="text-[#22D3EE] text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Featured <span className="text-gradient-ai">Projects</span>
          </h2>
          <div className="flex justify-center mb-4">
            <span className="section-line"></span>
          </div>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            A selection of projects showcasing full-stack development, AI integration, and real-time systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/project/${project.id}`)}
              className={`card-dark rounded-2xl overflow-hidden group cursor-pointer reveal-item reveal-delay-${i + 1}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1626] via-[#0D1626]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {project.aiLabel && (
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] bg-[#6366F1]/80 text-white px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
                      {project.aiLabel}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      className="px-3 sm:px-4 py-2 bg-[#00A1E0] hover:bg-[#0090C8] text-white text-xs font-medium rounded-lg transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="px-3 sm:px-4 py-2 bg-[#0D1626]/90 border border-[#1E2D45] hover:border-white/30 text-white text-xs font-medium rounded-lg transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-white font-semibold mb-2 font-display text-sm sm:text-base group-hover:text-[#00A1E0] transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`skill-pill text-[10px] ${project.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal-item reveal-delay-4">
          <a
            href="https://github.com/harpreet-singh13/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-[#1E2D45] hover:border-[#00A1E0]/50 text-slate-400 hover:text-[#00A1E0] rounded-lg text-sm transition-all duration-300"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            More on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Project;
