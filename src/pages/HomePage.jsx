import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatIsRamiza from '../components/WhatIsRamiza';
import RamizaLifestyle from '../components/RamizaLifestyle';
import DailySessionsGrid from '../components/DailySessionsGrid';
import EventsSection from '../components/EventsSection';
import FamilyDayHighlight from '../components/FamilyDayHighlight';
import CommunityStats from '../components/CommunityStats';
import FounderSpotlight from '../components/FounderSpotlight';
import StoriesCarousel from '../components/StoriesCarousel';
import GalleryGrid from '../components/GalleryGrid';
import MagicalCommunityBanner from '../components/MagicalCommunityBanner';
import WellnessHabitFinder from '../components/WellnessHabitFinder';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. What is Ramiza Wellness Zone? */}
      <WhatIsRamiza />

      {/* 3. The Ramiza Lifestyle (01 Move, 02 Eat Well, 03 Learn, 04 Connect, 05 Celebrate) */}
      <RamizaLifestyle />

      {/* 4. Daily Sessions & Lectures */}
      <DailySessionsGrid limit={4} />

      {/* 5. Upcoming Events */}
      <EventsSection limit={3} />

      {/* 6. Family Day Spotlight */}
      <FamilyDayHighlight />

      {/* 7. Meet The Founder & Coach */}
      <FounderSpotlight />

      {/* 8. Community Statistics */}
      <CommunityStats />

      {/* 9. Member Stories */}
      <StoriesCarousel />

      {/* 10. Visual Gallery Showcase */}
      <GalleryGrid limit={6} />

      {/* 11. Interactive Habit & Session Finder */}
      <WellnessHabitFinder />

      {/* 12. Parent Movement: Magical Community Showcase */}
      <MagicalCommunityBanner />

      {/* 13. Final CTA (Ready to live healthier, together?) */}
      <FinalCTA />
    </div>
  );
}
