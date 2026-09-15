import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FamilyDayHighlight() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-brand-950 via-dark-900 to-dark-950 text-white relative overflow-hidden">
      {/* Visual background ambient pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content (Left / 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-5 border border-brand-500/30">
              <Heart className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
              <span>Community Spotlight</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase">
              FAMILY DAY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-emerald-300 to-teal-300">
                HEALTH • FUN • TOGETHERNESS
              </span>
            </h2>

            <p className="mt-6 text-neutral-300 text-lg sm:text-xl font-medium leading-relaxed">
              “Because wellness is better when the whole family joins in.”
            </p>

            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              At Ramiza Wellness Zone, health is never a solo pursuit. Our signature Family Days bring children, parents, and grandparents together with joyful fitness games, fun nutrition demos, and lasting memories.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-brand-500/20 transition-all duration-200"
              >
                <span>Explore Family Days</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.whatsapp.getLink("Hi! I'd like to bring my family to the next Ramiza Wellness Family Day.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition-all duration-200"
              >
                <span>Join Next Family Day</span>
              </a>
            </div>
          </div>

          {/* Photo Collage Showcase (Right / 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-72 border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                    alt="Family Wellness Joy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-neutral-800/80 backdrop-blur-md p-6 rounded-3xl border border-neutral-700/60 shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">All Generations</h4>
                      <p className="text-xs text-neutral-400">Kids, parents & grandparents</p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-300 mt-2">
                    Interactive activities designed so everyone participates comfortably at their own pace.
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="bg-brand-500/15 backdrop-blur-md p-6 rounded-3xl border border-brand-500/30 shadow-xl">
                  <span className="text-brand-300 font-display font-black text-3xl">12+</span>
                  <h4 className="font-display font-bold text-white text-base mt-1">Family Days Celebrated</h4>
                  <p className="text-xs text-neutral-300 mt-2">
                    Creating vibrant health habits that carry over directly into family dinner tables and morning routines.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-72 border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Family Community Smiles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
