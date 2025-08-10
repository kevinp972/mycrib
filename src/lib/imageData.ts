import type { StaticImageData } from 'next/image';

// A gallery image can be a static import (recommended) or a public path string
export type GalleryImage = StaticImageData | string;

// Import your images from `src/assets/images/gallery`
import img000002 from '@/assets/images/gallery/000002.JPG';
import img000003 from '@/assets/images/gallery/000003.JPG';
import img000006 from '@/assets/images/gallery/000006.JPG';

export type ImageOrientation = 'portrait' | 'landscape';

export interface GalleryItem {
  src: GalleryImage;
  orientation: ImageOrientation;
  camera?: string;
  film?: string;
  location?: string;
  alt?: string;
} 

// Single source of truth for gallery data
export const galleryItems: GalleryItem[] = [
  { src: img000002, orientation: 'portrait',  location: 'Western Sichuan, China' },
  { src: img000003, orientation: 'portrait',  location: 'Western Sichuan, China' },
  { src: img000006, orientation: 'landscape', location: 'Western Sichuan, China' },
] satisfies ReadonlyArray<GalleryItem>;

