import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import SanctionForm from '../components/sanction/SanctionForm';
import SanctionPdfGenerator from '../components/sanction/SanctionPdfGenerator';
import { calculateEMI } from '../utils/calculatorUtils';
import { BRAND } from '../utils/constants';

const SanctionLetter = () => {
  const [formData, setFormData] = useState({
    applicantTitle: 'Mr.',
    applicantName: '',
    guardianTitle: 'S/o.',
    guardianName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contactNumber: '',
    referenceNumber: '',
    natureOfFacility: 'Personal Loan',
    loanAmount: '',
    interestRate: '',
    tenureYears: '',
    verificationCharges: '',
    repName: '',
    repContact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculatedEmi = useMemo(() => {
    const amount = Number(formData.loanAmount) || 0;
    const rate = Number(formData.interestRate) || 0;
    const months = Math.round(Number(formData.tenureYears) * 12) || 12;
    return calculateEMI(amount, rate, months);
  }, [formData.loanAmount, formData.interestRate, formData.tenureYears]);

  return (
    <div className="bg-[#f0f9ff] min-h-screen py-12">
      <Helmet>
        <title>Sanction Letter Generator | {BRAND.name}</title>
        <meta name="description" content="Generate official loan sanction confirmation letters for applicants." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sanction Letter Generator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the applicant's details below to generate an official confirmation letter in PDF format.
          </p>
        </div>

        <div className="space-y-8">
          <SanctionForm 
            formData={formData} 
            handleInputChange={handleInputChange} 
          />
          <SanctionPdfGenerator 
            formData={formData}
            calculatedEmi={calculatedEmi}
          />
        </div>
      </div>
    </div>
  );
};

export default SanctionLetter;
