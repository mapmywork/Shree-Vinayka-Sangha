import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import CalculatorForm from '../components/calculator/CalculatorForm';
import LoanSummary from '../components/calculator/LoanSummary';
import RepaymentSchedule from '../components/calculator/RepaymentSchedule';
import ReportGenerator from '../components/calculator/ReportGenerator';
import { calculateEMI, generateAmortizationSchedule } from '../utils/calculatorUtils';
import { getStampDuty } from '../data/states';
import { BRAND } from '../utils/constants';

const EmiCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    tenureYears: '',
    state: '',
    processingFee: '',
    cashback: '',
    subsidyAmount: '',
    subsidyMonth: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const { schedule, summaryData } = useMemo(() => {
    const amount = Number(formData.loanAmount) || 0;
    const rate = Number(formData.interestRate) || 0;
    const months = Math.round(Number(formData.tenureYears) * 12) || 12;
    const cashbackPercentage = Number(formData.cashback) || 0;
    const subsidyAmt = Number(formData.subsidyAmount) || 0;
    const subsidyMon = Number(formData.subsidyMonth) || 0;

    const emi = calculateEMI(amount, rate, months);
    const { schedule, totalInterest } = generateAmortizationSchedule(amount, rate, months, emi, subsidyAmt, subsidyMon);
    
    const processingFeeAmount = Number(formData.processingFee) || 0;
    const gstOnPf = Math.round(processingFeeAmount * 0.18);
    const stampDuty = formData.state ? getStampDuty(formData.state, amount) : 0;
    const totalBeforeLa = processingFeeAmount + gstOnPf + stampDuty;
    
    // Flat rate approximation calculation based on Solfin metrics
    const flatRate = amount > 0 ? ((totalInterest / amount) * 100 / (months / 12)).toFixed(2) : 0;

    return {
      schedule,
      summaryData: {
        emi,
        processingFeeAmount,
        gstOnPf,
        stampDuty,
        totalBeforeLa,
        totalInterestPaid: totalInterest,
        flatRate
      }
    };
  }, [formData]);

  return (
    <div className="bg-[#f0f9ff] min-h-screen py-12">
      <Helmet>
        <title>EMI Calculator | {BRAND.name}</title>
        <meta name="description" content="Calculate your loan EMI, check processing fees, subsidies, and generate a detailed monthly repayment schedule." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your loan with our detailed calculator. Include subsidies, state-specific stamp duty, and download a comprehensive repayment report.
          </p>
        </div>

        <div className="space-y-8">
          <CalculatorForm 
            formData={formData} 
            handleInputChange={handleInputChange} 
          />
          <LoanSummary summaryData={summaryData} />
        </div>

        <div className="mt-8 space-y-8">
           <RepaymentSchedule schedule={schedule} />
           {schedule.length > 0 && (
            <ReportGenerator 
              formData={formData}
              summaryData={summaryData}
              schedule={schedule}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
