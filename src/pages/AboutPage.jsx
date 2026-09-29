import React from 'react';
import { siteConfig } from '../data/siteConfig';
import FounderSpotlight from '../components/FounderSpotlight';
import CommunityStats from '../components/CommunityStats';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Heart, Users, ShieldCheck, Sun, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Page Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=2000&q=80"
            alt="About Ramiza Wellness"
            className="w-full h-full object-cover opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase max-w-4xl mx-auto">
            ABOUT <span className="text-brand-400">RAMIZA WELLNESS ZONE</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            “Mission Healthy and Happy Life” — Transforming lives through daily habit education, nourishing nutrition, and family wellness in Ahmedabad.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                Why We Started
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-900 uppercase">
                HEALTH IS NOT A CLINICAL DESTINATION. <br />
                <span className="text-brand-600">IT IS A DAILY CELEBRATION.</span>
              </h2>

              <p className="mt-6 text-neutral-600 leading-relaxed text-base">
                In today's fast-paced world, unhealthy eating habits, sedentary routines, and chronic daily stress have become common. Many try strict, isolated diets only to burn out within weeks.
              </p>

              <p className="mt-4 text-neutral-600 leading-relaxed text-base">
                <strong>Ramiza Wellness Zone</strong> was founded to provide a welcoming, high-energy community sanctuary where healthy habits become second nature. Through interactive morning sessions, nutrition coaching, group walks, and monthly Family Days, we prove that health is most enjoyable when shared with loved ones.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-sm font-semibold text-neutral-800">Non-judgmental, inclusive space for every age & fitness stage</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-sm font-semibold text-neutral-800">Focus on education & habits rather than temporary quick-fixes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-sm font-semibold text-neutral-800">Regular outdoor activities and family-inclusive events</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80"
                  alt="Healthy whole foods"
                  className="rounded-3xl h-64 w-full object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                  alt="Nourishing fresh salad bowl"
                  className="rounded-3xl h-64 w-full object-cover shadow-lg mt-8"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-900 uppercase">
              OUR GUIDING <span className="text-brand-600">VALUES</span>
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base">
              The four foundational pillars that define every session and gathering at Ramiza Wellness Zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-dark-900 mb-2">Positive Vitality</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Starting each morning with optimism, grateful mindset, and boundless physical energy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-dark-900 mb-2">Family Inclusivity</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Wellness that unites households and encourages parents and children to build lasting health habits together.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-dark-900 mb-2">Practical Education</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Simplifying nutrition and wellness concepts into actionable daily meals and mindful lifestyle steps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-dark-900 mb-2">Authentic Community</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Peer accountability and heartfelt celebrations for every milestone, big or small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <FounderSpotlight />

      {/* Community Statistics */}
      <CommunityStats />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
