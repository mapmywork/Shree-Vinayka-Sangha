import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  // Using placeholder/sample content as requested to avoid fabricating real reviews
  const sampleTestimonials = [
    {
      id: 1,
      text: "Sample Review: I approached Sri Vinayak Sangha (R) — ಶ್ರೀ ವಿನಾಯಕ ಸಂಘ (ರಿ) for a business expansion enquiry. The team was very professional and helped me understand the available options clearly.",
      author: "Sample Customer",
      role: "Business Owner, Bengaluru"
    },
    {
      id: 2,
      text: "Sample Review: The lifetime free membership card is a great offering. The enquiry process was transparent and straightforward.",
      author: "Sample Applicant",
      role: "Member"
    },
    {
      id: 3,
      text: "Sample Review: Looking for financial support across Karnataka can be challenging, but their team provided clear guidance and easy communication.",
      author: "Sample Entrepreneur",
      role: "Small Business Owner"
    }
  ];

  return (
    <section className="py-20 bg-navy-deep relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-yellow rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 font-inter text-lg"
          >
            Sample experiences from customers navigating our enquiry process.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-12"
          >
            {sampleTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-full flex flex-col">
                  {/* Quote icon */}
                  <svg className="w-8 h-8 text-gold-yellow/50 mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667v-4c-5.891 0-10.667 4.776-10.667 10.667 0 1.954 0.528 3.784 1.455 5.385l3.228-1.859c-0.436-1.034-0.683-2.164-0.683-3.359z"></path>
                    <path d="M25.333 13.333c0-3.682 2.985-6.667 6.667-6.667v-4c-5.891 0-10.667 4.776-10.667 10.667 0 1.954 0.528 3.784 1.455 5.385l3.228-1.859c-0.436-1.034-0.683-2.164-0.683-3.359z"></path>
                  </svg>
                  
                  <p className="text-gray-300 font-inter leading-relaxed mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-yellow to-gold-bright rounded-full flex items-center justify-center text-navy-deep font-bold font-poppins">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-poppins font-medium">{testimonial.author}</h4>
                      <p className="text-gold-yellow/80 text-xs font-inter">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
