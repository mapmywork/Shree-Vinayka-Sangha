import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../../utils/constants';
import { Building2, Users, Target, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-navy-deep/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-navy-deep font-poppins text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-bright"></span>
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-deep leading-tight mb-6">
              Empowering Karnataka's Financial Growth
            </h2>
            
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-6">
              At <strong className="text-navy-deep">{BRAND.name} ({BRAND.nameKannada})</strong>, we are committed to providing reliable, transparent, and accessible financial support. From personal loans to comprehensive business expansion assistance, our goal is to empower individuals and entrepreneurs to achieve their dreams.
            </p>
            
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-10">
              With deep roots in Bengaluru and a statewide reach, we pride ourselves on our customer-first approach, offering tailored financial guidance and a hassle-free enquiry process designed around your unique needs.
            </p>

            <div className="flex gap-4">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-outline">Contact Us</a>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Feature 1 */}
            <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-navy-deep/5 text-navy-deep flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-deep mb-2">Our Mission</h3>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                To simplify financial access and foster economic growth for communities across Karnataka.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-navy-deep rounded-2xl p-6 shadow-lg transform sm:translate-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-gold-yellow flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-poppins font-bold text-xl text-white mb-2">Trust & Security</h3>
              <p className="text-gray-300 font-inter text-sm leading-relaxed">
                Operating with complete transparency to ensure your peace of mind at every step.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-navy-deep/5 text-navy-deep flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-deep mb-2">Business Expansion</h3>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                Dedicated support for entrepreneurs looking to scale operations successfully.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow transform sm:translate-y-6">
              <div className="w-12 h-12 rounded-xl bg-navy-deep/5 text-navy-deep flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-deep mb-2">Statewide Reach</h3>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                Proudly assisting customers and members throughout the state of Karnataka.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
