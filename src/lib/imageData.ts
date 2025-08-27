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
  if (typeof (value as { src?: unknown }).src === 'string') return value as StaticImageData;
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
  width?: number;
  height?: number;
};

const photoMetaList: ReadonlyArray<PhotoMeta> = [
  { name: '000027', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Goat in Sichuan' },
  { name: '000049', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Rocky Mountain 2' },
  { name: '000002', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Siguniang Mountain' },
  { name: '000040', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags on Hill' },
  { name: '000006', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Clouds and Mountains in Sichuan' },
  { name: '000050', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Guy Standing by Highway' },
  { name: '000038', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags in Sichuan' },
  { name: '000044', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Alvin Shawshank Redemption' },
  { name: '000047', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Prayer Flags in Sunlight' },
  { name: '000048', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Rocky Mountain 1' },
  { name: '000052', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Wedding by River' },
  { name: '000055', location: 'Western Sichuan, China', film: 'Kodak UltraMax 400', alt: 'Rocky Mountain 3' },
  { name: '000000010020', location: 'Joshua Tree, California, USA', film: 'Kodak UltraMax 400', alt: 'Joshua Trees' },
  { name: '000000010030', location: 'Paris, France', film: 'Kodak UltraMax 400', alt: 'Paris Traintracks', width: 2075, height: 3130 },
  { name: '000000010031', location: 'San Diego, California, USA', film: 'Kodak UltraMax 400', alt: 'Classic Car' },
  { name: '000000020023', location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Middle Finger' },
  { name: '000000020036', location: 'Grimes Canyon, California, USA', film: 'Kodak UltraMax 400', alt: 'Grimes Canyon' },
  { name: '1228844_0013', location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel 1' },
  { name: '1228844_0017', location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel 2' },
  { name: '1228844_0023', location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel Sunset 1' },
  { name: '1228844_0028', location: 'Carmel, California, USA', film: 'Kodak UltraMax 400', alt: 'Carmel Sunset 2' },
  { name: '1228844_0029', location: 'Ebina, Japan', film: 'Kodak UltraMax 400', alt: 'Yama' },
  { name: '1228844_0030', location: 'Ebina, Japan', film: 'Kodak UltraMax 400', alt: 'Tree under Clouds' },
  { name: '1228844_0032', location: 'Kita-Kamakura, Japan', film: 'Kodak UltraMax 400', alt: 'Golden Leaves' },
  { name: '1228844_0033', location: 'Kita-Kamakura, Japan', film: 'Kodak UltraMax 400', alt: 'Yuanjuesi 1' },
  { name: '1228844_0035', location: 'Kita-Kamakura, Japan', film: 'Kodak UltraMax 400', alt: 'Yuanjuesi 2' },
  // { name: '1228844_0043', location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Lovebirds in Hiking Trail' },
  // { name: '1228844_0048', location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Meditation 1' },
  { name: '1228844_0049', location: 'Ramona, California, USA', film: 'Kodak UltraMax 400', alt: 'Meditation 2', width: 3035, height: 4346 },
  // { name: '1228844_0051', location: 'Julian, California, USA', film: 'Kodak UltraMax 400', alt: 'Light B/W' },
  // { name: '1228844_0069', location: 'Altadena, California, USA', film: 'Kodak UltraMax 400', alt: 'Branch in Sun', width: 3035, height: 4346 },
  { name: '26640008', location: 'Shanghai, China', film: 'Kodak UltraMax 400', camera: 'The Lomography Konstruktor', alt: 'Ian with Gun' },
  { name: '47500002', location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Jessicas hands' },
  { name: '47500005', location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Temple' },
  { name: '47500009', location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Waitan' },
  { name: '47500014', location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Sunrise 1' },
  { name: '47500015', location: 'Shanghai, China', film: 'Kodak UltraMax 400', alt: 'Shanghai Sunrise 2' },
  { name: 'IMG_1', location: 'Amsterdam, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_2', location: 'Amsterdam, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_3', location: 'Amsterdam, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_4', location: 'Utrecht, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_5', location: 'Utrecht, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_6', location: 'Utrecht, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_7', location: 'Utrecht, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_8', location: 'Utrecht, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_9', location: 'Amsterdam, Netherlands', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_10', location: 'Amsterdam, Netherlands', camera: 'iPhone 13' },
  { name: 'IMG_11', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_12', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_13', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_14', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_15', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_16', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_17', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_18', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_19', location: 'Nice, France', camera: 'Canon IXUS 80 IS' },
  { name: 'IMG_5710', camera: 'Canon IXUS 80 IS', location: 'Nice, France', alt: 'Kenny Garrett' },
  { name: '20240829-IMG_5782', camera: 'Canon IXUS 80 IS', location: 'Amsterdam, Netherlands', alt: 'Saxophonist in Amsterdam' },
  { name: '20240829-IMG_5783', camera: 'Canon IXUS 80 IS', location: 'Amsterdam, Netherlands', alt: 'Guitarist in Amsterdam' },
  { name: 'IMG_5898', camera: 'Canon IXUS 80 IS', location: 'Japan', alt: 'Worker with Head Covered' },
  { name: 'IMG_5921', camera: 'Canon IXUS 80 IS', location: 'Tokyo, Japan', alt: 'Girl in front of Monet Painting' },
  { name: 'IMG_5941', camera: 'Canon IXUS 80 IS', location: 'Tokyo, Japan', alt: 'Guy Closing Shop' },
  { name: 'IMG_5967', camera: 'Canon IXUS 80 IS', location: 'Shimokitazawa, Japan', alt: 'Guy Biking in Shimokitazawa' },
  { name: 'IMG_5985', camera: 'Canon IXUS 80 IS', location: 'Shimokitazawa, Japan', alt: 'No Music No Life' },
  { name: 'IMG_5986', camera: 'Canon IXUS 80 IS', location: 'Shimokitazawa, Japan', alt: 'Worker in Shimokitazawa' },
  { name: 'IMG_5990', camera: 'Canon IXUS 80 IS', location: 'Shimokitazawa, Japan', alt: 'Just Bring It' },
  { name: 'IMG_6005', camera: 'Canon IXUS 80 IS', location: 'Japan', alt: 'White Collar in Front of Crosswalk' },
  { name: 'IMG_6022', camera: 'Canon IXUS 80 IS', location: 'Japan', alt: 'Two Dogs' },
  { name: 'IMG_6024', camera: 'Canon IXUS 80 IS', location: 'Japan', alt: 'Bus Station' },
  { name: 'IMG_6051', camera: 'Canon IXUS 80 IS', location: 'Kita-Kamakura, Japan', alt: 'Yuanjuesi 3' },
  { name: 'IMG_6061', camera: 'Canon IXUS 80 IS', location: 'Kamakura, Japan', alt: 'Social Phenomenon in Kamakura' },
  { name: 'IMG_6103', camera: 'Canon IXUS 80 IS', location: 'Shibuya, Japan', alt: 'Liberty Walk RX7' },
  { name: 'IMG_6109', camera: 'Canon IXUS 80 IS', location: 'Hakone, Japan', alt: 'Worker in Hakone OAM' },
  { name: 'IMG_6111', camera: 'Canon IXUS 80 IS', location: 'Hakone, Japan', alt: 'Art Installation in Hakone OAM' },
  { name: 'IMG_6156', camera: 'Canon IXUS 80 IS', location: 'San Diego, California, USA', alt: 'Mingguang Smoking' },
  { name: 'IMG_6197', camera: 'Canon IXUS 80 IS', alt: 'Gas Station & Trees' },
  { name: 'IMG_6285', camera: 'Canon IXUS 80 IS', location: 'New Orleans, USA', alt: 'Poet & Typewriter' },
  { name: 'IMG_6299', camera: 'Canon IXUS 80 IS', location: 'New Orleans, USA', alt: 'Racoon' },
  { name: 'IMG_6323', camera: 'Canon IXUS 80 IS', location: 'New Orleans, USA', alt: 'Hanging Man' },
  { name: 'IMG_6326', camera: 'Canon IXUS 80 IS', location: 'New Orleans, USA', alt: 'Eyes Covered Art Installation' },
  { name: 'IMG_6344', camera: 'Canon IXUS 80 IS', location: 'New Orleans, USA', alt: 'Never Let Anyone Tell You Who You Are' },
  { name: 'IMG_6365', camera: 'Canon IXUS 80 IS', location: 'New Orleans, USA', alt: 'Schindler House' },
  { name: 'IMG_6368', camera: 'Canon IXUS 80 IS', location: 'Los Angeles, USA', alt: 'Schindler House 1' },
  { name: 'IMG_6375', camera: 'Canon IXUS 80 IS', location: 'Los Angeles, USA', alt: 'Schindler House 2', width: 2448, height: 3264 },
  { name: 'IMG_6388', camera: 'Canon IXUS 80 IS', location: 'Los Angeles, USA', alt: 'Melrose Market 1' },
  { name: 'IMG_6391', camera: 'Canon IXUS 80 IS', location: 'Los Angeles, USA', alt: 'Melrose Market 2' },
  { name: 'IMG_6393', camera: 'Canon IXUS 80 IS', location: 'Los Angeles, USA', alt: 'Jazz Photos' },
];

export const photos: ReadonlyArray<Photo> = photoMetaList.reduce<Photo[]>((acc, meta) => {
  const img = galleryByName[meta.name];
  if (!img) return acc;
  const width = meta.width ?? img.width;
  const height = meta.height ?? img.height;
  const base: Photo = {
    src: img.src,
    width,
    height,
    camera: meta.camera,
    film: meta.film,
    location: meta.location,
    orientation: meta.orientation ?? deriveOrientationFromSize(width, height),
  };
  if (meta.alt) {
    base.alt = meta.alt;
  }
  acc.push(base);
  return acc;
}, []);

