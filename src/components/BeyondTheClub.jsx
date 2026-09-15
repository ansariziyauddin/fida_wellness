import React from 'react';
import { Sparkles, MapPin, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const venues = [
  {
    title: "Grand Banquet Halls",
    desc: "Keynote nutrition seminars & diet milestone awards",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Outdoor Nutrition Brunches",
    desc: "Wholesome fresh food sampling & hydration bars in scenic settings",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Interactive Cooking Workshops",
    desc: "Hands-on healthy recipe swaps and family meal planning demos",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Community Outreach Circles",
    desc: "Bringing nutrition awareness and routine coaching to neighborhoods",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BeyondTheClub() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <Compass className="w-3.5 h-3.5 text-brand-600" />
            <span>Beyond The Club</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase">
            NUTRITION DOESN'T STAY <br />
            <span className="text-brand-600">INSIDE FOUR WALLS.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg font-medium">
            From our club to the wider family community.
          </p>
        </div>

        {/* 4 Visual Cards Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden h-80 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-brand-400 font-bold text-xs tracking-wider uppercase mb-1">
                  Community Action
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {venue.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {venue.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Short footer badge */}
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 group"
          >
            <span>View our community food & event memories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
