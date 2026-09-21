import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Single Page Main Experience
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafbf9]">
      {/* 1. Sticky Navbar with Scroll-Spy & In-Page Anchors */}
      <Navbar />
      
      {/* 2. All Sections Displayed in One Cohesive Single Page */}
      <main className="flex-1">
        <HomePage />
      </main>

      {/* 3. Footer & Quick In-Page Links */}
      <Footer />

      {/* 4. Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
