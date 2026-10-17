import React from 'react';
import { dailySessionTopics } from '../data/sessions';
import { Sparkles, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DailySessionsGrid({ limit }) {
  const displaySessions = limit ? dailySessionTopics.slice(0, limit) : dailySessionTopics;

  return (
    <section className="py-20 sm:py-28 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-500 inline-block" />
              Daily Sessions & Health Lectures
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight uppercase">
              SOMETHING GOOD <br />
              <span className="text-brand-600">HAPPENS EVERY DAY.</span>
            </h2>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg">
              Fida Wellness Zone conducts regular interactive sessions and educational lectures focused on health, balanced eating, daily movement, and uplifting community awareness.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <div className="bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5 text-brand-600" />
                <span>Club Hours</span>
              </div>
              <p className="text-dark-900 font-bold text-sm">7:00 AM – 7:00 PM (Monday to Sunday)</p>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displaySessions.map((session) => (
            <div
              key={session.id}
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/70 hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-dark-900/80 backdrop-blur-md text-brand-300 font-semibold text-xs border border-white/10">
                  {session.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-dark-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {session.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {session.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-3">
                    {session.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-600">Daily Topic Focus</span>
                  <Link
                    to="/wellness"
                    className="p-2 rounded-full bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors"
                    aria-label={`Learn more about ${session.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button if limited */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/wellness"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-dark-900 border border-neutral-300 font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm transition-all"
            >
              <span>Explore All Session Modules & Routine</span>
              <ArrowRight className="w-4 h-4 text-brand-600" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
