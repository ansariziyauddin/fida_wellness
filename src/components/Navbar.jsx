import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for scroll-spy
      const sections = ['hero', 'what-we-do', 'coach', 'lifestyle', 'gallery', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3.5'
          : 'bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative">
              <img
                src="/assets/logo.jpeg"
                alt="Ramiza Wellness Zone Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-brand-500 shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500 border-2 border-white"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-lg sm:text-xl tracking-tight leading-none transition-colors ${
                  isScrolled ? 'text-dark-900' : 'text-white'
                }`}
              >
                Ramiza <span className="text-brand-500">Wellness</span>
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-1 transition-colors ${
                  isScrolled ? 'text-neutral-500' : 'text-neutral-300'
                }`}
              >
                Mission Healthy & Happy Life
              </span>
            </div>
          </a>

          {/* Clean Single-Page Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((item) => {
              const targetSection = item.path.replace('#', '');
              const isActive = activeSection === targetSection;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm'
                      : isScrolled
                      ? 'text-neutral-700 hover:text-brand-600 hover:bg-brand-50/70'
                      : 'text-neutral-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled
                  ? 'text-neutral-700 hover:text-brand-600 hover:bg-brand-50'
                  : 'text-neutral-200 hover:text-white hover:bg-white/10'
              }`}
              title={`Call: ${siteConfig.contact.displayPhone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-xs xl:text-sm font-bold px-4 xl:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join Club</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={siteConfig.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 text-white p-2 rounded-full shadow-sm"
              title="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-neutral-800 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1 mb-5">
            {siteConfig.navLinks.map((item) => {
              const targetSection = item.path.replace('#', '');
              const isActive = activeSection === targetSection;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-500 text-white'
                      : 'text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-brand-100" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={siteConfig.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white py-3.5 rounded-xl font-bold shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Connect on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-3 rounded-xl font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Call: {siteConfig.contact.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
