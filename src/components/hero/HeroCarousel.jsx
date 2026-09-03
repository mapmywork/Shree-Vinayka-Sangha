import React, { useState, useEffect } from 'react';
import h1 from '../../assets/hero/h1.jpeg';
import h4 from '../../assets/hero/h4.jpeg';
import h5 from '../../assets/hero/h5.jpeg';
import h6 from '../../assets/hero/h6.jpeg';
import h7 from '../../assets/hero/h7.jpeg';
import h9 from '../../assets/hero/h9.jpeg';
import h10 from '../../assets/hero/h10.jpeg';
import h11 from '../../assets/hero/h11.jpeg';
import h12 from '../../assets/hero/h12.jpeg';

const HERO_IMAGES = [h1, h4, h5, h6, h7, h9, h10, h11, h12];
const AUTO_SCROLL_INTERVAL = 3000;

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {HERO_IMAGES.map((imgSrc, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={imgSrc} 
              alt={`Hero showcase ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Overlay dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {HERO_IMAGES.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gold-yellow w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
