import React from 'react';
import { INDIAN_STATES } from '../../data/states';

const SanctionForm = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-50 text-navy-royal p-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Applicant Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Applicant Title & Name <span className="text-red-500">*</span></label>
          <div className="flex gap-2">
            <select name="applicantTitle" value={formData.applicantTitle} onChange={handleInputChange} className="w-1/4 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none">
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
            <input type="text" name="applicantName" value={formData.applicantName} onChange={handleInputChange} placeholder="Full Name" className="w-3/4 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Guardian Title & Name <span className="text-red-500">*</span></label>
          <div className="flex gap-2">
            <select name="guardianTitle" value={formData.guardianTitle} onChange={handleInputChange} className="w-1/4 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none">
              <option value="S/o.">S/o.</option>
              <option value="D/o.">D/o.</option>
              <option value="W/o.">W/o.</option>
            </select>
            <input type="text" name="guardianName" value={formData.guardianName} onChange={handleInputChange} placeholder="Guardian Full Name" className="w-3/4 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Address <span className="text-red-500">*</span></label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Street Address / House No." className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none mb-3" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
            <select name="state" value={formData.state} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none bg-white">
              <option value="">Select state</option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="Pincode" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contact Number <span className="text-red-500">*</span></label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="+91 XXXXXXXXXX" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Reference Number <span className="text-red-500">*</span></label>
          <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleInputChange} placeholder="e.g. Ref-JSCS-CFL-APR025..." className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 mt-10">
        <div className="bg-blue-50 text-navy-royal p-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Loan Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nature of Facility <span className="text-red-500">*</span></label>
          <select name="natureOfFacility" value={formData.natureOfFacility} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none bg-white">
            <option value="Personal Loan">Personal Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Agriculture Loan">Agriculture Loan</option>
            <option value="Take Over Loan">Take Over Loan</option>
            <option value="Project Loan">Project Loan</option>
            <option value="Housing Loan">Housing Loan</option>
            <option value="Mortgage Loan">Mortgage Loan</option>
            <option value="Vehicle Loan">Vehicle Loan</option>
            <option value="Gold Loan">Gold Loan</option>
            <option value="Education Loan">Education Loan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Loan Amount (₹) <span className="text-red-500">*</span></label>
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleInputChange} min="0" placeholder="e.g. 400000" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Rate of Interest (%) <span className="text-red-500">*</span></label>
          <input type="number" name="interestRate" value={formData.interestRate} onChange={handleInputChange} min="0" step="0.01" placeholder="e.g. 4.00" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Loan Tenure (Years) <span className="text-red-500">*</span></label>
          <input type="number" name="tenureYears" value={formData.tenureYears} onChange={handleInputChange} min="0" step="0.5" placeholder="e.g. 10" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
          <div className="text-xs text-gray-500 mt-1.5">Equivalent to: {formData.tenureYears ? Math.round(formData.tenureYears * 12) : '0'} months</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Verification Charges (₹) <span className="text-red-500">*</span></label>
          <input type="number" name="verificationCharges" value={formData.verificationCharges} onChange={handleInputChange} min="0" placeholder="e.g. 7500" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-8 mt-10">
        <div className="bg-blue-50 text-navy-royal p-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Representative Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Representative Name <span className="text-red-500">*</span></label>
          <input type="text" name="repName" value={formData.repName} onChange={handleInputChange} placeholder="e.g. Mr Sahil Goyal" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Representative Contact <span className="text-red-500">*</span></label>
          <input type="text" name="repContact" value={formData.repContact} onChange={handleInputChange} placeholder="e.g. +91 9831120414" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-navy-royal outline-none" />
        </div>
      </div>
    </div>
  );
};

export default SanctionForm;
