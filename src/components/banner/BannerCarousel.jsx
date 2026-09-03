import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../../assets/banners/b1.jpeg';
import banner2 from '../../assets/banners/b2.jpeg';
import banner3 from '../../assets/banners/b3.jpeg';
import banner4 from '../../assets/banners/b4.jpeg';
import banner5 from '../../assets/banners/b5.jpeg';

const BANNERS = [
  { id: 1, src: banner1, alt: 'Banner 1' },
  { id: 2, src: banner2, alt: 'Banner 2' },
  { id: 3, src: banner3, alt: 'Banner 3' },
  { id: 4, src: banner4, alt: 'Banner 4' },
  { id: 5, src: banner5, alt: 'Banner 5' },
];

const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(goToNext, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="w-full flex-shrink-0"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group z-10"
          aria-label="Previous banner"
        >
          <ChevronLeft size={22} className="group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group z-10"
          aria-label="Next banner"
        >
          <ChevronRight size={22} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </section>
  );
};

export default BannerCarousel;
