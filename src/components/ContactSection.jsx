import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Ramiza Wellness Zone!\n\nName: ${formData.name}\nMobile Number: ${formData.phone}\nMessage: ${formData.message || 'I would like to know more about Ramiza Wellness Zone.'}`;
    window.open(siteConfig.whatsapp.getLink(text), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-dark-900 tracking-tight uppercase leading-tight">
            GET IN <span className="text-brand-600">TOUCH.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Send us a message below and our wellness coach will get back to you directly.
          </p>
        </div>

        {/* Clean Centered Form Card */}
        <div className="bg-white p-7 sm:p-10 rounded-3xl border border-neutral-200 shadow-xl">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-brand-50 border border-brand-200 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-dark-900">Message Prepared!</h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                We've redirected you to WhatsApp with your details pre-filled.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-brand-600 hover:text-brand-700 underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-dark-900 uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}



