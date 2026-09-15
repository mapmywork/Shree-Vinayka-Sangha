import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND, CONTACT_INFO, PROMOTIONS } from '../../utils/constants';
import logoImg from '../../assets/logo/logo.jpeg';

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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'EMI Calculator', href: '/emi-calculator' },
    { name: 'Loans', href: '/#loans' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt={BRAND.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold-yellow shadow-sm" />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-lg md:text-xl text-navy-deep leading-tight">{BRAND.name}</span>
              <span className="font-poppins font-semibold text-xs text-navy-royal/70 leading-tight">{BRAND.nameKannada}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="font-inter font-medium text-gray-700 hover:text-navy-royal transition-colors text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/#contact" className="btn-primary text-sm lg:text-base px-5 py-2.5">
              Apply Now
            </Link>
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
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-inter font-medium text-gray-800 border-b border-gray-50 p-4 hover:bg-light-bg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="p-4">
              <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-center">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
