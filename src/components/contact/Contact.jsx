import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';
import { generateFormWhatsAppLink, generateWhatsAppLink } from '../../utils/whatsapp';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // In a real application, you would send this to an API.
    // For now, we will open WhatsApp with the pre-filled data.
    const whatsappLink = generateFormWhatsAppLink(data);
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-6">
              Let's Discuss Your Requirement
            </h2>
            <p className="text-gray-600 font-inter text-lg mb-10">
              Reach out to us for loan enquiries, business expansion support, or membership details. Our team is ready to assist you.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-bg rounded-full flex items-center justify-center text-gold-bright flex-shrink-0 border border-gray-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-navy-deep text-lg">Phone</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 font-inter hover:text-gold-bright transition-colors">
                    {CONTACT_INFO.displayPhone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-bg rounded-full flex items-center justify-center text-gold-bright flex-shrink-0 border border-gray-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-navy-deep text-lg">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 font-inter hover:text-gold-bright transition-colors break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-light-bg rounded-full flex items-center justify-center text-gold-bright flex-shrink-0 border border-gray-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-navy-deep text-lg">Address</h4>
                  <p className="text-gray-600 font-inter">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="btn-secondary w-full">Call Now</a>
              <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-outline w-full border-green-600 text-green-600 hover:bg-green-600 focus:ring-green-600">WhatsApp</a>
            </div>

          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-poppins font-bold text-navy-deep mb-6">Submit an Enquiry</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Full Name</label>
                    <input 
                      {...register("name")} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gold-yellow focus:border-transparent outline-none transition-all font-inter bg-light-bg focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Phone Number *</label>
                    <input 
                      {...register("phone", { required: true })} 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-gold-yellow focus:border-transparent outline-none transition-all font-inter bg-light-bg focus:bg-white`}
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 font-inter">Phone number is required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Requirement *</label>
                    <select 
                      {...register("requirement", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gold-yellow focus:border-transparent outline-none transition-all font-inter bg-light-bg focus:bg-white appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Loan Enquiry">Loan Enquiry</option>
                      <option value="Business Expansion">Business Expansion</option>
                      <option value="Membership">Membership</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                    {errors.requirement && <span className="text-red-500 text-xs mt-1 font-inter">Please select a requirement</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">City</label>
                    <input 
                      {...register("city")} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gold-yellow focus:border-transparent outline-none transition-all font-inter bg-light-bg focus:bg-white"
                      placeholder="e.g. Bengaluru"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Required Amount (Optional)</label>
                  <input 
                    {...register("amount")} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gold-yellow focus:border-transparent outline-none transition-all font-inter bg-light-bg focus:bg-white"
                    placeholder="e.g. ₹5,00,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Message</label>
                  <textarea 
                    {...register("message")} 
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gold-yellow focus:border-transparent outline-none transition-all font-inter bg-light-bg focus:bg-white resize-none"
                    placeholder="Tell us more about your requirement..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-navy-deep text-gold-yellow font-poppins font-semibold py-4 rounded-xl hover:bg-navy-royal transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Submit Enquiry <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
