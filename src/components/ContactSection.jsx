import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ArrowUpRight, Sparkles, Navigation, FileText, Eye, Download } from 'lucide-react';
import WellnessGuidePdfPreview from './WellnessGuidePdfPreview';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Morning Wellness Session (6:30 AM - 10:30 AM)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Ramiza Wellness Zone!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.interest}\nNote: ${formData.message || 'I would like to visit the club for a free wellness assessment.'}`;
    window.open(siteConfig.whatsapp.getLink(text), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-100/70 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Visit Us in Ahmedabad</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase leading-tight">
            CONTACT & <span className="text-brand-600">CLUB VISIT.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Drop by our Jamalpur club in Ahmedabad or book a free wellness & body composition assessment.
          </p>
        </div>

        {/* Quick PDF Document Preview Trigger Strip */}
        <div className="mb-12 bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-red-500/10 text-red-600 border border-red-200 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-dark-900 text-base sm:text-lg">
                  Ramiza Wellness Club Schedule & Nutrition Guide
                </h4>
                <span className="text-[10px] font-bold uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded">PDF</span>
              </div>
              <p className="text-xs text-neutral-600 mt-0.5">
                Preview our full daily routine, shake bar timings, address with pin, and family day details in document format.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowPdfModal(true)}
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-brand-400" />
            <span>Preview Style PDF Guide</span>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Left: Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Connect Banner */}
            <div className="bg-gradient-to-br from-brand-600 to-emerald-700 text-white p-7 sm:p-8 rounded-3xl shadow-xl">
              <span className="text-brand-100 font-bold text-[11px] uppercase tracking-widest">
                Quickest Response
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl mt-1 mb-3">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-brand-100 text-xs sm:text-sm leading-relaxed mb-6">
                Have questions about morning shake bar timings, personalized diet plans, or bringing your family? Our lead coach responds right away.
              </p>
              <a
                href={siteConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-dark-950 hover:bg-black text-white font-bold text-sm w-full py-4 rounded-2xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-brand-400" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>

            {/* Club Address & Timings */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-md space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Club Location & Pin</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    {siteConfig.contact.address.full}
                  </p>
                  <p className="text-xs font-bold text-brand-700 mt-1">
                    PIN Code: {siteConfig.contact.address.pincode}
                  </p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 mt-2.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-5 border-t border-neutral-100">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Operating Hours</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Morning Sessions: <strong>{siteConfig.contact.timings.morningClub}</strong> (Mon–Sat)
                  </p>
                  <p className="text-xs text-neutral-600 mt-1">
                    Evening Coaching: <strong>{siteConfig.contact.timings.eveningSession}</strong>
                  </p>
                  <p className="text-xs text-neutral-600 mt-1">
                    Sunday Family Days: <strong>{siteConfig.contact.timings.sundayFamilyDay}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-5 border-t border-neutral-100">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Direct Phone Call</h4>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-brand-600 mt-1 block"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-5 border-t border-neutral-100">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-brand-600 mt-1 block break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Consultation Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-xl">
              <span className="text-brand-600 font-bold text-xs uppercase tracking-widest">
                Book a Session
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-dark-900 mt-1 mb-2">
                Book Your Free Club Assessment
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-8">
                Fill in your details below and our lead coach will arrange your complimentary body composition scan and session.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-brand-50 border border-brand-200 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-dark-900">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                    We've redirected you to WhatsApp with your details pre-filled. If it didn't open automatically, you can message Coach directly at {siteConfig.contact.displayPhone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold text-brand-600 hover:text-brand-700 underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Imran Patel / Ayesha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                      What are you most interested in?
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                    >
                      <option value="Morning Wellness Session (6:30 AM - 10:30 AM)">Morning Wellness Session & Shake Bar (6:30 AM - 10:30 AM)</option>
                      <option value="Personalized 1-on-1 Diet Plan">Personalized 1-on-1 Diet Plan & Weight Management</option>
                      <option value="Sunday Family Day Gathering">Sunday Family Day Gathering</option>
                      <option value="Outdoor Riverfront Fitness Walk">Outdoor Riverfront Fitness Walk</option>
                      <option value="General Club Tour & Assessment">General Club Tour & Body Composition Assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                      Message or Health Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your health goals (e.g. fat loss, energy, better diet, morning routine)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-brand-500/25 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Book Assessment via WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Live Interactive Google Map with Visual Pin Marker */}
        <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xl">
          <div className="p-6 bg-dark-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <span>Interactive Map & Pin Location</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-500/30 text-brand-300 border border-brand-500/40">
                    PIN: {siteConfig.contact.address.pincode}
                  </span>
                </h3>
                <p className="text-xs text-neutral-400">
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city}
                </p>
              </div>
            </div>

            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-80 sm:h-96 bg-neutral-200">
            <iframe
              title="Ramiza Wellness Zone Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Haji+Building+Opp+Khamosh+Footwear+Jamalpur+Ahmedabad+Gujarat+380001&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
            
            {/* Overlay Map Pin Card */}
            <div className="absolute top-4 left-4 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-600"></span>
                </span>
                <span className="font-display font-bold text-xs text-dark-900">Ramiza Wellness Zone</span>
              </div>
              <p className="text-[11px] text-neutral-600 leading-snug">
                Opp. Khamosh Footwear, Near Goliwala Book Store, Jamalpur, Ahmedabad - 380001
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* PDF Preview Modal */}
      <WellnessGuidePdfPreview
        isOpen={showPdfModal}
        onClose={() => setShowPdfModal(false)}
      />
    </section>
  );
}
