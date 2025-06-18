
import { Track } from "@/pages/Index";
import TrackCard from "./TrackCard";

interface TrackGridProps {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
}

const TrackGrid = ({ tracks, onTrackSelect }: TrackGridProps) => {
  return (
    <section id="tracks" className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-great-vibes text-4xl md:text-5xl text-cosmic-white mb-4 animate-cosmic-glow">
          Her Musical Universe
        </h2>
        <p className="font-montserrat text-cosmic-white/70 text-lg max-w-2xl mx-auto">
           Celestial tracks waiting to transport you to another dimension
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tracks.map((track) => (
          <TrackCard 
            key={track.id} 
            track={track} 
            onPlay={() => onTrackSelect(track)}
          />
        ))}
      </div>
    </section>
  );
};

export default TrackGrid;
