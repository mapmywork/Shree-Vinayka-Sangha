import React from 'react';
import Hero from '../components/hero/Hero';
import BannerCarousel from '../components/banner/BannerCarousel';
import AboutUs from '../components/about/AboutUs';
import ServicesSection from '../components/services/ServicesSection';
import LoanSection from '../components/loans/LoanSection';
import MembershipSection from '../components/membership/MembershipSection';
import EmiCalculator from '../components/calculator/EmiCalculator';
import ProcessSection from '../components/process/ProcessSection';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <BannerCarousel />
      <AboutUs />
      <ServicesSection />
      <LoanSection />
      <MembershipSection />
      <ProcessSection />
      <EmiCalculator />
      <Contact />
    </div>
  );
};

export default Home;
