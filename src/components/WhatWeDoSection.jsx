import React, { useState } from 'react';
import { Apple, Clock, Heart, Users, Sparkles, Activity, Coffee, Brain, Dumbbell, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, FileText, Eye } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import WellnessGuidePdfPreview from './WellnessGuidePdfPreview';

const coreServices = [
  {
    icon: Coffee,
    badge: "Morning & Evening",
    title: "Nutrition Shake Bar & Afresh",
    desc: "Start your morning with our delicious, science-backed Formula 1 nutrition shakes and revitalizing Afresh energy booster to fuel your day.",
    highlights: ["Complete micronutrient balance", "Energy & metabolism boost", "Daily morning fellowship"]
  },
  {
    icon: Apple,
    badge: "Personalized Coaching",
    title: "Tailored Diet & Eating Plans",
    desc: "1-on-1 diet coaching tailored to your body type, daily schedule, and dietary preferences. No restrictive starving or unsustainable fads.",
    highlights: ["Customized portion guidance", "Hydration discipline", "Progressive body composition tracking"]
  },
  {
    icon: Dumbbell,
    badge: "Daily Fitness",
    title: "Movement & Active Lifestyle",
    desc: "Light aerobic sessions, morning stretching, and rejuvenating outdoor group walks at Sabarmati Riverfront designed for all fitness levels.",
    highlights: ["Beginner-friendly workouts", "Flexibility & stamina building", "Outdoor Sunday walks"]
  },
  {
    icon: Brain,
    badge: "Education & Awareness",
    title: "Daily Health & Nutrition Lectures",
    desc: "Interactive, insightful lectures on gut health, immune support, diabetes awareness, healthy aging, and sustainable nutrition habits.",
    highlights: ["Doctor & coach insights", "Live Q&A sessions", "Family wellness awareness"]
  },
  {
    icon: Users,
    badge: "Community & Family",
    title: "Family Days & Social Celebrations",
    desc: "Periodical family celebrations, partner hall events, and outdoor fun days where whole households celebrate healthy living together.",
    highlights: ["Intergenerational bonding", "Wellness games & prizes", "Special hall gatherings"]
  },
  {
    icon: ShieldCheck,
    badge: "Accountability",
    title: "Daily Habit Tracking & Mentorship",
    desc: "Stay consistent with daily check-ins, coach encouragement, and a supportive community that keeps you motivated every step of the way.",
    highlights: ["Daily WhatsApp check-in", "Weekly milestone reviews", "Positive peer motivation"]
  }
];

const habitGoals = [
  {
    id: "weight",
    label: "Weight Management & Fat Loss",
    icon: Activity,
    recommendation: "Morning Shake Bar + 1-on-1 Diet Plan + Daily Habit Tracker",
    desc: "Replace unhealthy high-calorie breakfasts with nutrient-rich nutrition shakes and follow a personalized meal plan crafted by our coach."
  },
  {
    id: "energy",
    label: "All-Day Energy & Stamina",
    icon: Sparkles,
    recommendation: "Afresh Energy Booster + Hydration Routine + Morning Movement",
    desc: "Overcome afternoon sluggishness with our cellular hydration protocol, revitalizing herbal tea, and daily morning movement sessions."
  },
  {
    id: "family",
    label: "Family Health & Better Habits",
    icon: Heart,
    recommendation: "Sunday Family Days + Nutrition Awareness Lectures",
    desc: "Involve your children and parents in fun wellness activities and learn practical nutrition swaps for healthy home cooking."
  },
  {
    id: "routine",
    label: "Morning Routine & Discipline",
    icon: Clock,
    recommendation: "6:30 AM Club Session + Community Fellowship",
    desc: "Transform your mornings into an inspiring habit sanctuary surrounded by like-minded health enthusiasts in Jamalpur."
  }
];

export default function WhatWeDoSection() {
  const [selectedGoal, setSelectedGoal] = useState("weight");
  const [showPdfModal, setShowPdfModal] = useState(false);

  const currentGoal = habitGoals.find((g) => g.id === selectedGoal) || habitGoals[0];

  return (
    <section id="what-we-do" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Our Offerings & Daily Programs</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase leading-tight">
            WHAT WE DO AT <span className="text-brand-600">RAMIZA WELLNESS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            We offer a comprehensive, community-driven wellness experience combining pure nutrition, daily sessions, movement, and habit coaching in Ahmedabad.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowPdfModal(true)}
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-red-400" />
              <span>Preview Style PDF Guide & Schedule</span>
            </button>
          </div>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {coreServices.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-neutral-50/80 hover:bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 hover:border-brand-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="p-3 rounded-2xl bg-brand-500 text-white shadow-md shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-brand-100 text-brand-800 tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-dark-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 space-y-2">
                  {service.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Wellness Goal & Habit Finder */}
        <div className="bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient BG */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
              <Activity className="w-3.5 h-3.5 text-brand-400" />
              <span>Interactive Goal Navigator</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
              FIND YOUR PERFECT <span className="text-brand-400">WELLNESS PATH</span>
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
              Select your primary health goal below to discover how Ramiza Wellness Zone personalizes your journey.
            </p>
          </div>

          {/* Goal Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {habitGoals.map((goal) => {
              const GoalIcon = goal.icon;
              const isSelected = selectedGoal === goal.id;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-brand-500 text-white border-brand-400 shadow-lg scale-102'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-300 border-white/10'
                  }`}
                >
                  <GoalIcon className={`w-5 h-5 mb-3 ${isSelected ? 'text-white' : 'text-brand-400'}`} />
                  <span className="text-xs sm:text-sm font-bold leading-tight">
                    {goal.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-400">
                Recommended Routine
              </span>
              <h4 className="font-display font-black text-lg sm:text-xl text-white">
                {currentGoal.recommendation}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                {currentGoal.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={siteConfig.whatsapp.getLink(`Hello Ramiza Wellness Zone! I'm interested in the ${currentGoal.label} program.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-brand-500/30 transition-all shrink-0 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start This Plan on WhatsApp</span>
              </a>

              <button
                onClick={() => setShowPdfModal(true)}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm px-4 py-3.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                <Eye className="w-4 h-4 text-brand-400" />
                <span>View PDF Guide</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* PDF Modal */}
      <WellnessGuidePdfPreview
        isOpen={showPdfModal}
        onClose={() => setShowPdfModal(false)}
      />
    </section>
  );
}
