import { useState, useRef, useEffect } from "react";
import { Track } from "@/pages/Index";
import { Circle, CircleX } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

interface TrackModalProps {
  track: Track;
  onClose: () => void;
}

const TrackModal = ({ track, onClose }: TrackModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { user } = useAuth();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBuyNow = async () => {
    if (!user) {
      alert('Please sign in to purchase tracks.');
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cosmic-black bg-opacity-95 backdrop-blur-sm">
      {/* Ink splash background effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-ink-splash animate-ink-float opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-ink-splash animate-ink-float opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-ink-splash animate-ink-float opacity-25" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 bg-cosmic-white rounded-2xl p-8 max-w-md w-full mx-4 border border-cosmic-pink/30 shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-cosmic-black hover:text-cosmic-red transition-colors duration-300"
        >
          <CircleX className="w-6 h-6" />
        </button>

        {/* Track Image */}
        <div className="aspect-square mb-6 overflow-hidden rounded-xl">
          <img 
            src={track.image_url} 
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Track Info */}
        <div className="text-center mb-6">
          <h2 className="font-great-vibes text-3xl text-cosmic-black mb-2 animate-cosmic-glow">
            {track.title}
          </h2>
          <p className="font-montserrat text-cosmic-black/70 text-lg">
            {track.artist}
          </p>
        </div>

        {/* Audio Player */}
        <div className="mb-6">
          <audio 
            ref={audioRef}
            src={track.audio_url}
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className="flex items-center justify-center mb-4">
            <button 
              onClick={togglePlayPause}
              className="w-16 h-16 bg-gradient-to-r from-cosmic-pink to-cosmic-red rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cosmic-pink/30 transition-all duration-300"
            >
              <Circle className={`w-8 h-8 text-cosmic-white ${isPlaying ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-cosmic-black/20 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-cosmic-pink to-cosmic-red h-2 rounded-full transition-all duration-100"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-cosmic-black/60 font-montserrat">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Purchase Button */}
        <button 
          onClick={handleBuyNow}
          className="w-full bg-cosmic-rose-gold text-cosmic-white py-3 rounded-full font-montserrat font-medium hover:bg-cosmic-rose-gold/80 transition-colors duration-300"
        >
          Buy Now - $1
        </button>

        {/* Exit message */}
        <p className="text-center text-cosmic-black/50 text-sm font-montserrat mt-4">
          Return to Nebula
        </p>
      </div>
    </div>
  );
};

export default TrackModal;
