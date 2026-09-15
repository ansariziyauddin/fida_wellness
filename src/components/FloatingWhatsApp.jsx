import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-white text-neutral-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-2 max-w-[220px] animate-bounce">
          <span>👋 Have questions? Chat with us on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-600 p-0.5"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-neutral-100" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.whatsapp.getLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Chat with Ramiza Wellness Zone on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-500 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
