import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Devlink",
      description:
        "A platform that helps people discover each other, collaborate, chat in real-time and user authentication.",
      image: "src/images/devlink.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      demoLink: "https://devlink.click",
      githubLink: "https://github.com/harpreet-singh13/devTinder-web",
    },
    {
      id: 2,
      title: "Netflix GPT",
      description: "AI Movie Recommender",
      image: "src/images/netflixGPT.png",
      tags: ["React.js", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "https://github.com/harpreet-singh13/Netflix-GPT",
    },
    {
      id: 3,
      title: "YouTube UI",
      description:
        "A beautiful weather application with location tracking, forecasts, and interactive maps.",
      image: "src/images/youtubeUI.png",
      tags: ["React", "Node.js", "WeatherAPI", "Leaflet"],
      demoLink: "https://utubeui.netlify.app/",
      githubLink: "https://github.com/harpreet-singh13/Youtube-UI",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents
          different challenges and solutions I've implemented.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a
                        href={project.demoLink}
                        className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="text-white bg-gray-800 hover:bg-gray-900 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
