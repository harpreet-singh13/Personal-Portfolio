import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "React Native", proficiency: 90 },
      { name: "React JS", proficiency: 88 },
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "Redux", proficiency: 82 },
    ],
    backend: [
      { name: "Python", proficiency: 84 },
      { name: "Django", proficiency: 86 },
      { name: "MongoDB", proficiency: 83 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "RESTful APIs", proficiency: 87 },
      { name: "GraphQL", proficiency: 75 },
    ],
    devops: [
      { name: "Google Play Console", proficiency: 81 },
      { name: "Firebase", proficiency: 79 },
      { name: "CI/CD", proficiency: 79 },
      { name: "Git", proficiency: 88 },
      { name: "Docker", proficiency: 77 },
      { name: "Android Studio", proficiency: 75 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I work with a variety of technologies across the full stack
          development spectrum.
        </p>

        {/* Tabbed Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm bg-white p-1">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === "frontend"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === "backend"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("devops")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === "devops"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              DevOps & Tools
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeTab].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </h4>
                  {/* <span className="text-blue-600 font-semibold">
                    {skill.proficiency}%
                  </span> */}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-800">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Responsive Design
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              UI/UX Fundamentals
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Performance Optimization
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              SEO Basics
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Agile Methodology
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Problem Solving
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Team Collaboration
            </span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              Project Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
