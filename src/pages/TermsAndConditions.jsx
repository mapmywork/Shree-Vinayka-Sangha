import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../utils/constants';

const TermsAndConditions = () => {
  return (
    <div className="pt-24 pb-20 bg-light-bg min-h-screen">
      <Helmet>
        <title>Terms & Conditions | {BRAND.name}</title>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-8 pb-4 border-b border-gray-200">
            TERMS & CONDITIONS
          </h1>
          
          <div className="space-y-6 text-gray-700 font-inter leading-relaxed">
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <p className="font-medium text-navy-deep text-lg mb-2">
                Loan Processing Fee, Documentation Charges ಹಾಗೂ Transfer Charges ಅನ್ವಯವಾಗುತ್ತವೆ.
              </p>
              <p className="text-gray-600">
                ಮೇಲ್ಕಂಡ ಎಲ್ಲಾ ಶುಲ್ಕಗಳು ಸಂಸ್ಥೆಯ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ. ಶುಲ್ಕಗಳ ವಿವರಗಳು ಹಾಗೂ ಅನ್ವಯಿಸುವ ಷರತ್ತುಗಳನ್ನು ಅಧಿಕೃತ ದಾಖಲೆಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಬಹುದು.
              </p>
            </div>

            <div className="py-4">
              <p className="text-xl font-bold text-navy-deep mb-2">Terms & Conditions Apply.</p>
              <p className="text-lg text-gray-600">ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು ಅನ್ವಯಿಸುತ್ತವೆ.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
              <h3 className="font-bold text-navy-deep mb-3 uppercase tracking-wider text-sm">
                Website / Official Documents Update:
              </h3>
              <p className="text-gray-600">
                ಸಂಪೂರ್ಣ ಶುಲ್ಕ ವಿವರಗಳು, ಅರ್ಹತಾ ಮಾನದಂಡಗಳು, ಅಗತ್ಯ ದಾಖಲೆಗಳು ಹಾಗೂ ಅನ್ವಯಿಸುವ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ Website / Documents ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
