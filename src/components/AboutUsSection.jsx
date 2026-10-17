import React from 'react';
import { Apple, Clock, Heart, Users, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

const pillars = [
  {
    icon: Apple,
    title: "PURE NUTRITION",
    desc: "Wholesome balanced nutrition, targeted morning shakes, and vital micronutrient density.",
    color: "from-amber-500/20 to-brand-500/10"
  },
  {
    icon: Clock,
    title: "DAILY ROUTINE",
    desc: "Structured morning hydration, disciplined meal timings, and sustainable daily habits.",
    color: "from-blue-500/20 to-brand-500/10"
  },
  {
    icon: Heart,
    title: "EATING DISCIPLINE",
    desc: "Long-term lifestyle habits without restrictive crash diets or exhausting routines.",
    color: "from-rose-500/20 to-brand-500/10"
  },
  {
    icon: Users,
    title: "COMMUNITY SPIRIT",
    desc: "A warm, motivating circle where families and friends celebrate healthy milestones together.",
    color: "from-emerald-500/20 to-brand-500/10"
  }
];

export default function AboutUsSection() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
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
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>ABOUT FIDA WELLNESS ZONE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark-900 tracking-tight uppercase leading-[1.15]"
          >
            HEALTH IS NOT A CLINICAL DESTINATION. <br />
            <span className="text-brand-600">IT IS A DAILY CELEBRATION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            Transforming lives through daily nutrition education, morning shake bars, habit coaching, and family togetherness in Danilimda, Ahmedabad.
          </motion.p>
        </div>

        {/* Story & Visuals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Visual Column (Left / 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                alt="Pure Nutrition and Fresh Whole Foods"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-dark-950/20 to-transparent" />
              
              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                    FWZ
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-dark-900 text-base">Ahmedabad Nutrition Center</h4>
                    <p className="text-xs text-neutral-600">Daily morning habit & diet coaching sessions at Danilimda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Badges */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-2xl shadow-lg font-bold text-xs flex items-center gap-1.5">
              <Sun className="w-4 h-4" />
              <span>Morning Club Active</span>
            </div>
          </motion.div>

          {/* Story & Philosophy Content (Right / 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-2 block">
              Our Origin & Philosophy
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-dark-900 uppercase leading-snug">
              WHY FIDA WELLNESS ZONE?
            </h3>

            <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              In today's fast-paced environment, poor nutrition, irregular timings, and chronic daily stress have become common. Many try strict, isolated diets only to burn out within weeks.
            </p>

            <p className="mt-3 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <strong className="text-dark-900">Fida Wellness Zone</strong> was founded to provide a joyful, non-judgmental community sanctuary where healthy eating and active living become sustainable habits, bringing individuals and families together for lifelong vitality.
            </p>

            {/* Bullet Highlights */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-neutral-800">Non-judgmental, inclusive space for every age & fitness stage</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-neutral-800">Focus on daily habits & nutrition education rather than quick fixes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-neutral-800">Morning shake bar, customized meal plans & joyful family gatherings</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.whatsapp.getLink("Hello Coach! I'd like to learn more about Fida Wellness Zone.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gallery"
                onClick={(e) => scrollToSection(e, 'gallery')}
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm px-6 py-3.5 rounded-full transition-all cursor-pointer"
              >
                <span>View Photo Gallery</span>
              </a>
            </div>

          </motion.div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-neutral-50 hover:bg-brand-50/40 border border-neutral-200/80 hover:border-brand-300 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-dark-900 tracking-wide mb-2 uppercase">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
