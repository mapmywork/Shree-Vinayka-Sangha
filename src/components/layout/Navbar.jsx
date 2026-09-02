import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND, CONTACT_INFO, PROMOTIONS } from '../../utils/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Loans', href: '#loans' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-navy-deep text-gold-yellow py-2 px-4 text-xs md:text-sm font-inter">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 md:gap-0">
          <p className="font-medium">
            <span className="font-bold text-gold-bright">{PROMOTIONS.interestRate} {PROMOTIONS.interestLabel}</span> &middot; Lifetime Free Membership &middot; Loan Assistance Across Karnataka
          </p>
          <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-semibold">
            Call: {CONTACT_INFO.displayPhone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy-deep rounded-full flex items-center justify-center text-gold-yellow font-bold text-xl border-2 border-gold-yellow shadow-sm">
              SVS
            </div>
            <span className="font-poppins font-bold text-lg md:text-xl text-navy-deep">{BRAND.name}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-inter font-medium text-gray-700 hover:text-navy-royal transition-colors text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm lg:text-base px-5 py-2.5">
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-navy-deep p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-inter font-medium text-gray-800 border-b border-gray-50 p-4 hover:bg-light-bg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="p-4">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-center">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
