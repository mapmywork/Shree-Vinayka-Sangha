import React from 'react';
import { INDIAN_STATES } from '../../data/states';

const CalculatorForm = ({ formData, handleInputChange }) => {
  const formatValue = (val) => {
    return val ? new Intl.NumberFormat('en-IN').format(val) : '0';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-50 text-navy-royal p-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Loan Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Loan Amount (₹) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800"
            placeholder="e.g. 500000"
            min="0"
          />
          <div className="text-xs text-gray-500 mt-1.5">
            Current: <span className="text-navy-royal font-medium">₹{formatValue(formData.loanAmount)}</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Interest Rate Reducing (% per annum) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800"
            placeholder="Enter interest rate (e.g., 7.3)"
            step="0.01"
            min="0"
          />
          <div className="text-xs text-gray-500 mt-1.5">
            Maximum 44% per annum as per RBI.
          </div>
        </div>

        {/* Loan Tenure */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Loan Tenure (Years) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="tenureYears"
            value={formData.tenureYears}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800"
            placeholder="Enter loan tenure (e.g., 5)"
            step="0.5"
            min="0"
          />
          <div className="text-xs text-gray-500 mt-1.5">
            Equivalent to: <span className="text-navy-royal font-medium">{formData.tenureYears ? `${Math.round(formData.tenureYears * 12)} months` : '0 months'}</span>
          </div>
        </div>

        {/* State Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            State <span className="text-red-500">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800 bg-white"
          >
            <option value="">Select state</option>
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Interest Cashback */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Interest Cashback (%)</label>
          <input
            type="number"
            name="cashback"
            value={formData.cashback}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800"
            placeholder="e.g. 20"
            step="0.1"
            min="0"
          />
          <div className="text-xs text-gray-500 mt-1.5">
            Current: <span className="text-navy-royal font-medium">{formData.cashback || 0}%</span>
          </div>
        </div>

        {/* Processing Fee */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Processing Fee (₹)</label>
          <input
            type="number"
            name="processingFee"
            value={formData.processingFee}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800"
            placeholder="Enter processing fee amount"
            min="0"
          />
          <div className="text-xs text-gray-500 mt-1.5">
            Enter processing fee in rupees.
          </div>
        </div>

        {/* Subsidy Amount */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subsidy Amount (₹) - Optional</label>
          <input
            type="number"
            name="subsidyAmount"
            value={formData.subsidyAmount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800"
            placeholder="Enter subsidy amount"
            min="0"
          />
          <div className="text-xs text-gray-500 mt-1.5">
            Maximum ₹{formatValue(formData.loanAmount)} (loan amount).
          </div>
        </div>

        {/* Subsidy Repayment Month */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subsidy Repayment Month - Optional</label>
          <input
            type="number"
            name="subsidyMonth"
            value={formData.subsidyMonth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal focus:border-navy-royal transition outline-none text-gray-800 disabled:bg-gray-50 disabled:text-gray-400"
            placeholder="Enter month number (e.g., 10)"
            min="1"
            disabled={!formData.subsidyAmount || Number(formData.subsidyAmount) === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
