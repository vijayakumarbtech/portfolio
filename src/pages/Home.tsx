import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Certifications } from '../components/sections/Certifications';
import { Achievements } from '../components/sections/Achievements';
import { CodingProfiles } from '../components/sections/CodingProfiles';
import { ResumeSection } from '../components/sections/ResumeSection';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { seo } from '../data/portfolio';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait a tick for the page to render before scrolling to the section.
      const id = location.hash.replace('#', '');
      const timeout = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>{seo.defaultTitle}</title>
        <meta name="description" content={seo.defaultDescription} />
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <CodingProfiles />
      <ResumeSection />
      <Testimonials />
      <Contact />
    </>
  );
}
