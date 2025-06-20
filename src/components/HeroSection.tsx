const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c8e5&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-cosmic-black bg-opacity-60"></div>

      {/* Content */}
      <div className="absolute bottom-20 left-8 md:left-16 z-10">
        <h1 className="font-great-vibes text-4xl md:text-6xl lg:text-7xl text-cosmic-white mb-4 animate-cosmic-glow">
          Enter Her Melodic Cosmos
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-cosmic-white/80 mb-8 max-w-md">
          Journey through ethereal soundscapes and discover music that transcends dimensions
        </p>
        <button
          onClick={() => {
            const trackSection = document.getElementById('tracks');
            trackSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative px-8 py-3 bg-gradient-to-r from-cosmic-pink to-cosmic-red rounded-full font-montserrat font-medium text-cosmic-white hover:shadow-lg hover:shadow-cosmic-pink/30 transition-all duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Explore</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-rose-gold to-cosmic-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Enhanced Floating Ink Splash Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-ink-splash animate-ink-float opacity-80"></div>
      <div className="absolute bottom-40 right-40 w-24 h-24 bg-ink-splash animate-ink-float opacity-70" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-ink-splash animate-ink-float opacity-70" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-10 left-20 w-28 h-28 bg-ink-splash animate-ink-float opacity-75" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-40 w-16 h-16 bg-ink-splash animate-ink-float opacity-85" style={{ animationDelay: '1.5s' }}></div>
 
      {/* New Middle Elements */}
      <div className="absolute top-1/2 left-1/2 w-30 h-30 bg-ink-splash animate-ink-float opacity-70 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-ink-splash animate-ink-float opacity-65 transform -translate-x-1/2" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-25 h-25 bg-ink-splash animate-ink-float opacity-60 transform -translate-x-1/2" style={{ animationDelay: '1.7s' }}></div>
      <div className="absolute top-1/2 right-1/2 w-22 h-22 bg-ink-splash animate-ink-float opacity-55 transform translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2.2s' }}></div>
    </div>
  );
};

export default HeroSection;