import React, { useState, useEffect } from 'react';
import loan01 from '../../assets/loans/loan01.jpeg';
import loan02 from '../../assets/loans/loan02.jpeg';
import loan03 from '../../assets/loans/loan03.jpeg';
import loan04 from '../../assets/loans/loan04.jpeg';
import loan05 from '../../assets/loans/loan05.jpeg';
import loan06 from '../../assets/loans/loan06.jpeg';
import loan07 from '../../assets/loans/loan07.jpeg';
import loan08 from '../../assets/loans/loan08.jpeg';
import loan09 from '../../assets/loans/loan09.jpeg';
import loan10 from '../../assets/loans/loan10.jpeg';
import loan11 from '../../assets/loans/loan11.jpeg';

const LOAN_IMAGES = [loan01, loan02, loan03, loan04, loan05, loan06, loan07, loan08, loan09, loan10, loan11];
const AUTO_SCROLL_INTERVAL = 3000;

const LoanCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % LOAN_IMAGES.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {LOAN_IMAGES.map((imgSrc, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={imgSrc} 
              alt={`Loan showcase ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Overlay dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {LOAN_IMAGES.map((_, index) => (
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

export default LoanCarousel;
