import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Users, MessageCircle, Award, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig, getAssetUrl } from '../data/siteConfig';

const heroBackgrounds = [
  {
    id: 1,
    url: getAssetUrl("assets/hero-bg.jpg"),
    title: "Sanctuary",
    alt: "Fida Wellness Zone Sanctuary & Nutrition Lounge"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2000&q=80",
    title: "Nutrition",
    alt: "Wholesome Clean Nutrition & Fresh Superfoods"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=80",
    title: "Vitality",
    alt: "Active Community Health & Movement"
  }
];

export default function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark-950 text-white pt-24 pb-16 select-none">
      {/* Background Images with Ambient Crossfade */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={bg.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === bgIndex ? 'opacity-45' : 'opacity-0'
            }`}
          >
            <motion.div
              initial={{ scale: 1.05 }}
              animate={idx === bgIndex ? { scale: 1.12 } : { scale: 1.05 }}
              transition={{ duration: 10, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src={bg.url}
                alt={bg.alt}
                className="w-full h-full object-cover object-center brightness-95"
              />
            </motion.div>
          </div>
        ))}
        
        {/* Soft Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/45 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

        {/* Background Switcher Indicators */}
        <div className="absolute bottom-6 right-8 z-20 hidden sm:flex items-center gap-2 bg-dark-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          {heroBackgrounds.map((bg, idx) => (
            <button
              key={bg.id}
              onClick={() => setBgIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === bgIndex
                  ? 'w-6 bg-brand-400'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Switch to background ${bg.title}`}
              title={bg.title}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Coach Portrait (Left / 4 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group">
              <div className="w-56 sm:w-64 lg:w-76 h-64 sm:h-76 lg:h-92 rounded-3xl overflow-hidden ring-4 ring-brand-500/40 shadow-2xl bg-dark-900">
                <img
                  src={siteConfig.founder.image}
                  alt={siteConfig.founder.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getAssetUrl("assets/coach-placeholder.svg");
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Badge Overlay */}
              <div className="absolute -bottom-3 -right-3 bg-brand-500 text-white px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 border-2 border-dark-900 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Lead Coach</span>
              </div>
            </div>
          </motion.div>

          {/* Coach Leadership Details (Right / 8 Cols) */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs sm:text-sm font-semibold mb-4 border border-brand-500/40 backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>LEADERSHIP & MENTORSHIP</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase"
            >
              GUIDED BY PASSION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-emerald-400">
                DRIVEN BY COMMUNITY.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 text-brand-300 font-bold text-sm sm:text-base"
            >
              {siteConfig.founder.name} • {siteConfig.founder.title} • {siteConfig.name}
            </motion.p>

            {/* Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 relative pl-5 border-l-2 border-brand-500 text-left max-w-2xl"
            >
              <Quote className="w-6 h-6 text-brand-500/40 absolute -top-2 -left-1" />
              <p className="text-xs sm:text-base text-neutral-200 italic leading-relaxed">
                “{siteConfig.founder.quote}”
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-2xl"
            >
              Personalized 1-on-1 diet coaching, morning shake bar guidance, and family habit mentorship at Danilimda, Ahmedabad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={siteConfig.whatsapp.getLink("Hello Coach! I'd like to book a 1-on-1 diet & wellness assessment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consult with Coach</span>
              </a>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
              >
                <span>About Our Club</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Club Timings & Visit</span>
              </a>
            </motion.div>

          </div>

        </div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">1-on-1 Mentorship</p>
              <p className="text-[11px] text-neutral-400">Personalized diet plan</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Morning Shakes</p>
              <p className="text-[11px] text-neutral-400">Nutritional shake bar</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Daily Community</p>
              <p className="text-[11px] text-neutral-400">Danilimda, Ahmedabad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Certified Coach</p>
              <p className="text-[11px] text-neutral-400">Dedicated habit guidance</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

