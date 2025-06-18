import { Track } from "@/pages/Index";
import { Circle } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface TrackCardProps {
  track: Track;
  onPlay: () => void;
}

const TrackCard = ({ track, onPlay }: TrackCardProps) => {
  const handleBuyNow = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!supabase) {
      alert('Payment system is not configured. Please set up Supabase integration.');
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          trackId: track.id,
          trackTitle: track.title
        }
      });

      if (error) {
        console.error('Payment error:', error);
        alert('Payment failed. Please try again.');
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="group relative bg-cosmic-black border border-cosmic-pink/30 rounded-lg overflow-hidden hover:border-cosmic-pink hover:shadow-lg hover:shadow-cosmic-pink/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
      {/* Ink splash border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-pink/10 via-transparent to-cosmic-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 p-6" onClick={onPlay}>
        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
          <img 
            src={track.image_url} 
            alt={track.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <h3 className="font-great-vibes text-xl text-cosmic-white mb-2 group-hover:text-cosmic-pink transition-colors duration-300">
          {track.title}
        </h3>
        
        <p className="font-montserrat text-cosmic-white/70 text-sm mb-1">
          {track.artist}
        </p>
        
        <p className="font-montserrat text-cosmic-white/50 text-xs mb-4">
          {track.duration}
        </p>

        <div className="flex gap-3">
          <button 
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cosmic-pink to-cosmic-red text-cosmic-white py-2 px-4 rounded-full font-montserrat text-sm font-medium hover:shadow-lg hover:shadow-cosmic-pink/30 transition-all duration-300"
            onClick={onPlay}
          >
            <Circle className="w-4 h-4 fill-current" />
            Play
          </button>
          
          <button 
            className="flex-1 bg-cosmic-rose-gold text-cosmic-white py-2 px-4 rounded-full font-montserrat text-sm font-medium hover:bg-cosmic-rose-gold/80 transition-colors duration-300"
            onClick={handleBuyNow}
          >
            $1
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
