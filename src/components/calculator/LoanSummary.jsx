import React from 'react';

const LoanSummary = ({ summaryData }) => {
  const { 
    emi, 
    processingFeeAmount, 
    gstOnPf, 
    stampDuty, 
    totalBeforeLa, 
    totalInterestPaid, 
    flatRate 
  } = summaryData;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-navy-deep rounded-xl shadow-lg p-6 text-white font-sans">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white/10 p-2 rounded-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold">Loan Summary</h2>
      </div>

      <div className="space-y-4">
        {/* EMI Box */}
        <div className="bg-white/5 rounded-lg p-5 border border-white/5">
          <div className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-1">
            <span>₹</span> EMI
          </div>
          <div className="text-4xl font-bold">{formatCurrency(emi)}</div>
        </div>

        {/* Charges Breakdown */}
        <div className="bg-white/5 rounded-lg p-5 border border-white/5">
          <h3 className="font-semibold mb-4 text-lg">Charges Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-300 border-b border-white/10 pb-3">
              <span>Processing Fee</span>
              <span className="font-medium text-white">{formatCurrency(processingFeeAmount)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300 border-b border-white/10 pb-3">
              <span>GST on Processing Fee</span>
              <span className="font-medium text-white">{formatCurrency(gstOnPf)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300 pb-1">
              <span>Stamp Duty</span>
              <span className="font-medium text-white">{formatCurrency(stampDuty)}</span>
            </div>
          </div>
        </div>

        {/* Totals Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/5">
            <div className="flex items-center gap-2 text-gray-300 text-xs font-medium mb-1">
              <span>₹</span> Total to be paid before LA
            </div>
            <div className="text-2xl font-bold">{formatCurrency(totalBeforeLa)}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-5 border border-white/5">
            <div className="flex items-center gap-2 text-gray-300 text-xs font-medium mb-1">
              <span>%</span> Total Interest Paid
            </div>
            <div className="text-2xl font-bold">{formatCurrency(totalInterestPaid)}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-5 border border-white/5">
            <div className="flex items-center gap-2 text-gray-300 text-xs font-medium mb-1">
              <span>%</span> Flat Rate
            </div>
            <div className="text-2xl font-bold">{flatRate}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSummary;
