
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import HeroSection from "@/components/HeroSection";
import TrackGrid from "@/components/TrackGrid";
import TrackModal from "@/components/TrackModal";
import AuthModal from "@/components/AuthModal";
import UserMenu from "@/components/UserMenu";

export interface Track {
  id: number;
  title: string;
  artist: string;
  price: number;
  duration: string;
  image_url: string;
  audio_url: string;
}

// Mock data for tracks
const mockTracks: Track[] = [
  {
    id: 1,
    title: "Ethereal Dreams",
    artist: "Luna Cosmos",
    price: 1,
    duration: "3:42",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 2,
    title: "Midnight Whispers",
    artist: "Luna Cosmos",
    price: 1,
    duration: "4:15",
    image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 3,
    title: "Cosmic Silk",
    artist: "Luna Cosmos",
    price: 1,
    duration: "5:03",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 4,
    title: "Rose Galaxy",
    artist: "Luna Cosmos",
    price: 1,
    duration: "3:28",
    image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 5,
    title: "Velvet Nebula",
    artist: "Luna Cosmos",
    price: 1,
    duration: "4:37",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 6,
    title: "Stellar Embrace",
    artist: "Luna Cosmos",
    price: 1,
    duration: "3:56",
    image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 7,
    title: "Aurora's Song",
    artist: "Luna Cosmos",
    price: 1,
    duration: "4:21",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 8,
    title: "Moonlit Serenade",
    artist: "Luna Cosmos",
    price: 1,
    duration: "5:14",
    image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 9,
    title: "Celestial Wave",
    artist: "Luna Cosmos",
    price: 1,
    duration: "3:33",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 10,
    title: "Starlight Melody",
    artist: "Luna Cosmos",
    price: 1,
    duration: "4:08",
    image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 11,
    title: "Diamond Dust",
    artist: "Luna Cosmos",
    price: 1,
    duration: "3:49",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 12,
    title: "Infinite Echo",
    artist: "Luna Cosmos",
    price: 1,
    duration: "5:27",
    image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  }
];

const Index = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-cosmic-black flex items-center justify-center">
        <div className="text-cosmic-white font-montserrat">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white font-montserrat">
      {/* Header with auth */}
      <div className="absolute top-4 right-4 z-10">
        {user ? (
          <UserMenu />
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="px-6 py-2 bg-gradient-to-r from-cosmic-pink to-cosmic-red rounded-full font-montserrat font-medium text-cosmic-white hover:shadow-lg hover:shadow-cosmic-pink/30 transition-all duration-300"
          >
            Sign In
          </button>
        )}
      </div>

      <HeroSection />
      <TrackGrid tracks={mockTracks} onTrackSelect={setSelectedTrack} />
      
      {selectedTrack && (
        <TrackModal 
          track={selectedTrack} 
          onClose={() => setSelectedTrack(null)} 
        />
      )}

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
};

export default Index;
