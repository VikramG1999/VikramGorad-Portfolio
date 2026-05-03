import React, { Suspense, lazy } from 'react';
import Navbar from "./Navbar";

// Lazy load the sections
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </>
  );
}