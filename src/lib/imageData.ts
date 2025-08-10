import type { StaticImageData } from 'next/image';

export type ImageOrientation = 'portrait' | 'landscape';

export interface Photo {
  src: string;
  width: number;
  height: number;
  key?: string;
  alt?: string;
  title?: string;
  href?: string;
  label?: string;
  srcSet?: Array<{ src: string; width: number; height: number }>;
  orientation?: ImageOrientation;
  camera?: string;
  film?: string;
  location?: string;
}

function toStaticImageData(value: unknown): StaticImageData | undefined {
  if (!value) return undefined;
  if (typeof value === 'string') {
    // Create a minimal StaticImageData-like object to satisfy typing consistently
    return { src: value, width: 0, height: 0 } as unknown as StaticImageData;
  }
  const maybe = value as { src?: unknown };
  if (maybe && typeof maybe.src === 'string') {
    return value as StaticImageData;
  }
  return undefined;
}

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

function importAllGalleryImages(): Record<string, StaticImageData> {
  const result: Record<string, StaticImageData> = {};

  // Prefer Turbopack's import.meta.glob when available
  try {
    const maybeGlob = (import.meta as unknown as { glob?: (pattern: string, options?: { eager?: boolean }) => Record<string, unknown> }).glob;
    if (typeof maybeGlob === 'function') {
      const modules = maybeGlob('../assets/images/gallery/*.{png,jpg,jpeg,JPG,JPEG}', { eager: true });
      for (const [path, mod] of Object.entries(modules)) {
        const raw = (mod as { default?: unknown }).default ?? mod;
        const fileNameWithExt = path.split('/').pop() as string;
        const baseName = fileNameWithExt.replace(/\.[^/.]+$/, '');
        const staticImg = toStaticImageData(raw);
        if (!staticImg) continue;
        result[baseName] = staticImg;
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
      const staticImg = toStaticImageData(raw);
      if (!staticImg) continue;
      result[baseName] = staticImg;
    }
  } catch {
    // As a last resort, return empty map
  }

  return result;
}

export const galleryByName: Readonly<Record<string, StaticImageData>> = importAllGalleryImages();

function deriveOrientationFromSize(width: number, height: number): ImageOrientation {
  return width >= height ? 'landscape' : 'portrait';
}

type PhotoMeta = {
  name: string;
  alt?: string;
  camera?: string;
  film?: string;
  location?: string;
  orientation?: ImageOrientation;
};

const photoMetaList: ReadonlyArray<PhotoMeta> = [
  { name: '000003',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Siguniang Mountain' },
  { name: '000006',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Clouds and Mountains in Sichuan' },
  { name: '000027',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Goat in Sichuan' },
  { name: '000038',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags in Sichuan' },
  { name: '000040',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags on Hill' },
  { name: '000044',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Alvin Shawshank Redemption' },
  { name: '000047',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags in Sunlight' },
  { name: '000048',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Rocky Mountain 1' },
  { name: '000049',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Rocky Mountain 2' },
  { name: '000050',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Guy Standing by Highway' },
  { name: '000052',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Wedding by River' },
  { name: '000055',            location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Rocky Mountain 3' },
  { name: '000000010020',      location: 'Joshua Tree, California, USA', film: 'Kodak UltraMax 400', alt: 'Joshua Trees' },
  { name: '000000010030',      location: 'Paris, France', film: 'Kodak UltraMax 400', alt: 'Paris Traintracks' },
  { name: '000000010031',      location: 'San Diego, California, USA', film: 'Kodak UltraMax 400', alt: 'Classic Car' },
  { name: '000000020023',      location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Middle Finger' },
  { name: '000000020036',      location: 'Grimes Canyon, California, USA', film: 'Kodak UltraMax 400', alt: 'Grimes Canyon' },
  { name: '1228844_0013',      location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel 1' },
  { name: '1228844_0017',      location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel 2' },
  { name: '1228844_0023',      location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel Sunset 1' },
  { name: '1228844_0028',      location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel Sunset 2' },
  { name: '1228844_0029',      location: 'Ebina, Japan', film: 'Kodak UltraMax 400', alt: 'Yama' },
  { name: '1228844_0030',      location: 'Ebina, Japan', film: 'Kodak UltraMax 400', alt: 'Tree under Clouds' },
  { name: '1228844_0032',      location: 'Kita-Kamakura, Japan', film: 'Kodak UltraMax 400', alt: 'Golden Leaves' },
  { name: '1228844_0033',      location: 'Kita-Kamakura, Japan', film: 'Kodak UltraMax 400', alt: 'Yuanjuesi 1' },
  { name: '1228844_0035',      location: 'Kita-Kamakura, Japan', film: 'Kodak UltraMax 400', alt: 'Yuanjuesi 2' },
  { name: '1228844_0043',      location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Lovebirds in Hiking Trail' },
  { name: '1228844_0048',      location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Meditation 1' },
  { name: '1228844_0049',      location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Meditation 2' },
  { name: '1228844_0051',      location: 'Julian, California, USA', film: 'Kodak UltraMax 400', alt: 'Light B/W' },
  { name: '1228844_0069',      location: 'Altadena, California, USA', film: 'Kodak UltraMax 400', alt: 'Branch in Sun' },
  { name: '26640008',          location: 'Shanghai, China', film: 'Kodak UltraMax 400', camera: 'The Lomography Konstruktor', alt: 'Ian with Gun' },
  { name: '4750002',           location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Jessicas hands' },
  { name: '4750005',           location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Temple' },
  { name: '4750009',           location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Waitan' },
  { name: '4750014',           location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Sunrise 1' },
  { name: '4750015',           location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Sunrise 2' },
];

export const photos: ReadonlyArray<Photo> = photoMetaList.reduce<Photo[]>((acc, meta) => {
  const img = galleryByName[meta.name];
  if (!img) return acc;
  const base: Photo = {
    src: img.src,
    width: img.width,
    height: img.height,
    camera: meta.camera,
    film: meta.film,
    location: meta.location,
    orientation: meta.orientation ?? deriveOrientationFromSize(img.width, img.height),
  };
  if (meta.alt) {
    base.alt = meta.alt;
  }
  acc.push(base);
  return acc;
}, []);

