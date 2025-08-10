import type { StaticImageData } from 'next/image';
import { galleryItems, type GalleryImage } from '@/lib/imageData';

export default function GalleryPage() {
  return (
    <main className="w-full px-8 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 [column-gap:2rem]">
          {galleryItems.map(({ src }: { src: GalleryImage }, i: number) => (
            <div key={i} className="mb-[5rem] break-inside-avoid">
              {typeof src === 'string' ? (
                <img src={src} alt="" className="w-full h-auto" loading="lazy" />
              ) : (
                <img src={src.src} alt="" className="w-full h-auto" loading="lazy" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}