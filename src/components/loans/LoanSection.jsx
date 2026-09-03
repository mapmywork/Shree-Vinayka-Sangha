import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../../utils/constants';
import { CheckCircle2, Briefcase } from 'lucide-react';
import businessImg from '../../assets/images/business.jpeg';

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
              Whether you're looking to expand operations or explore financial support for your business, {BRAND.name} ({BRAND.nameKannada}) provides an enquiry-first process to help customers understand available options.
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
            <div className="relative">
              <img 
                src={businessImg} 
                alt="Business Expansion" 
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10 border-4 border-white"
              />
            
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,#F5B800_2px,transparent_2px)] bg-[length:12px_12px] opacity-30"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



export default LoanSection;
