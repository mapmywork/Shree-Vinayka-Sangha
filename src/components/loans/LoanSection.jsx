import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../../utils/constants';
import { CheckCircle2, Briefcase } from 'lucide-react';

const LoanSection = () => {
  return (
    <section id="loans" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-16 h-16 bg-blue-50 text-navy-deep rounded-2xl flex items-center justify-center mb-6 border border-blue-100 shadow-sm">
              <Briefcase size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-6 leading-tight">
              Grow Your Business With the Right Financial Support
            </h2>
            
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
              Whether you're looking to expand operations or explore financial support for your business, {BRAND.name} provides an enquiry-first process to help customers understand available options.
            </p>

            <ul className="space-y-4 mb-10">
              {['Tailored guidance for business expansion', 'Clear communication on eligibility', 'Support for documentation requirements', 'Assistance across all Karnataka regions'].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium font-inter">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              Discuss Your Requirement
            </a>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Using a structural CSS illustration instead of an external image for guaranteed premium look */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-navy-deep p-8 flex flex-col justify-between border-4 border-gold-yellow/20">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-royal to-blue-900 opacity-90"></div>
              
              {/* Abstract graphics inside */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-gold-yellow">
                    <TrendingGraphIcon />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 font-semibold text-sm border border-green-500/30">
                    Growth Support
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded-full w-1/2"></div>
                  <div className="h-4 bg-white/10 rounded-full w-5/6"></div>
                </div>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg mt-8">
                <h4 className="text-white font-poppins font-bold text-xl mb-2">Business Expansion</h4>
                <p className="text-blue-100 font-inter text-sm">Empowering Karnataka's entrepreneurs with reliable financial guidance.</p>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,#F5B800_2px,transparent_2px)] bg-[length:12px_12px] opacity-30"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const TrendingGraphIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default LoanSection;
