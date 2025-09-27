import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../Sections/HomeSection';
import NewsSection from '../Sections/NewsSection';
import ResourceSection from '../Sections/ResourceSection';
import AboutSection from '../Sections/AboutSection';
import QOWSection from '../Sections/QOWSection';
import ContactSection from '../Sections/ContactSection';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <HomeSection />
      <NewsSection />
      <ResourceSection />
      <AboutSection />
      <QOWSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default MainLayout;