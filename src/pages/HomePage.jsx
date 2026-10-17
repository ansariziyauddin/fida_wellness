import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import GalleryGrid from '../components/GalleryGrid';
import FidaLifestyle from '../components/FidaLifestyle';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner (#hero) */}
      <HeroSection />

      {/* 2. About Us Section (#about) */}
      <AboutUsSection />

      {/* 3. Visual Gallery Showcase (#gallery) */}
      <GalleryGrid />

      {/* 4. Lifestyle Framework: Healthy is a Way of Life (#lifestyle) */}
      <FidaLifestyle />

      {/* 5. Get In Touch / Contact Us (#contact) */}
      <ContactSection />
    </div>
  );
}



