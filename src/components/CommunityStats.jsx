import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, Users, Calendar, Award, Heart } from 'lucide-react';

const icons = [Users, Sparkles, Calendar, Heart];

export default function CommunityStats() {
  return (
    <section className="py-16 sm:py-24 bg-brand-500 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-100 font-bold text-xs uppercase tracking-widest">
            Real Impact & Growth
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight mt-1">
            OUR COMMUNITY IN NUMBERS
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((item, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 text-white">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-2">
                  {item.value}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-brand-100">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs text-brand-100/80 leading-snug hidden sm:block">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
