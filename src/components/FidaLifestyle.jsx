import React from 'react';
import { lifestyleSteps } from '../data/lifestyle';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FidaLifestyle() {
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
    <section id="lifestyle" className="py-20 sm:py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Fida Lifestyle Framework</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-tight">
            HEALTHY IS A <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300">WAY OF LIFE.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Five simple, powerful daily commitments that create boundless energy and lifelong vitality.
          </p>
        </div>

        {/* 5-Step Visual Cards Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {lifestyleSteps.map((item) => (
            <div
              key={item.step}
              className="group relative rounded-3xl overflow-hidden bg-neutral-800/80 border border-neutral-700/60 hover:border-brand-500/60 transition-all duration-300 flex flex-col h-[400px] shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Image with Zoom */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-850 via-neutral-900/40 to-transparent" />
                
                {/* Large Step Number Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-xl bg-dark-950/80 backdrop-blur-md text-brand-400 font-display font-black text-xs sm:text-sm tracking-wider border border-white/10">
                  {item.step}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-850">
                <div>
                  <span className="text-brand-400 font-bold text-xs tracking-widest uppercase">
                    {item.keyword}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-1 group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-400 text-xs leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-750 flex items-center justify-between text-xs text-neutral-400 group-hover:text-brand-400 transition-colors">
                  <span className="font-medium">Explore Step</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Start Your Healthy Lifestyle Today</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
