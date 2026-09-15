import React from 'react';
import { nutritionTopics } from '../data/nutrition';
import { Apple, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HealthyNutritionSection() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <Apple className="w-3.5 h-3.5 text-brand-600" />
            <span>Nourish to Flourish</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase">
            EAT BETTER. <span className="text-brand-600">FEEL BETTER.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            Practical lifestyle nutrition principles designed for natural vitality, joyful eating, and everyday energy—without restrictive crash diets.
          </p>
        </div>

        {/* Nutrition Topics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nutritionTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/70 hover:border-brand-500 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 right-3.5 bg-dark-900/80 backdrop-blur-md text-brand-300 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                  {topic.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    {topic.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-xl text-dark-900 mt-1 mb-2.5">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {topic.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-brand-700 font-semibold">
                  <Check className="w-4 h-4 text-brand-500" />
                  <span>Integrated in Daily Morning Lectures</span>
                </div>
              </div>
            </div>
          ))}

          {/* Special Feature Card */}
          <div className="bg-gradient-to-br from-dark-900 to-dark-950 text-white rounded-3xl p-8 flex flex-col justify-between border border-neutral-800 shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">
                Personalized Habit Guidance
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Every individual has unique metabolic rhythms. Our coaches help you calibrate portion sizes, optimal hydration targets, and family-friendly recipe alternatives.
              </p>
            </div>

            <div className="pt-6">
              <Link
                to="/wellness"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm py-3.5 px-6 rounded-full transition-colors"
              >
                <span>Explore Nutrition Modules</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
