import DailySessionsGrid from '../components/DailySessionsGrid';
import FidaLifestyle from '../components/FidaLifestyle';
import WellnessHabitFinder from '../components/WellnessHabitFinder';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function WellnessPage() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative py-20 sm:py-28 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2000&q=80"
            alt="Wellness Sessions"
            className="w-full h-full object-cover opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Health Curriculum</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase max-w-4xl mx-auto">
            WELLNESS & <span className="text-brand-400">DAILY SESSIONS</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Practical diet knowledge, morning shake routines, and wholesome nutrition strategies to revitalize your lifestyle step-by-step.
          </p>
        </div>
      </section>

      {/* Daily Schedule Highlight Banner */}
      <section className="py-12 bg-brand-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white/20 text-white">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Daily Club Routine (Monday to Sunday)</h3>
                <p className="text-xs sm:text-sm text-brand-100">
                  Open Hours: {siteConfig.contact.timings.fullDay} • Morning Sessions: {siteConfig.contact.timings.morningClub}
                </p>
              </div>
            </div>

            <a
              href={siteConfig.whatsapp.getLink("Hi! I'd like to reserve a free guest pass for tomorrow's morning wellness session.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all"
            >
              Reserve Free Morning Pass
            </a>
          </div>
        </div>
      </section>

      {/* 5-Step Fida Lifestyle */}
      <FidaLifestyle />

      {/* Full Daily Sessions Modules */}
      <DailySessionsGrid />

      {/* Interactive Finder */}
      <WellnessHabitFinder />

      {/* Pre-Footer Action */}
      <FinalCTA />
    </div>
  );
}
