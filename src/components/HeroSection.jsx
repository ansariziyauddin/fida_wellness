import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Users, ChevronLeft, ChevronRight, MessageCircle, Award, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

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
      
      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 z-30 p-3 rounded-full bg-dark-900/60 hover:bg-brand-500 text-white backdrop-blur-md border border-white/15 transition-all duration-300 hidden sm:flex items-center justify-center cursor-pointer shadow-lg hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 z-30 p-3 rounded-full bg-dark-900/60 hover:bg-brand-500 text-white backdrop-blur-md border border-white/15 transition-all duration-300 hidden sm:flex items-center justify-center cursor-pointer shadow-lg hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators / Tabs */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
            currentSlide === 0
              ? 'bg-brand-500 text-white shadow-md'
              : 'bg-white/15 text-neutral-300 hover:bg-white/25'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>Shakes & Nutrition</span>
        </button>

        <button
          onClick={() => setCurrentSlide(1)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
            currentSlide === 1
              ? 'bg-brand-500 text-white shadow-md'
              : 'bg-white/15 text-neutral-300 hover:bg-white/25'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>Leadership & Mentorship</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          /* ==================== SLIDE 1: SHAKES & NUTRITION ==================== */
          <motion.div
            key="slide-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex items-center justify-center"
          >
            {/* Background Image with Slow Ambient Motion */}
            <div className="absolute inset-0 z-0">
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=2000&q=80"
                  alt="Delicious Morning Nutrition Shakes and Afresh"
                  className="w-full h-full object-cover object-center opacity-45 brightness-90"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/75 to-dark-950/40" />
              <div className="absolute inset-0 bg-radial-glow opacity-60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              {/* Brand Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md flex-wrap justify-center"
              >
                <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
                <span>MISSION HEALTHY AND HAPPY LIFE</span>
                <span className="hidden sm:inline text-white/40">•</span>
                <span className="text-emerald-400 font-bold">POWERED BY MAGICAL COMMUNITY</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] max-w-5xl mx-auto uppercase"
              >
                LIVE HEALTHY. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-emerald-400">
                  LIVE TOGETHER.
                </span>
              </motion.h1>

              {/* Supporting Short Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-base sm:text-xl md:text-2xl text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed"
              >
                Start your day with wholesome <strong className="text-white">Nutrition Shakes</strong> & refreshing <strong className="text-emerald-400">Afresh</strong>, building better habits and lifelong family vitality.
              </motion.p>

              {/* Single Page CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#what-we-do"
                  onClick={(e) => scrollToSection(e, 'what-we-do')}
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore What We Do</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-sm sm:text-base px-7 py-4 rounded-full backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Visit Club / Contact</span>
                </a>
              </motion.div>

              {/* Trust Badges Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
              >
                <div className="flex items-center gap-3 p-2">
                  <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Shakes & Afresh</p>
                    <p className="text-[11px] text-neutral-400">Morning breakfast & evening</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Daily Community</p>
                    <p className="text-[11px] text-neutral-400">Jamalpur, Ahmedabad</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Diet Coaching</p>
                    <p className="text-[11px] text-neutral-400">Customized daily meal plans</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Family Days</p>
                    <p className="text-[11px] text-neutral-400">Health for all generations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* ==================== SLIDE 2: LEADERSHIP & MENTORSHIP ==================== */
          <motion.div
            key="slide-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex items-center justify-center"
          >
            {/* Diet Food Background Image with Slow Ambient Motion */}
            <div className="absolute inset-0 z-0">
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=2000&q=80"
                  alt="Wholesome Diet and Nutrition Bowls"
                  className="w-full h-full object-cover object-center opacity-45 brightness-90"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/75 to-dark-950/40" />
              <div className="absolute inset-0 bg-radial-glow opacity-60" />
            </div>

            {/* Open Full-Width Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Coach Portrait (Left / 4 Cols) */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative group">
                    <div className="w-56 sm:w-64 lg:w-72 h-64 sm:h-76 lg:h-84 rounded-3xl overflow-hidden ring-4 ring-brand-500/40 shadow-2xl">
                      <img
                        src={siteConfig.founder.image}
                        alt={siteConfig.founder.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Badge Overlay */}
                    <div className="absolute -bottom-3 -right-3 bg-brand-500 text-white px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 border-2 border-dark-900 text-xs font-bold uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>Lead Coach</span>
                    </div>
                  </div>
                </div>

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

                  <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
                    GUIDED BY PASSION. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-emerald-400">
                      DRIVEN BY COMMUNITY.
                    </span>
                  </h2>

                  <p className="mt-2 text-brand-300 font-bold text-sm sm:text-base">
                    Founder & Lead Wellness Coach • Ramiza Wellness Zone
                  </p>

                  {/* Quote Box */}
                  <div className="mt-4 relative pl-5 border-l-2 border-brand-500 text-left max-w-2xl">
                    <Quote className="w-6 h-6 text-brand-500/40 absolute -top-2 -left-1" />
                    <p className="text-xs sm:text-base text-neutral-200 italic leading-relaxed">
                      “{siteConfig.founder.quote}”
                    </p>
                  </div>

                  <p className="mt-4 text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    Personalized 1-on-1 diet coaching, morning shake bar guidance, and family habit mentorship at Jamalpur, Ahmedabad.
                  </p>

                  {/* CTAs */}
                  <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <a
                      href={siteConfig.whatsapp.getLink("Hello Coach! I'd like to book a 1-on-1 diet & wellness assessment.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-brand-500/25 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Consult with Coach</span>
                    </a>

                    <a
                      href="#coach"
                      onClick={(e) => scrollToSection(e, 'coach')}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition-all cursor-pointer"
                    >
                      <span>View Coach Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>

              {/* Trust Badges Strip for Slide 2 */}
              <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
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
                    <p className="text-[11px] text-neutral-400">Jamalpur, Ahmedabad</p>
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
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
