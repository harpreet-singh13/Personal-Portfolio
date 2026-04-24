import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const NotFound = lazy(() => import("./components/NotFound"));

const Spinner = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-2 border-[#1E2D45] rounded-full border-t-[#00A1E0] animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Hero />
              <About />
              <Project />
              <Skills />
              <Certifications />
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <ProjectDetails />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
