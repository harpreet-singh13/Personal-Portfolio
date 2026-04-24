import React from "react";
import { useParams, Link } from "react-router-dom";
import devlinkImg from "../images/devlink.png";
import youtubeUIImg from "../images/youtubeUI.png";
import shauryaImg from "../images/shaurya.jpeg";
import shaurya_feat1 from "../images/shaurya_feat1.jpeg";
import shaurya_feat2 from "../images/shaurya_feat2.jpeg";
import shaurya_feat5 from "../images/shaurya_feat5.jpeg";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "Devlink",
      description:
        "A platform that helps people discover each other, collaborate, chat in real-time and user authentication.",
      image: devlinkImg,
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      demoLink: "https://devlink.click",
      githubLink: "https://github.com/harpreet-singh13/devTinder-web",
      overview:
        "Devlink is a professional networking platform designed specifically for developers to connect, collaborate, and communicate in real-time. The platform features robust user authentication, profile management, and a real-time chat system powered by Socket.io.",
      features: [
        {
          title: "Real-time Collaboration",
          items: [
            "Instant messaging with read receipts and typing indicators",
            "Code snippet sharing with syntax highlighting",
            "Video call integration for technical discussions",
          ],
        },
        {
          title: "User Discovery",
          items: [
            "Advanced search filters by skills, location, and interests",
            "Algorithmic matching based on project compatibility",
            "Developer profile verification system",
          ],
        },
        {
          title: "Technical Implementation",
          items: [
            "JWT-based authentication with refresh tokens",
            "MongoDB for flexible data modeling of user profiles",
            "React frontend with responsive design",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Shaurya",
      description:
        "Shaurya: Learn & Earn, Exam App—India's first educational platform that combines learning 📖, earning 💸, and exam success! Designed for students preparing for competitive exams, Shaurya empowers you to excel while offering real rewards for your hard work.",
      image: shauryaImg,
      tags: [
        "React Native",
        "Math JS",
        "Stylesheet",
        "Firebase",
        "Animated UI",
      ],
      demoLink:
        "https://play.google.com/store/apps/details?id=com.shauryaTS&pcampaignid=",
      overview:
        "Shaurya: Learn & Earn, Exam App—India's first educational platform that combines learning 📖, earning 💸, and exam success! Designed for students preparing for competitive exams, Shaurya empowers you to excel while offering real rewards for your hard work.",
      features: [
        {
          title: "Real Time Monitoring",
          items: [
            "Real-time monitoring detects unusual student behaviors during the exam",
            "Tab switching detection flags when students navigate away from the exam window",
            "Pattern recognition algorithms identify suspicious answer patterns",
            "Time anomaly detection flags unusually quick responses to difficult questions",
          ],
          image: shaurya_feat1,
        },
        {
          title: "Question Navigation",
          items: [
            "Mark for review functionality allows students to flag difficult questions for later review",
            "Question navigator panel displays all questions with their status (answered, unanswered, marked)",
            "Direct navigation enables jumping to any question by number",
            "Progress tracking shows completion percentage throughout the exam",
            "Section navigation for exams with multiple parts or subjects",
          ],
          image: shaurya_feat2,
        },

        {
          title: "Time Analytics",
          items: [
            "Per-question timing tracks how long a student spends on each question",
            "Time-based analytics provide insights into student performance patterns",
            "Time allocation suggestions help students manage remaining exam time",
            "Performance metrics compare time spent versus accuracy rates",
            "Historical time data allows students to review their time management in previous exams",
          ],
          image: shaurya_feat5,
        },
      ],
    },
    {
      id: 3,
      title: "Media Streaming Platform (YouTube-like Application)",
      description:
        "Integrated YouTube API for real-time video data with debounced search and caching for performance, comments and a live chat feature.",
      image: youtubeUIImg,
      tags: ["React", "Redux", "API", "Caching"],
      demoLink: "https://utubeui.netlify.app/",
      githubLink: "https://github.com/harpreet-singh13/Youtube-UI",
      overview:
        "This YouTube-like application provides a seamless video streaming experience with all the core features of YouTube, including search, recommendations, comments, and live chat functionality.",
      features: [
        {
          title: "Video Streaming",
          items: [
            "Adaptive video quality based on network conditions",
            "Custom video player with playback speed control",
            "Persistent watch history and progress tracking",
          ],
        },
        {
          title: "Search & Discovery",
          items: [
            "Debounced search with instant results",
            "Personalized recommendations based on watch history",
            "Trending videos section updated in real-time",
          ],
        },
        {
          title: "Community Features",
          items: [
            "Real-time comments with nested replies",
            "Live chat during premieres with moderation tools",
            "Like/dislike system with animated feedback",
          ],
        },
      ],
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center px-4">
        <div className="max-w-md bento-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Project Not Found</h2>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#00A1E0] hover:bg-[#0090C8] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B14] pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="sticky top-16 z-10 bg-[#070B14]/90 backdrop-blur-md py-2 mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-slate-400 hover:text-[#00A1E0] transition-colors duration-200 group text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="bento-card rounded-2xl overflow-hidden">
          {/* Hero */}
          <div className="flex flex-col items-center p-5 sm:p-6 bg-[#111D30] border-b border-[#1E2D45]">
            <div className="w-full max-w-md mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain rounded-xl"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">{project.title}</h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 md:p-8">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-7">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1.5 bg-[#00A1E0]/10 text-[#00A1E0] border border-[#00A1E0]/25 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href={project.demoLink}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#00A1E0] hover:bg-[#0090C8] text-white text-sm font-medium rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Live Demo
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1E2D45] hover:border-[#00A1E0]/40 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 pb-2 border-b border-[#1E2D45] font-display">
                Project Overview
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">{project.overview}</p>
            </div>

            {/* Features */}
            <div className="space-y-5">
              {project.features.map((feature, index) => (
                <div key={index} className="bg-[#111D30] border border-[#1E2D45] rounded-xl p-5">
                  <div className="flex flex-col md:flex-row gap-5">
                    {feature.image && (
                      <div className="md:w-1/3">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto object-contain rounded-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                    <div className={feature.image ? "md:w-2/3" : "w-full"}>
                      <h3 className="text-base font-semibold text-white mb-3 flex items-center font-display">
                        <span className="w-2.5 h-2.5 bg-[#00A1E0] rounded-full mr-2.5 flex-shrink-0"></span>
                        {feature.title}
                      </h3>
                      <ul className="space-y-2">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-slate-400 text-sm">
                            <svg className="w-4 h-4 text-[#00A1E0] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
