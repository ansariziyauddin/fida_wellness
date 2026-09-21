import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ShieldCheck, Award, MessageCircle, Heart, Quote, CheckCircle2, Phone, Calendar, Sparkles } from 'lucide-react';

export default function FounderSpotlight() {
  return (
    <section id="coach" className="py-20 sm:py-28 bg-neutral-50/70 relative overflow-hidden">
      {/* Visual subtle ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Coach Portrait (Left / 5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="w-full h-96 sm:h-[450px] rounded-3xl overflow-hidden ring-4 ring-brand-500/30 shadow-2xl bg-neutral-200">
                <img
                  src={siteConfig.founder.image}
                  alt={siteConfig.founder.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Badge Overlay */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-brand-500 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white">
                <Award className="w-4 h-4 text-brand-200" />
                <span className="text-xs font-bold uppercase tracking-wider">Lead Wellness Coach</span>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/60 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span className="text-xs font-bold text-dark-900">Certified Diet & Wellness Mentor</span>
              </div>
            </div>
          </div>

          {/* Coach Bio & Vision (Right / 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>Leadership & Mentorship</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight leading-tight uppercase">
              MEET YOUR <span className="text-brand-600">WELLNESS COACH</span>
            </h2>

            <p className="mt-2 text-brand-700 font-semibold text-base sm:text-lg">
              Ramiza Wellness Zone • Jamalpur, Ahmedabad
            </p>

            {/* Quote Block */}
            <div className="mt-6 relative pl-6 border-l-4 border-brand-500 bg-white/90 p-5 rounded-r-2xl border border-neutral-200/60 shadow-sm">
              <Quote className="w-8 h-8 text-brand-500/20 absolute -top-3 left-2" />
              <p className="text-base sm:text-lg text-dark-900 italic leading-relaxed font-medium">
                “{siteConfig.founder.quote}”
              </p>
            </div>

            <p className="mt-6 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Dedicated to empowering families in Ahmedabad to wake up with purpose, enjoy delicious science-backed morning shakes, overcome poor dietary habits, and experience the transformative warmth of daily peer support.
            </p>

            {/* Coach Highlights Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-semibold text-dark-900">Customized 1-on-1 Meal Plans</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-semibold text-dark-900">Morning Shake Bar Preparation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-semibold text-dark-900">Weekly Body Composition Reviews</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-semibold text-dark-900">Family Health & Habit Workshops</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.whatsapp.getLink("Hello Coach! I would like to book a 1-on-1 wellness consultation and visit the club.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-brand-500/25 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book 1-on-1 Consultation</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200 font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Direct Call</span>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-neutral-500">
              <Heart className="w-4 h-4 text-brand-600 fill-brand-600" />
              <span>Complimentary Body Composition Analysis on your first club visit</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
