import React from 'react';
import StoriesCarousel from '../components/StoriesCarousel';
import CommunityStats from '../components/CommunityStats';
import FinalCTA from '../components/FinalCTA';
import { testimonialsData } from '../data/testimonials';
import { Sparkles, Heart, Quote, Star, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function StoriesPage() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative py-20 sm:py-28 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=2000&q=80"
            alt="Member Stories"
            className="w-full h-full object-cover opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Heart className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
            <span>Transforming Lives</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase max-w-4xl mx-auto">
            MEMBER <span className="text-brand-400">STORIES & EXPERIENCES</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Discover how small daily choices and a supportive community created lifelong wellness for our members.
          </p>
        </div>
      </section>

      {/* Featured Interactive Carousel */}
      <StoriesCarousel />

      {/* Complete Grid of Stories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-900 uppercase">
              JOURNEYS OF <span className="text-brand-600">CONSISTENCY</span>
            </h2>
            <p className="mt-2 text-neutral-600 text-sm">
              Real testimonials from daily morning attendees and family day participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-brand-500/40"
                    />
                    <div>
                      <h4 className="font-display font-bold text-lg text-dark-900">{item.name}</h4>
                      <p className="text-xs text-neutral-500">{item.role}</p>
                      <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full inline-block mt-1">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-700 text-base italic leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-brand-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  <span>Transformation: {item.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <CommunityStats />

      {/* Pre-Footer Action */}
      <FinalCTA />
    </div>
  );
}
