import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-light-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-bright font-poppins font-semibold uppercase tracking-wider text-sm mb-2 block"
          >
            Our Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-4"
          >
            Financial Solutions Designed Around Your Needs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-inter text-lg"
          >
            We provide structured enquiry support for various financial requirements to help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;
