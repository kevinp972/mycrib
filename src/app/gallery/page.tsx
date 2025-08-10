import { photos } from '@/lib/imageData';
import { MasonryPhotoAlbum } from 'react-photo-album';

export default function GalleryPage() {
  return (
    <main className="w-full px-8">
      <div className="max-w-6xl mx-auto pb-20">
        <MasonryPhotoAlbum photos={[...photos]} />
      </div>
    </main>
  );
}