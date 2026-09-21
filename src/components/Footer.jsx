import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
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
    <footer className="bg-dark-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.jpeg"
                alt="Ramiza Wellness Zone"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500"
              />
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Ramiza <span className="text-brand-400">Wellness</span>
                </h3>
                <p className="text-xs text-brand-300 font-medium">Mission Healthy & Happy Life</p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              A community where healthy living becomes a joyful daily lifestyle. Join our daily sessions, family days, and health awareness circles in Ahmedabad.
            </p>

            {/* Parent Movement Affiliation */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700/60">
              <img
                src={siteConfig.parentCommunity.logo}
                alt={siteConfig.parentCommunity.name}
                className="w-10 h-10 rounded-full object-contain bg-black shrink-0 ring-1 ring-brand-500/40"
              />
              <div>
                <p className="text-xs font-bold text-white">A Magical Community Initiative</p>
                <p className="text-[11px] text-emerald-400 font-semibold">{siteConfig.parentCommunity.hashtag}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500/20 hover:bg-brand-500 text-brand-300 hover:text-white border border-brand-500/40 text-xs font-semibold px-3.5 py-2 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Community WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 border-l-2 border-brand-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-60 group-hover:scale-125 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Club Timings & Schedule */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 border-l-2 border-brand-500 pl-2.5">
              Club Timings
            </h4>
            <div className="space-y-3 text-sm">
              <div className="bg-neutral-800/60 p-3 rounded-xl border border-neutral-700/50">
                <div className="flex items-center gap-2 text-brand-400 font-medium text-xs mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Morning Sessions (Mon–Sat)</span>
                </div>
                <p className="text-white font-semibold text-sm">{siteConfig.contact.timings.morningClub}</p>
              </div>

              <div className="bg-neutral-800/60 p-3 rounded-xl border border-neutral-700/50">
                <div className="flex items-center gap-2 text-brand-400 font-medium text-xs mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Evening Awareness & Coaching</span>
                </div>
                <p className="text-white font-semibold text-sm">{siteConfig.contact.timings.eveningSession}</p>
              </div>

              <div className="bg-neutral-800/60 p-3 rounded-xl border border-neutral-700/50">
                <div className="flex items-center gap-2 text-brand-400 font-medium text-xs mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Sunday Family Days</span>
                </div>
                <p className="text-white font-semibold text-sm">{siteConfig.contact.timings.sundayFamilyDay}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 border-l-2 border-brand-500 pl-2.5">
              Visit or Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <div>
                  <p className="text-neutral-300 leading-snug">{siteConfig.contact.address.full}</p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-400 hover:text-brand-300 font-medium mt-1.5"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-neutral-300 hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Ramiza Wellness Zone. All rights reserved.</p>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Live Healthy. Live Together.</span>
            <Heart className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
