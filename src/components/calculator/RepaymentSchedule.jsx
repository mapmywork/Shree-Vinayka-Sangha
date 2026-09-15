import React, { useState } from 'react';

const RepaymentSchedule = ({ schedule }) => {
  const [showAll, setShowAll] = useState(false);

  if (!schedule || schedule.length === 0) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN').format(Math.round(amount));
  };

  const displaySchedule = showAll ? schedule : schedule.slice(0, 12);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mt-8">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Monthly Repayment Schedule</h2>
        {schedule.length > 12 && (
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-navy-royal hover:text-navy-deep font-medium text-sm transition-colors"
          >
            {showAll ? 'Show Less' : 'Show All Months'}
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="text-gray-900 border-b-2 border-gray-100">
              <th className="py-3 px-6 font-semibold">Month</th>
              <th className="py-3 px-6 font-semibold text-right">EMI (₹)</th>
              <th className="py-3 px-6 font-semibold text-right">Principal (₹)</th>
              <th className="py-3 px-6 font-semibold text-right">Interest (₹)</th>
              <th className="py-3 px-6 font-semibold text-right">Balance (₹)</th>
            </tr>
          </thead>
          <tbody>
            {displaySchedule.map((row, index) => (
              <tr key={row.month} className={`${index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'} border-b border-gray-50 hover:bg-gray-50 transition-colors`}>
                <td className="py-3 px-6 text-gray-700">
                  {row.month}
                  {row.subsidyApplied > 0 && (
                    <span className="block text-xs text-green-600 mt-1">
                      Subsidy: ₹{formatCurrency(row.subsidyApplied)}
                    </span>
                  )}
                </td>
                <td className="py-3 px-6 text-right font-medium text-gray-900">{formatCurrency(row.emi)}</td>
                <td className="py-3 px-6 text-right text-gray-600">{formatCurrency(row.principal)}</td>
                <td className="py-3 px-6 text-right text-gray-600">{formatCurrency(row.interest)}</td>
                <td className="py-3 px-6 text-right font-medium text-gray-700">{formatCurrency(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {!showAll && schedule.length > 12 && (
        <div className="p-4 text-center border-t border-gray-100">
          <button 
            onClick={() => setShowAll(true)}
            className="text-gray-500 hover:text-navy-royal text-sm font-medium transition-colors"
          >
            View remaining {schedule.length - 12} months...
          </button>
        </div>
      )}
    </div>
  );
};

export default RepaymentSchedule;
