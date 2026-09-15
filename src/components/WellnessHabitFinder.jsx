import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle, RefreshCw } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const goals = [
  { id: "nutrition", label: "Mindful Nutrition & Energy", desc: "Eating balanced meals & ending fatigue" },
  { id: "movement", label: "Daily Active Movement", desc: "Stretching, joint mobility & morning fitness" },
  { id: "family", label: "Family Health & Happiness", desc: "Fun healthy habits for kids & parents" },
  { id: "habits", label: "Consistency & Morning Routine", desc: "Building unstoppable healthy rhythms" },
];

const timeSlots = [
  { id: "morning", label: "Morning Club Sessions (6:30 AM - 10:30 AM)" },
  { id: "evening", label: "Evening Coaching & Discussion (5:30 PM - 8:30 PM)" },
  { id: "weekend", label: "Weekend / Sunday Family Days" },
];

export default function WellnessHabitFinder() {
  const [selectedGoal, setSelectedGoal] = useState("nutrition");
  const [selectedTime, setSelectedTime] = useState("morning");
  const [hasCalculated, setHasCalculated] = useState(false);

  const getRecommendation = () => {
    const goalObj = goals.find((g) => g.id === selectedGoal);
    const timeObj = timeSlots.find((t) => t.id === selectedTime);
    return {
      recommendation: `Daily ${goalObj?.label} Track`,
      timing: timeObj?.label,
      summary: `Our coach recommends starting with the ${timeObj?.label?.split('(')[0]} to establish ${goalObj?.desc?.toLowerCase()}.`,
    };
  };

  const rec = getRecommendation();

  return (
    <section className="py-16 sm:py-24 bg-brand-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-brand-200/80 shadow-xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Interactive Session Finder</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-dark-900 tracking-tight">
              FIND YOUR <span className="text-brand-600">IDEAL WELLNESS TRACK</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Select your primary goal and preferred timing to see which Ramiza Wellness program suits you best.
            </p>
          </div>

          {!hasCalculated ? (
            <div className="space-y-8">
              {/* Step 1: Goal */}
              <div>
                <label className="block font-display font-bold text-sm text-dark-900 mb-3">
                  1. What is your primary wellness goal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        selectedGoal === g.id
                          ? 'bg-brand-500 text-white border-brand-500 shadow-md'
                          : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-brand-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">{g.label}</span>
                        {selectedGoal === g.id && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <p className={`text-xs mt-1 ${selectedGoal === g.id ? 'text-brand-100' : 'text-neutral-500'}`}>
                        {g.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Time */}
              <div>
                <label className="block font-display font-bold text-sm text-dark-900 mb-3">
                  2. What time of day works best for your schedule?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTime(t.id)}
                      className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        selectedTime === t.id
                          ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                          : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-brand-300'
                      }`}
                    >
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setHasCalculated(true)}
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-brand-500/25 transition-all cursor-pointer"
                >
                  <span>Get My Recommended Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="bg-brand-50/60 rounded-2xl p-6 sm:p-8 border border-brand-200 text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <Check className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Recommended Routine
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-dark-900 mt-1">
                {rec.recommendation}
              </h3>
              <p className="mt-2 text-sm text-neutral-700 max-w-lg mx-auto">
                {rec.summary}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={siteConfig.whatsapp.getLink(`Hi Coach! Based on the session finder, I'm interested in the "${rec.recommendation}" (${rec.timing}). Can I join?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm On WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setHasCalculated(false)}
                  className="inline-flex items-center gap-1.5 bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300 font-semibold text-xs sm:text-sm px-5 py-3 rounded-full cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Change Preferences</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
