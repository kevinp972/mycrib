'use client'
import { photos } from '@/lib/imageData';
import { MasonryPhotoAlbum } from 'react-photo-album';
import "react-photo-album/masonry.css";

export default function GalleryPage() {
  return (
    <main className="w-full px-8">
      <div className="max-w-6xl mx-auto pb-20">
        <MasonryPhotoAlbum 
          photos={[...photos]} 
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
    </main>
  );
}