import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../../utils/constants';
import logoImg from '../../assets/logo/logo.jpeg';

const MembershipSection = () => {
  return (
    <section id="membership" className="py-20 bg-navy-deep relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-yellow rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Become a Member
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gold-yellow font-poppins text-xl md:text-2xl font-semibold mb-6"
          >
            Lifetime Free Membership Card
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-inter text-lg"
          >
            Join {BRAND.name} ({BRAND.nameKannada}) today. Gain access to our exclusive network and dedicated support for all your financial enquiries.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="perspective-1000 w-full max-w-md"
          >
            {/* Digital Membership Card */}
            <div className="relative w-full aspect-[1.6/1] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 transform-style-3d group cursor-pointer hover:shadow-[0_20px_60px_rgba(255,201,40,0.2)] transition-shadow duration-500">
              
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-navy-deep to-gray-800"></div>
              
              {/* Card Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 border-[30px] border-gold-yellow/10 rounded-full"></div>
              
              {/* Card Content */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <img 
                      src={logoImg} 
                      alt="Company Logo" 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white/20 shadow-sm" 
                    />
                    <div>
                      <h4 className="text-white font-poppins font-bold text-sm md:text-base leading-none">{BRAND.name}</h4>
                      <span className="text-gold-yellow/70 font-poppins text-[9px] md:text-[10px] leading-none mt-0.5 block">{BRAND.nameKannada}</span>
                      <span className="text-gold-yellow text-[10px] md:text-xs uppercase tracking-widest font-semibold">Premium</span>
                    </div>
                  </div>
                  <div className="w-12 h-8 rounded bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 opacity-80"></div>
                </div>
                
                {/* Middle / Number placeholder */}
                <div className="mt-auto mb-6">
                  <div className="font-mono text-white/80 text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.25em] drop-shadow-md">
                    XXXX XXXX XXXX XXXX
                  </div>
                </div>
                
                {/* Bottom Row */}
                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <div>
                    <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider block mb-1 font-inter">Member Status</span>
                    <span className="text-white font-poppins font-medium text-sm md:text-base">LIFETIME FREE</span>
                  </div>
                  <div>
                    <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider block mb-1 font-inter">Valid Thru</span>
                    <span className="text-white font-poppins font-medium text-sm md:text-base">LIFETIME</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg px-8 py-4 shadow-[0_0_20px_rgba(255,201,40,0.3)]">
            Get Membership Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
