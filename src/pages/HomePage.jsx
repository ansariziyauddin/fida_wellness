import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import FounderSpotlight from '../components/FounderSpotlight';
import RamizaLifestyle from '../components/RamizaLifestyle';
import FamilyDayHighlight from '../components/FamilyDayHighlight';
import CommunityStats from '../components/CommunityStats';
import StoriesCarousel from '../components/StoriesCarousel';
import GalleryGrid from '../components/GalleryGrid';
import MagicalCommunityBanner from '../components/MagicalCommunityBanner';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (#hero) */}
      <HeroSection />

      {/* 2. What We Do? Section (#what-we-do) */}
      <WhatWeDoSection />

      {/* 3. Coach Profile Section (#coach) */}
      <FounderSpotlight />

      {/* 4. Lifestyle Framework (#lifestyle) */}
      <RamizaLifestyle />

      {/* 5. Family Day Highlight */}
      <FamilyDayHighlight />

      {/* 6. Community Statistics */}
      <CommunityStats />

      {/* 7. Member Stories & Testimonials */}
      <StoriesCarousel />

      {/* 8. Visual Gallery Showcase (#gallery) */}
      <GalleryGrid />

      {/* 9. Parent Movement: Magical Community Showcase */}
      <MagicalCommunityBanner />

      {/* 10. Frequently Asked Questions (#faq) */}
      <FAQSection />

      {/* 11. Contact Us & Club Visit Section (#contact) */}
      <ContactSection />
    </div>
  );
}
