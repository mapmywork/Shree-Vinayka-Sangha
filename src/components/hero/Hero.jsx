import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, CONTACT_INFO, PROMOTIONS } from '../../utils/constants';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import { Phone, ArrowRight } from 'lucide-react';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section id="home" className="relative bg-light-bg overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-deep transform skew-x-12 translate-x-32 hidden lg:block opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-yellow rounded-full filter blur-3xl opacity-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-navy-deep text-gold-yellow font-poppins text-xs md:text-sm font-semibold tracking-wide mb-6">
              {BRAND.name} &middot; {BRAND.nameKannada}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-deep leading-tight mb-6">
              {BRAND.tagline}
            </h1>
            
            <div className="mb-12">
              <span className="text-3xl md:text-4xl font-playfair font-bold text-orange-500 block mb-2">
                {PROMOTIONS.interestRate} {PROMOTIONS.interestLabel}
              </span>
              <p className="text-lg text-gray-600 font-inter leading-relaxed max-w-2xl">
                Get access to loan assistance, business expansion support, and membership benefits through Sri Vinayak Sangha (R) — ಶ್ರೀ ವಿನಾಯಕ ಸಂಘ (ರಿ).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="btn-primary gap-2">
                Apply Now <ArrowRight size={18} />
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="btn-outline gap-2">
                <Phone size={18} /> Call Us
              </a>
              <a 
                href={generateWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline gap-2 border-green-600 text-green-700 hover:bg-green-600 hover:border-green-600 focus:ring-green-600"
              >
                WhatsApp
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Loan Available Across Karnataka', 'Business Expansion Support', 'Easy & Hassle-Free Process'].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{badge}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 font-inter">
              *Subject to applicable terms, eligibility and documentation.
            </p>
          </motion.div>

          {/* Right Illustration / Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <HeroCarousel />
              
              {/* Floating Cards overlaid on the edge of the carousel */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-panel p-4 rounded-xl max-w-[180px] z-20 shadow-lg"
              >
                <p className="text-navy-deep font-bold text-sm leading-tight">{PROMOTIONS.interestRate} {PROMOTIONS.interestLabel}</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-xl max-w-[200px] z-20 shadow-lg"
              >
                <p className="text-navy-deep font-bold text-sm leading-tight">Karnataka Loan Availability</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
