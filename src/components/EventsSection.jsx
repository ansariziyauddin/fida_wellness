import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventsData, eventCategories } from '../data/events';
import { Calendar, Clock, MapPin, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function EventsSection({ limit }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredEvents = eventsData.filter((event) => {
    if (selectedCategory === "ALL") return true;
    return event.category === selectedCategory;
  });

  const displayEvents = limit ? filteredEvents.slice(0, limit) : filteredEvents;

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-500" />
            Upcoming Community Gatherings
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase">
            WHAT'S <span className="text-brand-600">HAPPENING NEXT?</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            From our regular club sessions to grand family day festivals and outdoor scenic walks, there's always something uplifting on the horizon.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 pb-4 sm:pb-0 overflow-x-auto no-scrollbar mb-12">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-dark-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-brand-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Event Image & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-dark-900/80 backdrop-blur-md text-brand-300 text-xs font-semibold border border-white/10">
                    {event.category}
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3.5 left-3.5 bg-brand-500 text-white px-3.5 py-1.5 rounded-xl font-display font-bold text-xs shadow-md">
                    {event.date}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-dark-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {event.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-200/60 space-y-2 text-xs text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      <span>{event.time} ({event.day})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-600" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-dark-900 hover:text-brand-600 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={siteConfig.whatsapp.getLink(`Hi Fida Wellness Zone! I'd like to RSVP / register for: "${event.title}" on ${event.date}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-brand-500/10 hover:bg-brand-500 text-brand-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>RSVP</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        {limit && (
          <div className="mt-14 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-md transition-all duration-200"
            >
              <span>View Full Events Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
