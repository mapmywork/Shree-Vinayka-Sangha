import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState(500000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [tenure, setTenure] = useState(5); // in years
  
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // EMI Calculation Formula: P x R x (1+R)^N / [(1+R)^N-1]
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 12 / 100; // monthly interest rate
    const n = parseFloat(tenure) * 12; // tenure in months

    if (p > 0 && r > 0 && n > 0) {
      const calculatedEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const calculatedTotalAmount = calculatedEmi * n;
      const calculatedTotalInterest = calculatedTotalAmount - p;

      setEmi(Math.round(calculatedEmi));
      setTotalAmount(Math.round(calculatedTotalAmount));
      setTotalInterest(Math.round(calculatedTotalInterest));
    } else if (p > 0 && n > 0 && r === 0) {
      // 0% interest edge case
      setEmi(Math.round(p / n));
      setTotalAmount(Math.round(p));
      setTotalInterest(0);
    } else {
      setEmi(0);
      setTotalAmount(0);
      setTotalInterest(0);
    }
  }, [principal, interestRate, tenure]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-navy-deep relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-yellow rounded-full filter blur-[120px] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            EMI Calculator
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-inter text-lg"
          >
            Plan your finances. Calculate your monthly installments instantly.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 glass-panel !bg-white/5 border-white/10 p-6 md:p-8 rounded-3xl"
          >
            <div className="space-y-8">
              
              {/* Principal Amount */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-poppins font-medium">Loan Amount</label>
                  <div className="bg-navy-deep border border-white/20 rounded-lg px-4 py-2 flex items-center">
                    <span className="text-gray-400 mr-2">₹</span>
                    <input 
                      type="number" 
                      value={principal} 
                      onChange={(e) => setPrincipal(e.target.value)}
                      className="bg-transparent text-white font-bold outline-none w-24 text-right"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="10000000" 
                  step="10000"
                  value={principal} 
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="w-full accent-gold-yellow h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-inter">
                  <span>10K</span>
                  <span>1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-poppins font-medium">Interest Rate (p.a)</label>
                  <div className="bg-navy-deep border border-white/20 rounded-lg px-4 py-2 flex items-center">
                    <input 
                      type="number" 
                      value={interestRate} 
                      onChange={(e) => setInterestRate(e.target.value)}
                      step="0.1"
                      className="bg-transparent text-white font-bold outline-none w-16 text-right"
                    />
                    <span className="text-gray-400 ml-1">%</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full accent-gold-yellow h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-inter">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-white font-poppins font-medium">Loan Tenure</label>
                  <div className="bg-navy-deep border border-white/20 rounded-lg px-4 py-2 flex items-center">
                    <input 
                      type="number" 
                      value={tenure} 
                      onChange={(e) => setTenure(e.target.value)}
                      className="bg-transparent text-white font-bold outline-none w-16 text-right"
                    />
                    <span className="text-gray-400 ml-2">Yr</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1"
                  value={tenure} 
                  onChange={(e) => setTenure(e.target.value)}
                  className="w-full accent-gold-yellow h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-inter">
                  <span>1 Yr</span>
                  <span>30 Yr</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="h-full bg-gradient-to-br from-gold-yellow to-gold-bright rounded-3xl p-8 shadow-2xl text-navy-deep flex flex-col justify-center">
              
              <div className="text-center mb-8">
                <p className="font-inter font-medium text-navy-deep/70 uppercase tracking-wider text-sm mb-2">Equated Monthly Installment (EMI)</p>
                <h3 className="text-4xl md:text-5xl font-extrabold font-poppins">{formatCurrency(emi)}</h3>
              </div>

              <div className="space-y-4 border-t border-navy-deep/10 pt-6">
                
                <div className="flex justify-between items-center p-4 bg-white/20 rounded-xl">
                  <span className="font-inter font-medium">Principal Amount</span>
                  <span className="font-poppins font-bold text-lg">{formatCurrency(principal)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/20 rounded-xl">
                  <span className="font-inter font-medium">Total Interest</span>
                  <span className="font-poppins font-bold text-lg">{formatCurrency(totalInterest)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-navy-deep text-white rounded-xl shadow-md">
                  <span className="font-inter font-medium">Total Amount Payable</span>
                  <span className="font-poppins font-bold text-xl text-gold-yellow">{formatCurrency(totalAmount)}</span>
                </div>

              </div>

              <div className="mt-8 text-center">
                <a href="#contact" className="inline-block px-8 py-3 bg-navy-deep text-white font-poppins font-semibold rounded-full hover:bg-navy-royal transition-colors shadow-lg">
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;
