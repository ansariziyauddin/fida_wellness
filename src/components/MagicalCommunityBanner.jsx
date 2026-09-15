import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

export default function MagicalCommunityBanner() {
  const { parentCommunity } = siteConfig;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-dark-950 via-neutral-900 to-dark-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Concise Container Card */}
        <div className="bg-neutral-850/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-neutral-700/80 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            
            {/* Emblem */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-brand-500 via-emerald-400 to-purple-500 shadow-xl flex items-center justify-center">
                <img
                  src={parentCommunity.logo}
                  alt={parentCommunity.name}
                  className="w-full h-full object-contain rounded-full bg-dark-900"
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow whitespace-nowrap">
                Parent Community
              </span>
            </div>

            {/* Content & Action */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-brand-500/30">
                <Sparkles className="w-3 h-3 text-brand-400" />
                <span>Run Under Magical Community</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase">
                {parentCommunity.tagline}
              </h3>

              <p className="mt-2 text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Ramiza Wellness Zone proudly operates under <strong className="text-white">Magical Community</strong> (<span className="text-emerald-400 font-semibold">{parentCommunity.hashtag}</span>)—a nationwide movement empowering households with sustainable diet habits and daily routine guidance.
              </p>

              {/* Action */}
              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href={siteConfig.whatsapp.getLink("Hello! I would like to learn more about the Magical Community movement and daily wellness sessions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join The Movement</span>
                </a>
                <span className="text-xs text-neutral-400 font-mono">
                  {parentCommunity.hashtag}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
