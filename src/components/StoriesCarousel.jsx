import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote, Heart, Sparkles } from 'lucide-react';

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Real Voices & Journeys</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase">
            MEMBER <span className="text-brand-600">STORIES.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            Hear how daily morning consistency, supportive friendships, and nutritional awareness have elevated the lives of our members.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl relative">
          <Quote className="w-16 h-16 text-brand-500/15 absolute top-6 right-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Member Avatar (Left / 4 Cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden ring-4 ring-brand-500/30 shadow-lg mb-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display font-bold text-lg text-dark-900">{current.name}</h4>
              <p className="text-xs text-neutral-500">{current.role}</p>
              <span className="mt-2 inline-block px-3 py-1 bg-brand-100 text-brand-800 text-[11px] font-semibold rounded-full">
                {current.duration}
              </span>
            </div>

            {/* Member Quote (Right / 8 Cols) */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-display font-medium text-dark-900 leading-relaxed italic">
                  “{current.quote}”
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-bold text-brand-700 shadow-sm">
                  <Heart className="w-4 h-4 text-brand-500 fill-brand-500" />
                  <span>Key Result: {current.stats}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === idx ? 'w-8 bg-brand-500' : 'w-2.5 bg-neutral-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-white hover:bg-brand-500 hover:text-white text-dark-900 border border-neutral-200 shadow-sm transition-all"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-white hover:bg-brand-500 hover:text-white text-dark-900 border border-neutral-200 shadow-sm transition-all"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
