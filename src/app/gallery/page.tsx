import { photos } from '@/lib/imageData';

export default function GalleryPage() {
  return (
    <main className="w-full px-8">
      <div className="max-w-6xl mx-auto pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 [column-gap:2rem]">
          {photos.map(({ src }, i: number) => (
            <div key={i} className="break-inside-avoid">
              <img src={src} alt="" className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}