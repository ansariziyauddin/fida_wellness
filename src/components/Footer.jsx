import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800/80 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 items-stretch">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 p-7 rounded-3xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/assets/logo.jpeg"
                  alt="Fida Wellness Zone"
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-brand-500/60 shadow-lg shrink-0"
                />
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    Fida <span className="text-brand-400">Wellness</span>
                  </h3>
                  <p className="text-xs text-brand-300 font-semibold tracking-wider uppercase mt-0.5">
                    Mission Healthy & Happy Life
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-4">
                Empowering households across Ahmedabad with daily morning nutrition, habit guidance, and active family health.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800">
              <a
                href={siteConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-500/15 hover:bg-brand-500 text-brand-300 hover:text-white border border-brand-500/30 font-bold text-xs sm:text-sm w-full py-3 px-4 rounded-xl transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Club Timings (4 Cols) */}
          <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 p-7 rounded-3xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-xl bg-brand-500/20 text-brand-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-white text-lg tracking-wide">
                  Club Timings
                </h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="bg-neutral-800/60 p-3.5 rounded-2xl border border-neutral-700/50">
                  <span className="text-neutral-400 text-xs block mb-1">Open All Days (Mon–Sun)</span>
                  <p className="text-white font-bold text-sm sm:text-base text-brand-300">
                    {siteConfig.contact.timings.fullDay}
                  </p>
                </div>

                <div className="bg-neutral-800/60 p-3.5 rounded-2xl border border-neutral-700/50">
                  <span className="text-neutral-400 text-xs block mb-1">Morning Nutrition & Shake Bar</span>
                  <p className="text-white font-bold text-sm sm:text-base text-emerald-300">
                    {siteConfig.contact.timings.morningClub}
                  </p>
                </div>

                <div className="bg-neutral-800/60 p-3.5 rounded-2xl border border-neutral-700/50">
                  <span className="text-neutral-400 text-xs block mb-1">Afternoon & Evening Consultations</span>
                  <p className="text-white font-bold text-sm sm:text-base text-teal-300">
                    {siteConfig.contact.timings.eveningSession}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Visit or Contact Us (4 Cols) */}
          <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 p-7 rounded-3xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-xl bg-brand-500/20 text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-white text-lg tracking-wide">
                  Visit or Contact Us
                </h4>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Location */}
                <div className="bg-neutral-800/60 p-3.5 rounded-2xl border border-neutral-700/50">
                  <span className="text-neutral-400 text-xs block mb-1 font-medium">Club Address</span>
                  <p className="text-white text-xs sm:text-sm leading-snug font-medium">
                    {siteConfig.contact.address.full}
                  </p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-bold mt-2 pt-2 border-t border-neutral-700/50 w-full"
                  >
                    <span>View Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Direct Phone & Email Grid */}
                <div className="grid grid-cols-1 gap-2.5">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 hover:border-brand-500/50 text-neutral-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-brand-500/15 text-brand-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-neutral-400 block leading-tight">Call Coach</span>
                      <span className="text-xs sm:text-sm font-bold text-white">{siteConfig.contact.displayPhone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 hover:border-brand-500/50 text-neutral-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-brand-500/15 text-brand-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-neutral-400 block leading-tight">Email Inquiries</span>
                      <span className="text-xs sm:text-sm font-bold text-white truncate block">{siteConfig.contact.email}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Fida Wellness Zone. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <span>Live Healthy. Live Together.</span>
            <Heart className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}


