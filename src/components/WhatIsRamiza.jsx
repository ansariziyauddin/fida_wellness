import React from 'react';
import { Apple, Clock, Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: Apple,
    title: "PURE NUTRITION",
    desc: "Wholesome balanced meals, targeted nutrition shakes, and vital micronutrient density."
  },
  {
    icon: Clock,
    title: "DAILY ROUTINE",
    desc: "Structured morning hydration, disciplined meal timings, and restorative daily habits."
  },
  {
    icon: Heart,
    title: "EATING DISCIPLINE",
    desc: "Sustainable lifestyle choices without restrictive crash diets or exhausting routines."
  },
  {
    icon: Users,
    title: "COMMUNITY",
    desc: "A warm, motivating circle where families and friends eat well and thrive together."
  }
];

export default function WhatIsRamiza() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Left / 6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                alt="Pure Nutrition and Fresh Foods"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              
              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg shrink-0">
                    RWZ
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-dark-900 text-base">Ahmedabad Nutrition Center</h4>
                    <p className="text-xs text-neutral-600">Daily diet & habit coaching sessions at Jamalpur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Organic Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-200/50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Descriptive Content Column (Right / 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-brand-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-500 inline-block" />
              What is Ramiza Wellness Zone?
            </span>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight leading-[1.15]">
              MORE THAN A CLUB. <br />
              <span className="text-brand-600">A NUTRITION COMMUNITY</span> WHERE HEALTHY EATING BECOMES A LIFESTYLE.
            </h2>

            <p className="mt-5 text-neutral-600 text-base sm:text-lg leading-relaxed">
              We believe true wellness begins on your plate and in your daily routine. We are a pure nutrition-based community completely focused on diet education, morning shake bars, daily habits, and uplifting peer support.
            </p>

            {/* 4 Visual Keywords Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8">
              {pillars.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-neutral-50 hover:bg-brand-50/50 border border-neutral-100 hover:border-brand-200 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-sm tracking-wider text-dark-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm group"
              >
                <span>Read our complete story & philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
