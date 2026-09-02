import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import Home from './pages/Home';
import { BRAND } from './utils/constants';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>{BRAND.name} | Loan Assistance & Membership | Bengaluru</title>
          <meta name="description" content={`${BRAND.name} offers loan assistance, business expansion support and lifetime free membership enquiries in Bengaluru and across Karnataka. Contact us to learn more.`} />
          <meta name="keywords" content="Sri Vinayak Sangha, Loan Bengaluru, Loan Karnataka, Business Loan Assistance Karnataka, BTM Layout Loan Services, Membership Bengaluru, Loan Assistance Bengaluru, Business Expansion Loan Karnataka" />
        </Helmet>
        
        <div className="min-h-screen flex flex-col font-inter bg-light-bg overflow-x-hidden">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes here if needed in the future */}
            </Routes>
          </main>
          
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
