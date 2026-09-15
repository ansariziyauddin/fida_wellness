import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Camera } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative py-20 sm:py-28 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80"
            alt="Gallery Wall"
            className="w-full h-full object-cover opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Camera className="w-3.5 h-3.5" />
            <span>Community Moments</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase max-w-4xl mx-auto">
            PHOTO <span className="text-brand-400">GALLERY</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Real photos from our morning sessions, Family Days, riverfront walks, and nutrition workshops in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Full Gallery Grid with Lightbox */}
      <GalleryGrid />

      {/* Pre-Footer Action */}
      <FinalCTA />
    </div>
  );
}
