import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const FloatingActions = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Floating Actions (Bottom Right) */}
      <div className={`hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-50 transition-opacity duration-300 ${isFooterVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <a 
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
          aria-label="WhatsApp Us"
        >
          {/* Custom WhatsApp Icon SVG */}
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current text-white">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="w-14 h-14 bg-navy-deep rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 border-2 border-gold-yellow"
          aria-label="Call Us"
        >
          <Phone size={24} className="fill-current text-gold-yellow" />
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex font-inter transition-transform duration-300 ${isFooterVisible ? 'translate-y-full' : 'translate-y-0'}`}>
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 py-4 flex items-center justify-center gap-2 text-navy-deep font-semibold border-r border-gray-200 hover:bg-gray-50 active:bg-gray-100"
        >
          <Phone size={20} />
          <span>Call</span>
        </a>
        <a 
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 flex items-center justify-center gap-2 text-green-600 font-semibold border-r border-gray-200 hover:bg-green-50 active:bg-green-100"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>WhatsApp</span>
        </a>
        <a 
          href="#contact"
          className="flex-1 py-4 flex items-center justify-center gap-2 bg-navy-deep text-gold-yellow font-semibold hover:bg-navy-royal active:bg-navy-deep"
        >
          <span>Apply Now</span>
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
