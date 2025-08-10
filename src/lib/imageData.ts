import type { StaticImageData } from 'next/image';

// A gallery image can be a static import (recommended) or a public path string
export type GalleryImage = StaticImageData | string;

// Import your images from `src/assets/images/gallery`
import img000002 from '@/assets/images/gallery/000002.JPG';
import img000003 from '@/assets/images/gallery/000003.JPG';
import img000006 from '@/assets/images/gallery/000006.JPG';
import img000027 from '@/assets/images/gallery/000027.JPG';
import img000038 from '@/assets/images/gallery/000038.JPG';
import img000038_1 from '@/assets/images/gallery/000038-1.JPG';
import img000040 from '@/assets/images/gallery/000040.JPG';
import img000044 from '@/assets/images/gallery/000044.JPG';
import img000047 from '@/assets/images/gallery/000047.JPG';
import img000048 from '@/assets/images/gallery/000048.JPG';
import img000049 from '@/assets/images/gallery/000049.JPG';
import img000050 from '@/assets/images/gallery/000050.JPG';
import img000050_1 from '@/assets/images/gallery/000050-1.JPG';

export type ImageOrientation = 'portrait' | 'landscape';

// Source-of-truth item (orientation optional)
interface GalleryItemInput {
  src: GalleryImage;
  orientation?: ImageOrientation;
  camera?: string;
  film?: string;
  location?: string;
  alt?: string;
}

// Public item (orientation guaranteed)
export interface GalleryItem extends Omit<GalleryItemInput, 'orientation'> {
  orientation: ImageOrientation;
}

// Derive orientation for statically imported images when not obvious upfront
function deriveOrientation(src: GalleryImage): ImageOrientation {
  if (typeof src === 'string') return 'landscape';
  return src.width >= src.height ? 'landscape' : 'portrait';
}

// Internal list with optional orientation; we auto-fill below
const galleryItemsInput: ReadonlyArray<GalleryItemInput> = [
  { src: img000003, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Siguniang Mountain' },
  { src: img000006, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Clouds and Mountains in Sichuan' },
  { src: img000002, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Siguniang Mountain with Alvin' },
  { src: img000027, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Goat in Sichuan' },
  { src: img000038, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags in Sichuan' },
  { src: img000038_1, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000040,   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000044,   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000047,   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000048,   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000049,   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000050,   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: img000050_1, location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
];

// Single exported list with orientation populated by default
export const galleryItems = galleryItemsInput.map((item) => ({
  ...item,
  orientation: item.orientation ?? deriveOrientation(item.src),
})) satisfies ReadonlyArray<GalleryItem>;

