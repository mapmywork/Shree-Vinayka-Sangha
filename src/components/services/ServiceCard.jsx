import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-red-50/60 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border border-red-100/50 group relative overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      {/* Hover glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500 opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300"></div>
      
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
        <Icon size={22} className="text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-sm font-poppins font-bold text-navy-deep mb-2 leading-snug group-hover:text-red-600 transition-colors">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-500 font-inter text-xs leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
