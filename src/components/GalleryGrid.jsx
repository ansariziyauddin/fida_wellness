import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../data/gallery';
import { Sparkles, X, ZoomIn } from 'lucide-react';

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-neutral-900 text-white relative">
      {/* Subtle background ambiance */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Memories & Life at Club</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase">
            PHOTO <span className="text-brand-400">GALLERY.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            A vibrant look into our daily morning nutrition sessions, joyful family gatherings, healthy meal demos, and community spirit.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 pb-4 sm:pb-0 overflow-x-auto no-scrollbar mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white shadow-md scale-105'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-neutral-800 cursor-pointer h-72 sm:h-80 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-700/50 hover:border-brand-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-white">{item.title}</h4>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-brand-400 font-bold text-xs uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {selectedImage.caption}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
