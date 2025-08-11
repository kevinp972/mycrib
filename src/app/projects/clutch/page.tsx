import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import _20250810220324 from '@/assets/images/projects/clutch/_20250810220324.jpg';
import _20250810220405 from '@/assets/images/projects/clutch/_20250810220405.jpg';
import _20250810220409 from '@/assets/images/projects/clutch/_20250810220409.jpg';
import _20250810220412 from '@/assets/images/projects/clutch/_20250810220412.jpg';
import _20250810220415 from '@/assets/images/projects/clutch/_20250810220415.jpg';
import _20250810220420 from '@/assets/images/projects/clutch/_20250810220420.jpg';
import _20250810220423 from '@/assets/images/projects/clutch/_20250810220423.jpg';
import _20250810220426 from '@/assets/images/projects/clutch/_20250810220426.jpg';

export default function ClutchProjectPage() {
  const images: ReadonlyArray<{ src: StaticImageData; alt: string }> = [
    { src: _20250810220324, alt: 'Clutch project photo 1' },
    { src: _20250810220405, alt: 'Clutch project photo 2' },
    { src: _20250810220409, alt: 'Clutch project photo 3' },
    { src: _20250810220412, alt: 'Clutch project photo 4' },
    { src: _20250810220415, alt: 'Clutch project photo 5' },
    { src: _20250810220420, alt: 'Clutch project photo 6' },
    { src: _20250810220423, alt: 'Clutch project photo 7' },
    { src: _20250810220426, alt: 'Clutch project photo 8' },
  ];

  return (
    <main className="w-full px-8 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl text-[#38344c] font-semibold tracking-tight">Clutch Replacement on My Friend&apos;s 2017 Mustang GT</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Spring 2025. A friend invited me to help replace the clutch on his 2017 Mustang GT with a racing-grade upgrade.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We tore down the exhaust, drive shaft, catalytic converter, starter, bell housing, and transmission.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">What an absolute blast.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-24">
          {images.map((img, idx) => (
            <figure key={idx} className="w-[180px]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}


