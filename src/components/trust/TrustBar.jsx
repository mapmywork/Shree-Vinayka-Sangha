import React from 'react';
import { motion } from 'framer-motion';
import { benefits } from '../../data/benefits';

const TrustBar = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-light-bg transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-navy-deep text-gold-yellow rounded-lg flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-navy-deep mb-1">{benefit.title}</h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
