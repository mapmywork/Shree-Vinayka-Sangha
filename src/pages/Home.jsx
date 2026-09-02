import React from 'react';
import Hero from '../components/hero/Hero';
import TrustBar from '../components/trust/TrustBar';
import ServicesSection from '../components/services/ServicesSection';
import LoanSection from '../components/loans/LoanSection';
import MembershipSection from '../components/membership/MembershipSection';
import ProcessSection from '../components/process/ProcessSection';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/faq/FAQ';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <ServicesSection />
      <LoanSection />
      <MembershipSection />
      <ProcessSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
