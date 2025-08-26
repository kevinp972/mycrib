'use client'
import { useState } from 'react';
import { photos } from '@/lib/imageData';
import { MasonryPhotoAlbum } from 'react-photo-album';
import "react-photo-album/masonry.css";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goToNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % photos.length);
    }
  };

  const goToPrevious = () => {
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === 0 ? photos.length - 1 : activeIndex - 1);
    }
  };

  return (
    <main className="w-full px-8">
      <div className="max-w-6xl mx-auto pb-20">
        <MasonryPhotoAlbum
          photos={[...photos]}
          onClick={({ index }: { index: number }) => setActiveIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth >= 460) return 2
            return 1
          }}
          spacing={(containerWidth) => {
            if (containerWidth > 900) return 15
            if (containerWidth >= 460) return 5
            if (containerWidth >= 300) return 20
            return 5
          }}
        />
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/85"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 z-60 w-10 h-10 flex items-center justify-center text-black/60 hover:text-black/80 transition-colors duration-200"
            aria-label="Close photo"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Left navigation area */}
          <div
            className="absolute left-0 top-0 w-1/2 h-full z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          />

          {/* Right navigation area */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          />

          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt ?? 'Photo'}
            className="max-w-[90vw] max-h-[85vh] object-contain pointer-events-none"
          />
        </div>
      )}
    </main>
  );
}