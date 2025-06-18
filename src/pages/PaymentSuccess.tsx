
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const trackName = searchParams.get("track") || "Your track";

  return (
    <div className="min-h-screen bg-cosmic-black flex items-center justify-center px-4">
      {/* Ink splash background effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-ink-splash animate-ink-float opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-ink-splash animate-ink-float opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-ink-splash animate-ink-float opacity-25" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-cosmic-pink to-cosmic-red rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-12 h-12 text-cosmic-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="font-great-vibes text-4xl md:text-5xl text-cosmic-white mb-4 animate-cosmic-glow">
            Thank You!
          </h1>
          
          <p className="font-montserrat text-cosmic-white/80 text-lg mb-2">
            Your purchase of "{trackName}" was successful
          </p>
          
          <p className="font-montserrat text-cosmic-white/60 text-sm mb-8">
            Welcome to Her Melodic Cosmos
          </p>
        </div>

        <Link 
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cosmic-pink to-cosmic-red rounded-full font-montserrat font-medium text-cosmic-white hover:shadow-lg hover:shadow-cosmic-pink/30 transition-all duration-300 transform hover:scale-105"
        >
          Return to Nebula
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
