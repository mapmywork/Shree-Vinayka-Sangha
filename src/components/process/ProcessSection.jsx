import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/benefits';

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-inter text-lg"
          >
            Our simple, transparent enquiry process.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full border-4 border-light-bg shadow-lg flex items-center justify-center text-2xl font-poppins font-bold text-navy-deep mb-6 group-hover:border-gold-yellow group-hover:text-gold-bright transition-all duration-300 relative">
                  {step.step}
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-gold-yellow opacity-0 group-hover:animate-ping -z-10"></div>
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-navy-deep mb-3">{step.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
                
                {/* Mobile connecting arrow */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden text-gray-300 my-4">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400 font-inter max-w-2xl mx-auto px-4 py-3 bg-light-bg rounded-lg">
            Disclaimer: Processing, eligibility, documentation, and approval are subject to applicable terms and conditions.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;
