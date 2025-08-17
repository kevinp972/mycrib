 'use client'
import { useState } from 'react';
import { photos } from '@/lib/imageData';
import { MasonryPhotoAlbum } from 'react-photo-album';
import "react-photo-album/masonry.css";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt ?? 'Photo'}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-md shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}