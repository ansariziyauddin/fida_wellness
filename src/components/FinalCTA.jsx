import React from 'react';
import { MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3 h-3" />
          <span>Start Your Daily Journey</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-4xl tracking-tight uppercase leading-tight">
          READY TO LIVE HEALTHIER, <span className="text-dark-900">TOGETHER?</span>
        </h2>

        <p className="mt-3 text-brand-100 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
          Join our daily nutrition sessions, morning shake bar, and family health circles in Jamalpur, Ahmedabad.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={siteConfig.whatsapp.getLink("Hello Ramiza Wellness Zone! I want to join the club and attend a morning session.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-dark-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-brand-400" />
            <span>Join via WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-dark-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-brand-600" />
            <span>Call {siteConfig.contact.displayPhone}</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-brand-100/90 font-medium">
          <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
          <span>{siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, Jamalpur, Ahmedabad</span>
        </div>
      </div>
    </section>
  );
}
