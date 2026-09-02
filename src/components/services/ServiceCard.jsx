import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-yellow opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300"></div>
      
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
        <Icon size={28} />
      </div>
      
      <h3 className="text-xl font-poppins font-bold text-navy-deep mb-3 group-hover:text-gold-bright transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 font-inter text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      
      <a href="#contact" className="inline-flex items-center gap-2 text-navy-deep font-semibold text-sm hover:text-gold-bright transition-colors mt-auto">
        Learn More <ArrowRight size={16} />
      </a>
    </motion.div>
  );
};

export default ServiceCard;
