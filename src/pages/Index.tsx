
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TrackGrid from "@/components/TrackGrid";
import TrackModal from "@/components/TrackModal";

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

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white font-montserrat">
      <HeroSection />
      <TrackGrid tracks={mockTracks} onTrackSelect={setSelectedTrack} />
      {selectedTrack && (
        <TrackModal 
          track={selectedTrack} 
          onClose={() => setSelectedTrack(null)} 
        />
      )}
    </div>
  );
};

export default Index;
