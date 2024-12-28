import React, { Suspense } from 'react';
import BlurBackground from './Components/BlurBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

// Lazy 
const Project = React.lazy(() => import('./Components/Project'));
const About = React.lazy(() => import('./Components/About'));
const Experience = React.lazy(() => import('./Components/Experience'));
const Testimonial = React.lazy(() => import('./Components/Testimonial'));
const Contact = React.lazy(() => import('./Components/Contact'));

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main
        className="max-w-7xl mx-auto relative z-10"
      >
        <Hero />
      </main>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Project />
        <About />
        <Experience />
        <Testimonial />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
