import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const faqs = [
  {
    question: "What are the session timings at Fida Wellness Zone?",
    answer: `Our Wellness Zone is open Monday to Sunday, from 7:00 AM to 7:00 PM. Morning nutrition club sessions run from 7:00 AM to 1:00 PM, with ongoing 1-on-1 consultations and evening coaching through 7:00 PM.`
  },
  {
    question: "Where is the club located in Ahmedabad?",
    answer: `We are conveniently located at: Bharat Traders, Chhipa Society, Bakery Wali Gali, Danilimda, Ahmedabad, Gujarat 382405. We are easily accessible from across Ahmedabad.`
  },
  {
    question: "What happens on my very first visit to the club?",
    answer: `On your first visit, Lead Wellness Coach Shakir Hussain will welcome you with a complimentary body composition assessment (BMI, muscle mass, body fat percentage, hydration level). You will also experience our refreshing Afresh tea, taste our nutrient-dense shake, and learn about our community habit circle.`
  },
  {
    question: "Is this a gym or a nutrition community?",
    answer: `Fida Wellness Zone is primarily a nutrition and healthy lifestyle community. We believe 80% of wellness is nutrition and 20% is active movement. We focus on daily eating discipline, high-nutrition breakfast shakes, energy teas, daily health lectures, and habit coaching rather than heavy weightlifting.`
  },
  {
    question: "Can I bring my family, spouse, or kids?",
    answer: `Absolutely! Family wellness is our greatest passion. We encourage husbands, wives, parents, and children to participate together. Our Sunday Family Days are specifically curated with intergenerational activities, fun wellness games, and family nutrition education.`
  },
  {
    question: "How does 1-on-1 personalized diet coaching work?",
    answer: `Our coach assesses your daily schedule, food preferences, metabolic requirements, and health goals to create a customized meal and hydration schedule. You receive daily support, accountability check-ins on WhatsApp, and weekly progress reviews.`
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Ambient BG */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-brand-600">QUESTIONS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Everything you need to know about joining Fida Wellness Zone and starting your health journey.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-50/80 border-brand-300 shadow-md'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`font-display font-bold text-base sm:text-lg ${isOpen ? 'text-brand-700' : 'text-dark-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${isOpen ? 'bg-brand-500 text-white rotate-180' : 'bg-neutral-100 text-neutral-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-150 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-brand-50 border border-brand-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-dark-900 text-base">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5">
              Message Coach directly on WhatsApp for an immediate response.
            </p>
          </div>
          <a
            href={siteConfig.whatsapp.getLink("Hello Coach! I have a question about Fida Wellness Zone.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
