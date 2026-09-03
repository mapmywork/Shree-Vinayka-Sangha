import React from 'react';
import { BRAND, CONTACT_INFO } from '../../utils/constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white pt-16 pb-8 border-t-4 border-gold-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt={BRAND.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold-yellow shadow-sm" />
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-2xl text-white leading-tight">{BRAND.name}</span>
                <span className="font-poppins font-semibold text-sm text-gold-yellow/80 leading-tight">{BRAND.nameKannada}</span>
              </div>
            </div>
            <p className="text-gray-300 font-inter text-sm leading-relaxed">
              Loan assistance, business expansion support, and membership enquiries across Karnataka. We are committed to providing reliable financial guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6 text-gold-yellow">Quick Links</h4>
            <ul className="space-y-3 font-inter text-sm text-gray-300">
              <li><a href="#home" className="hover:text-gold-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-yellow transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-yellow transition-colors">Services</a></li>
              <li><a href="#calculator" className="hover:text-gold-yellow transition-colors">EMI Calculator</a></li>
              <li><a href="#loans" className="hover:text-gold-yellow transition-colors">Loans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-bold text-lg mb-6 text-gold-yellow">Contact Us</h4>
            <div className="space-y-4 font-inter text-sm text-gray-300">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-3 hover:text-gold-yellow transition-colors group">
                <Phone className="mt-1 text-gold-yellow group-hover:scale-110 transition-transform" size={18} />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 hover:text-gold-yellow transition-colors group">
                <Mail className="mt-1 text-gold-yellow group-hover:scale-110 transition-transform" size={18} />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-gold-yellow" size={18} />
                <div className="flex flex-col gap-2">
                  <span>{CONTACT_INFO.address}</span>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-yellow hover:text-white transition-colors text-xs font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded w-max mt-1"
                  >
                    <MapPin size={14} />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-inter">
          <p>&copy; {new Date().getFullYear()} {BRAND.name} &middot; {BRAND.nameKannada}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-yellow transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gold-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-yellow transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
