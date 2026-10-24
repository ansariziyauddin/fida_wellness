import React, { useState } from 'react';
import { 
  FileText, Download, X, Eye, ChevronLeft, ChevronRight, 
  Printer, Share2, Sparkles, CheckCircle2, MapPin, Clock, 
  Phone, Mail, ShieldCheck, Heart, Coffee, Apple, Award
} from 'lucide-react';
import { siteConfig, getAssetUrl } from '../data/siteConfig';

export default function WellnessGuidePdfPreview({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `Check out the Fida Wellness Zone Guide & Daily Schedule!\n${window.location.href}`;
    window.open(siteConfig.whatsapp.getLink(text), '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PDF Reader Top Toolbar */}
        <div className="bg-neutral-850 px-4 sm:px-6 py-3.5 border-b border-neutral-750 flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                <span>Fida_Wellness_Guide_2026.pdf</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-brand-500 text-white font-semibold">PDF PREVIEW</span>
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-400">Official Club Schedule & Nutrition Guide</p>
            </div>
          </div>

          {/* Reader Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Page Pagination */}
            <div className="flex items-center gap-1 bg-neutral-800 px-2.5 py-1.5 rounded-lg border border-neutral-700 text-xs">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1 hover:text-brand-400 disabled:opacity-30 disabled:hover:text-white cursor-pointer"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-1 font-semibold text-neutral-200 text-[11px] sm:text-xs">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1 hover:text-brand-400 disabled:opacity-30 disabled:hover:text-white cursor-pointer"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 text-xs cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="hidden sm:flex items-center gap-1 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 text-xs cursor-pointer"
              title="Share on WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Page Content Area (Simulating high-res PDF Paper Document) */}
        <div className="flex-1 overflow-y-auto bg-neutral-950 p-3 sm:p-6 lg:p-8 flex justify-center">
          
          {/* ================= PAGE 1 ================= */}
          {currentPage === 1 && (
            <div className="w-full max-w-2xl bg-white text-dark-900 rounded-2xl shadow-2xl p-6 sm:p-10 border border-neutral-300 transition-all font-sans relative">
              {/* Document Header */}
              <div className="flex items-center justify-between border-b-2 border-brand-500 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={siteConfig.logo || getAssetUrl('assets/logo.png')}
                    alt="Logo"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500"
                  />
                  <div>
                    <h1 className="font-display font-black text-xl text-dark-900 uppercase tracking-tight">
                      Fida Wellness Zone
                    </h1>
                    <p className="text-xs text-brand-600 font-bold uppercase tracking-wider">
                      Mission Healthy & Happy Life
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase bg-brand-50 text-brand-700 border border-brand-200 px-2.5 py-1 rounded-md">
                    Official Club Guide
                  </span>
                  <p className="text-[10px] text-neutral-500 mt-1">Doc Ref: FWZ-2026-V1</p>
                </div>
              </div>

              {/* Page Title */}
              <div className="mb-6 bg-brand-50/70 p-4 rounded-xl border border-brand-100">
                <h2 className="font-display font-black text-lg text-dark-900 uppercase">
                  1. Welcome & Daily Club Timings
                </h2>
                <p className="text-xs text-neutral-600 mt-1">
                  Fida Wellness Zone is a community committed to uplifting health, nutrition, and lifestyle habits for individuals and whole families across Ahmedabad.
                </p>
              </div>

              {/* Schedule Table */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-sm text-dark-900 uppercase mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Daily Schedule & Timings</span>
                </h3>
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-neutral-100 text-neutral-700 font-bold uppercase">
                      <tr>
                        <th className="p-3">Session</th>
                        <th className="p-3">Timings</th>
                        <th className="p-3">Included Activities</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr>
                        <td className="p-3 font-semibold text-brand-700">Morning Club</td>
                        <td className="p-3 font-bold text-dark-900">{siteConfig.contact.timings.morningClub}</td>
                        <td className="p-3 text-neutral-600">Formula 1 Shake Bar, Afresh Energy Tea, Health Lecture</td>
                      </tr>
                      <tr className="bg-neutral-50/50">
                        <td className="p-3 font-semibold text-brand-700">Evening Coaching</td>
                        <td className="p-3 font-bold text-dark-900">{siteConfig.contact.timings.eveningSession}</td>
                        <td className="p-3 text-neutral-600">1-on-1 Diet Review, Progress Weigh-in, Habit Consultation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-emerald-700">Sunday Family Day</td>
                        <td className="p-3 font-bold text-dark-900">{siteConfig.contact.timings.sundayFamilyDay}</td>
                        <td className="p-3 text-neutral-600">Family Fun Games, Group Nutrition Demos, Member Celebrations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Location & Contact Section */}
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 mb-6">
                <h3 className="font-display font-bold text-xs uppercase text-dark-900 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  <span>Club Location & Pin Details</span>
                </h3>
                <p className="text-xs font-semibold text-dark-900">
                  {siteConfig.contact.address.full}
                </p>
                <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-neutral-200 text-xs">
                  <div>
                    <span className="text-neutral-500 text-[10px] block uppercase font-bold">Contact Phone</span>
                    <span className="font-bold text-dark-900">{siteConfig.contact.displayPhone}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-[10px] block uppercase font-bold">Email Address</span>
                    <span className="font-bold text-dark-900 break-all">{siteConfig.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-[10px] text-neutral-400">
                <span>Fida Wellness Zone • Danilimda, Ahmedabad</span>
                <span>Page 1 of 3</span>
              </div>
            </div>
          )}

          {/* ================= PAGE 2 ================= */}
          {currentPage === 2 && (
            <div className="w-full max-w-2xl bg-white text-dark-900 rounded-2xl shadow-2xl p-6 sm:p-10 border border-neutral-300 transition-all font-sans relative">
              {/* Document Header */}
              <div className="flex items-center justify-between border-b-2 border-brand-500 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={siteConfig.logo || getAssetUrl('assets/logo.png')}
                    alt="Logo"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500"
                  />
                  <div>
                    <h1 className="font-display font-black text-xl text-dark-900 uppercase tracking-tight">
                      Fida Wellness Zone
                    </h1>
                    <p className="text-xs text-brand-600 font-bold uppercase tracking-wider">
                      80% Nutrition + 20% Active Lifestyle
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md">
                    Nutrition Protocol
                  </span>
                  <p className="text-[10px] text-neutral-500 mt-1">Doc Ref: FWZ-2026-V1</p>
                </div>
              </div>

              {/* Page Title */}
              <div className="mb-6 bg-brand-50/70 p-4 rounded-xl border border-brand-100">
                <h2 className="font-display font-black text-lg text-dark-900 uppercase">
                  2. Core Nutrition & Habit Protocol
                </h2>
                <p className="text-xs text-neutral-600 mt-1">
                  Our scientific approach centers on clean, nutrient-dense breakfast replacements, cellular hydration, and balanced meal planning.
                </p>
              </div>

              {/* 4 Pillars of Daily Nutrition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Coffee className="w-4 h-4 text-brand-600" />
                    <h4 className="font-display font-bold text-xs uppercase text-dark-900">Morning Shake Bar</h4>
                  </div>
                  <p className="text-[11px] text-neutral-650 leading-relaxed">
                    Formula 1 shake delivering dense protein, essential vitamins, and fiber in delicious flavors for breakfast.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <h4 className="font-display font-bold text-xs uppercase text-dark-900">Afresh Energy Tea</h4>
                  </div>
                  <p className="text-[11px] text-neutral-650 leading-relaxed">
                    Rich in natural antioxidants to accelerate metabolism, awaken mental alertness, and replace sugary tea/coffee.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Apple className="w-4 h-4 text-brand-600" />
                    <h4 className="font-display font-bold text-xs uppercase text-dark-900">1-on-1 Meal Customization</h4>
                  </div>
                  <p className="text-[11px] text-neutral-650 leading-relaxed">
                    Personalized portion sizes, clean lunch swaps, and dinner guidelines without starving or crash dieting.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <h4 className="font-display font-bold text-xs uppercase text-dark-900">Habit Accountability</h4>
                  </div>
                  <p className="text-[11px] text-neutral-650 leading-relaxed">
                    Daily check-ins on WhatsApp, hydration alarms, and weekly body composition progress tracking.
                  </p>
                </div>
              </div>

              {/* Transformation Checklist */}
              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 mb-6">
                <h4 className="font-display font-bold text-xs uppercase text-emerald-900 mb-2">
                  First 30 Days Target Milestones
                </h4>
                <ul className="space-y-1.5 text-xs text-emerald-950">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Consistent 7:00 AM morning hydration & shake routine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Elimination of mid-morning sugar spikes and fatigue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Significant improvement in gut vitality and stamina</span>
                  </li>
                </ul>
              </div>

              {/* Page Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-[10px] text-neutral-400">
                <span>Fida Wellness Zone • Pure Nutrition & Energy</span>
                <span>Page 2 of 3</span>
              </div>
            </div>
          )}

          {/* ================= PAGE 3 ================= */}
          {currentPage === 3 && (
            <div className="w-full max-w-2xl bg-white text-dark-900 rounded-2xl shadow-2xl p-6 sm:p-10 border border-neutral-300 transition-all font-sans relative">
              {/* Document Header */}
              <div className="flex items-center justify-between border-b-2 border-brand-500 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={siteConfig.logo || getAssetUrl('assets/logo.png')}
                    alt="Logo"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500"
                  />
                  <div>
                    <h1 className="font-display font-black text-xl text-dark-900 uppercase tracking-tight">
                      Fida Wellness Zone
                    </h1>
                    <p className="text-xs text-brand-600 font-bold uppercase tracking-wider">
                      Mission Healthy & Happy Life
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-md">
                    Family & Community
                  </span>
                  <p className="text-[10px] text-neutral-500 mt-1">Doc Ref: FWZ-2026-V1</p>
                </div>
              </div>

              {/* Page Title */}
              <div className="mb-6 bg-brand-50/70 p-4 rounded-xl border border-brand-100">
                <h2 className="font-display font-black text-lg text-dark-900 uppercase">
                  3. Family Days & Community Health Vision
                </h2>
                <p className="text-xs text-neutral-600 mt-1">
                  Dedicated to empowering families across Ahmedabad with holistic nutrition, active habits, and lifelong vitality.
                </p>
              </div>

              {/* Coach Message */}
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-brand-600" />
                  <h4 className="font-display font-bold text-xs uppercase text-dark-900">
                    Message from Lead Wellness Coach
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 italic leading-relaxed">
                  “{siteConfig.founder.quote}”
                </p>
                <p className="text-[11px] text-brand-700 font-bold mt-2">
                  — {siteConfig.founder.name}, {siteConfig.founder.title}, {siteConfig.name}
                </p>
              </div>

              {/* How to Join Step-by-Step */}
              <div className="mb-6 space-y-2">
                <h4 className="font-display font-bold text-xs uppercase text-dark-900 mb-2">
                  How to Attend Your First Session:
                </h4>
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-[10px] shrink-0">1</span>
                  <span>Message Coach on WhatsApp at <strong>{siteConfig.contact.displayPhone}</strong></span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-[10px] shrink-0">2</span>
                  <span>Visit {siteConfig.contact.address.full}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-[10px] shrink-0">3</span>
                  <span>Get your Free Body Composition scan, taste our shake & start your journey</span>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="bg-brand-500 text-white p-4 rounded-xl text-center shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider mb-1">
                  Ready to transform your lifestyle?
                </p>
                <p className="text-[11px] text-brand-100">
                  Visit our wellness zone Monday to Sunday, 7:00 AM – 7:00 PM in Danilimda, Ahmedabad!
                </p>
              </div>

              {/* Page Footer */}
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-neutral-200 text-[10px] text-neutral-400">
                <span>Fida Wellness Zone</span>
                <span>Page 3 of 3</span>
              </div>
            </div>
          )}

        </div>

        {/* PDF Reader Bottom Actions */}
        <div className="bg-neutral-850 px-4 sm:px-6 py-3 border-t border-neutral-750 flex items-center justify-between gap-4 text-xs text-white">
          <div className="flex items-center gap-2 text-neutral-400 text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Verified Community Document</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-xs font-medium cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold cursor-pointer"
            >
              Next Page
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
