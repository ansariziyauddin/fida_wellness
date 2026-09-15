import EventsSection from '../components/EventsSection';
import FamilyDayHighlight from '../components/FamilyDayHighlight';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Calendar } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative py-20 sm:py-28 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80"
            alt="Events Calendar"
            className="w-full h-full object-cover opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>Community Calendar</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase max-w-4xl mx-auto">
            EVENTS & <span className="text-brand-400">FAMILY DAYS</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Join our upcoming family wellness festivals, sunrise riverfront walks, nutrition masterclasses, and monthly celebration nights.
          </p>
        </div>
      </section>

      {/* Filterable Events Grid */}
      <EventsSection />

      {/* Family Day Spotlight */}
      <FamilyDayHighlight />

      {/* Pre-Footer CTA */}
      <FinalCTA />
    </div>
  );
}
