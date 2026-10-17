import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Morning Wellness Session',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Fida Wellness Zone!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.interest}\nNote: ${formData.message || 'I would like to visit the club.'}`;
    window.open(siteConfig.whatsapp.getLink(text), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-neutral-50">
      {/* Banner */}
      <section className="relative py-20 sm:py-28 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase max-w-4xl mx-auto">
            VISIT OR <span className="text-brand-400">CONTACT US</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Drop by our Danilimda club in Ahmedabad or message us directly on WhatsApp to attend your first session.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="bg-gradient-to-br from-brand-600 to-emerald-600 text-white p-8 rounded-3xl shadow-xl">
              <span className="text-brand-100 font-bold text-xs uppercase tracking-widest">
                Quickest Response
              </span>
              <h3 className="font-display font-black text-2xl mt-1 mb-3">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-brand-100 text-sm leading-relaxed mb-6">
                Have questions regarding morning session timings, nutrition guidance, or bringing your family? Our coach is ready to assist!
              </p>
              <a
                href={siteConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-dark-900 hover:bg-black text-white font-bold text-sm w-full py-4 rounded-2xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-brand-400" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Address & Info */}
            <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-md space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Club Location</h4>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                    {siteConfig.contact.address.full}
                  </p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 mt-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-neutral-100">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Phone Call</h4>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm font-semibold text-neutral-700 hover:text-brand-600 mt-1 block"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-neutral-100">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Email Us</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-neutral-700 hover:text-brand-600 mt-1 block break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-neutral-100">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark-900 text-base">Club Hours</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Open Hours: <strong>{siteConfig.contact.timings.fullDay}</strong> (Monday to Sunday)
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Morning Nutrition Sessions: <strong>{siteConfig.contact.timings.morningClub}</strong>
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Evening Consultations: <strong>{siteConfig.contact.timings.eveningSession}</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-xl">
              <span className="text-brand-600 font-bold text-xs uppercase tracking-widest">
                Send a Message
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-dark-900 mt-1 mb-2">
                Book a Free Club Visit or Consultation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-8">
                Fill out the brief form below and our lead coach will connect with you right away.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-brand-50 border border-brand-200 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-dark-900">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                    We've redirected you to WhatsApp with your details pre-filled. If it didn't open automatically, you can message us directly at {siteConfig.contact.displayPhone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold text-brand-600 hover:text-brand-700 underline"
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
                      placeholder="e.g. Rahul Sharma / Fatima"
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
                      <option value="Morning Wellness Session">Morning Wellness Session (7:00 AM - 1:00 PM)</option>
                      <option value="Daily Club Visit">Daily Club Visit (Mon - Sun, 7:00 AM - 7:00 PM)</option>
                      <option value="Nutrition & Healthy Eating Guidance">Nutrition & Healthy Eating Guidance</option>
                      <option value="Outdoor Riverfront Walks & Events">Outdoor Riverfront Walks & Events</option>
                      <option value="General Club Tour / Consultation">General Club Tour / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your wellness goals or preferred day to visit..."
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
                    <span>Submit & Connect on WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
