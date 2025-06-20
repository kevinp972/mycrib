import MusicCard from '@/components/MusicCard';
import { musicPerformances } from '@/lib/musicData';

export default function MusicPage() {
  return (
    <main className="w-full px-8 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-6 gap-y-30">
          {musicPerformances.map((performance, index) => (
            <MusicCard key={index} {...performance} />
          ))}
        </div>
      </div>
    </main>
  );
} 