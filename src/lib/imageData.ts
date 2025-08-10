import type { StaticImageData } from 'next/image';

export type GalleryImage = StaticImageData | string;

// Tell TypeScript about webpack's require.context injected helper
declare const require: {
  context: (
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ) => WebpackRequireContext<unknown>;
};

// Auto-import all images from `src/assets/images/gallery` as a map keyed by filename (without extension)
// Uses webpack's `require.context` which is supported by Next.js' webpack build
type WebpackRequireContext<T> = {
  keys: () => string[]; // returns an array of all the file paths in the context.
  (id: string): { default: T }; // when called with a file path, it returns the module (in this case, an image module).
};

function importAllGalleryImages(): Record<string, GalleryImage> {
  const result: Record<string, GalleryImage> = {};

  // Prefer Turbopack's import.meta.glob when available
  try {
    const maybeGlob = (import.meta as unknown as { glob?: (pattern: string, options?: { eager?: boolean }) => Record<string, unknown> }).glob;
    if (typeof maybeGlob === 'function') {
      const modules = maybeGlob('../assets/images/gallery/*.{png,jpg,jpeg,JPG,JPEG}', { eager: true });
      for (const [path, mod] of Object.entries(modules)) {
        const raw = (mod as { default?: unknown }).default ?? mod;
        if (!raw) continue;
        const fileNameWithExt = path.split('/').pop() as string;
        const baseName = fileNameWithExt.replace(/\.[^/.]+$/, '');
        const normalized =
          typeof raw === 'string'
            ? raw
            : (raw as StaticImageData).src ?? (raw as unknown as { src?: string }).src ?? (raw as unknown as string);
        if (!normalized) continue;
        result[baseName] = normalized as GalleryImage;
      }
      return result;
    }
  } catch {
    // Ignore and fall back to webpack's require.context
  }

  // Fallback for webpack environments
  try {
    // The following uses webpack's require.context so the bundler can statically analyze the directory
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const context = require.context('../assets/images/gallery', false, /\.(png|jpe?g)$/i);
    for (const key of context.keys()) {
      const mod = context(key) as unknown as { default?: unknown } | unknown;
      const fileNameWithExt = key.replace('./', '');
      const baseName = fileNameWithExt.replace(/\.[^/.]+$/, '');
      const raw = (mod as { default?: unknown }).default ?? mod;
      if (!raw) continue;
      const normalized =
        typeof raw === 'string'
          ? raw
          : (raw as StaticImageData).src ?? (raw as unknown as { src?: string }).src ?? (raw as unknown as string);
      if (!normalized) continue;
      result[baseName] = normalized as GalleryImage;
    }
  } catch {
    // As a last resort, return empty map
  }

  return result;
}

export const galleryByName: Readonly<Record<string, GalleryImage>> = importAllGalleryImages();

function getGalleryImage(name: string): GalleryImage {
  return galleryByName[name] ?? '/placeholder.png';
}

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
  if (!src) return 'landscape';
  if (typeof src === 'string') return 'landscape';
  return src.width >= src.height ? 'landscape' : 'portrait';
}

// Internal list with optional orientation; we auto-fill below
const galleryItemsInput: ReadonlyArray<GalleryItemInput> = [
  { src: getGalleryImage('000003'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Siguniang Mountain' },
  { src: getGalleryImage('000006'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Clouds and Mountains in Sichuan' },
  { src: getGalleryImage('000002'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Siguniang Mountain with Alvin' },
  { src: getGalleryImage('000027'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Goat in Sichuan' },
  { src: getGalleryImage('000038'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags in Sichuan' },
  { src: getGalleryImage('000040'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: getGalleryImage('000044'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: getGalleryImage('000047'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: getGalleryImage('000048'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: getGalleryImage('000049'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: getGalleryImage('000050'),   location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
  { src: getGalleryImage('000050-1'), location: 'Western Sichuan, China', film: 'Kodak UltraMax 400' },
];

// Single exported list with orientation populated by default
export const galleryItems = galleryItemsInput.map((item) => ({
  ...item,
  orientation: item.orientation ?? deriveOrientation(item.src),
})) satisfies ReadonlyArray<GalleryItem>;

