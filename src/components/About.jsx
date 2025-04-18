import React from "react";

const About = () => {
  // Data for the experience timeline
  const experiences = [
    {
      year: "Jan 2024 - Present",
      role: "Software Developer",
      company: "Shaurya TS",
      description:
        "Designed and developed cross-platform mobile applications using React Native with a Django backend.",
    },
    {
      year: "Sept 2023 - Dec 2023",
      role: "Intern",
      company: "Shaurya TS",
      description:
        "Specialized in designing interactive, user-friendly React Native mobile UI/UX for seamless, high-performance cross-platform apps.",
    },
    {
      year: "Mar 2022 - Sep 2023",
      role: "Freelancer",
      company: "Self-Employed",
      description:
        "Provided end-to-end React Native development services for clients, focusing on building intuitive, high-performance cross-platform mobile apps.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start max-w-5xl mx-auto">
          {/* Career Timeline Section */}
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-5 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                    <span className="block text-sm text-blue-600 font-medium mb-1">
                      {exp.year}
                    </span>
                    <h4 className="font-bold text-gray-800">{exp.role}</h4>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="w-full md:w-3/5 lg:w-2/3 space-y-4 text-gray-700">
            <p className="text-lg">
              Experienced Full Stack Developer skilled in React, Django, with
              proven impact (20,000 app downloads, 90% positive reviews), eager
              to advance backend expertise. Proficient in JavaScript frameworks,
              RESTful APIs, and state management. Committed to clean code, CI/CD
              practices, and responsive UIs for enhanced user engagement. Eager
              to leverage extensive frontend knowledge and further develop
              backend skills in a challenging role
            </p>
            <p className="text-lg">
              Proficient in optimizing frontend performance through techniques
              such as code splitting, lazy loading, and reusable component
              libraries, which have significantly reduced development time and
              improved user experience. Experienced in implementing CI/CD
              practices and real-time error monitoring using tools like Sentry
              to accelerate bug identification and resolution.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing.
            </p>

            {/* Skills Tags */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React Native (iOS/Android)
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Android Studio
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Django
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Redux
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Firebase
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Docker
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Git
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
