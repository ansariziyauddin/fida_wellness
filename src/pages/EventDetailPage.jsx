import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/events';
import { siteConfig } from '../data/siteConfig';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowLeft, MessageCircle, Share2, Sparkles } from 'lucide-react';

export default function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h2 className="font-display font-black text-3xl text-dark-900">Event Not Found</h2>
        <p className="mt-3 text-neutral-600">The event you are looking for does not exist or has been updated.</p>
        <Link
          to="/events"
          className="mt-6 inline-flex items-center gap-2 bg-brand-500 text-white font-bold text-sm px-6 py-3 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.shortDesc,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="py-6">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Events Calendar</span>
          </Link>
        </div>

        {/* Main Event Article Card */}
        <article className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xl">
          
          {/* Header Image */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md text-brand-300 font-bold text-xs border border-white/10">
                {event.category}
              </span>
              {event.isFeatured && (
                <span className="px-3.5 py-1.5 rounded-full bg-brand-500 text-white font-bold text-xs">
                  Featured Event
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
              <span className="text-brand-300 font-display font-bold text-xs sm:text-sm uppercase tracking-wider">
                {event.date} • {event.day}
              </span>
              <h1 className="font-display font-black text-2xl sm:text-4xl text-white mt-1 leading-tight">
                {event.title}
              </h1>
            </div>
          </div>

          {/* Details & Agenda */}
          <div className="p-6 sm:p-10">
            
            {/* Meta Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 mb-8 border-b border-neutral-100">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase">Timing</p>
                  <p className="text-sm font-bold text-dark-900">{event.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase">Location</p>
                  <p className="text-sm font-bold text-dark-900">{event.location}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl text-dark-900">About This Gathering</h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                {event.fullDesc}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 pt-8 border-t border-neutral-100">
              <h3 className="font-display font-bold text-lg text-dark-900 mb-4">Event Highlights & What to Expect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {event.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-50/60 border border-brand-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions / RSVP */}
            <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={siteConfig.whatsapp.getLink(`Hi Ramiza Wellness! I would like to RSVP for "${event.title}" on ${event.date}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm RSVP via WhatsApp</span>
              </a>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleShare}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs sm:text-sm px-5 py-4 rounded-full transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Event</span>
                </button>
              </div>
            </div>

          </div>

        </article>

      </div>
    </div>
  );
}
