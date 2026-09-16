import React from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import logoImage from '../../assets/logo/logo.jpeg';
import authorizeSignature from '../../assets/logo/authorize.jpeg';
import { BRAND, CONTACT_INFO } from '../../utils/constants';

const SanctionPdfGenerator = ({ formData, calculatedEmi }) => {
  
  const formatCurrency = (amount) => {
    return 'INR ' + new Intl.NumberFormat('en-IN').format(Math.round(amount || 0)) + '/-';
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;

    // Draw Header
    const drawHeader = () => {
      let currentY = 15;
      
      const logoImg = document.getElementById('company-logo-img2');
      if (logoImg) {
        const imgSize = 25;
        doc.addImage(logoImg, 'JPEG', margin, currentY - 5, imgSize, imgSize);
      }

      // Center text in the remaining space next to the logo
      const textStartX = margin + 30;
      const textWidth = pageWidth - margin - textStartX;
      const centerX = textStartX + textWidth / 2;
      
      // Company name in English only, bold and black
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(18);
      doc.setFont(undefined, 'bold');
      doc.text(BRAND.name.toUpperCase(), centerX, currentY + 4, { align: 'center' });
      
      doc.setFontSize(9);
      doc.setFont(undefined, 'normal');
      doc.text("Bangalore, Karnataka 560076, India", centerX, currentY + 11, { align: 'center' });
      
      doc.text(`Email: ${CONTACT_INFO.email}   |   Website: https://www.srivinayaksangh.com/`, centerX, currentY + 17, { align: 'center' });
      
      doc.setDrawColor(220, 38, 38);
      doc.setLineWidth(1);
      doc.line(margin, currentY + 23, pageWidth - margin, currentY + 23);
      
      return currentY + 33;
    };

    let currentY = drawHeader();

    // Date
    const today = new Date();
    const dateStr = `Date: ${today.getDate().toString().padStart(2, '0')}, ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}`;
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(dateStr, pageWidth - margin, currentY, { align: 'right' });
    currentY += 15;

    // Applicant Address Block
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`${formData.applicantTitle || ''} ${formData.applicantName || ''}`.trim(), margin, currentY);
    currentY += 8;

    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`${formData.guardianTitle || ''} ${formData.guardianName || ''}`.trim(), margin, currentY);
    currentY += 6;
    
    doc.text(`Address # ${formData.address || ''}`, margin, currentY);
    currentY += 6;
    
    doc.text(`${formData.city || ''}, ${formData.state || ''}, ${formData.pincode || ''}`, margin, currentY);
    currentY += 6;
    
    doc.text(`Contact No: ${formData.contactNumber || ''}`, margin, currentY);
    currentY += 12;

    // Reference & Subject
    doc.setFont(undefined, 'bold');
    doc.text(`Ref-${formData.referenceNumber || 'N/A'}`, margin, currentY);
    currentY += 8;

    doc.text(`Subject: Confirmation letter`, margin, currentY);
    currentY += 10;

    doc.setFont(undefined, 'normal');
    doc.text(`Dear Sir/Madam,`, margin, currentY);
    currentY += 8;

    // List Item 1 & 2
    doc.setFontSize(11);
    const splitText1 = doc.splitTextToSize(`Thank For Choosing ${BRAND.name} Finance As Preferred Partner for ${formData.natureOfFacility || 'Personal Loan'}.`, pageWidth - margin * 2 - 10);
    doc.text("1.", margin, currentY);
    doc.text(splitText1, margin + 10, currentY);
    currentY += splitText1.length * 6 + 2;

    const splitText2 = doc.splitTextToSize(`We are the part of the ${BRAND.name} SERVICES, an giant Financial Sector With operations spread across the global.`, pageWidth - margin * 2 - 10);
    doc.text("2.", margin, currentY);
    doc.text(splitText2, margin + 10, currentY);
    currentY += splitText2.length * 6 + 5;

    // Table
    const months = Math.round((formData.tenureYears || 0) * 12);
    
    autoTable(doc, {
      startY: currentY,
      margin: { left: margin, right: margin },
      theme: 'grid',
      body: [
        ['Loan account No', formData.referenceNumber || 'N/A'],
        ['Loan applicant', `${formData.applicantTitle || ''} ${formData.applicantName || ''}`.trim()],
        ['Loan Amount', formatCurrency(formData.loanAmount)],
        ['Nature of Facility', formData.natureOfFacility || 'Personal Loan'],
        ['Rate of interest', `@${formData.interestRate || '0'}%`],
        ['Loan Tenure', `${formData.tenureYears || 0} Year ${months} Months`],
        ['Monthly EMI', formatCurrency(calculatedEmi)],
        ['Verification charges', formatCurrency(formData.verificationCharges)]
      ],
      styles: { fontSize: 11, cellPadding: 3, textColor: [0, 0, 0], lineColor: [0, 0, 0], lineWidth: 0.2 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 65 },
        1: { fontStyle: 'bold' }
      }
    });

    currentY = doc.lastAutoTable.finalY + 10;

    // List Items 3 to 5
    const listText3 = `As we continue to work together, you can Access your loan account details on ${BRAND.name} SERVICES, any time let's have a look at your loan facility.`;
    const splitText3 = doc.splitTextToSize(listText3, pageWidth - margin * 2 - 10);
    doc.text("3.", margin, currentY);
    doc.text(splitText3, margin + 10, currentY);
    currentY += splitText3.length * 6 + 2;

    const listText4 = `We are sure you would honour and adhere to payment/repayment schedule and would make payments as the relevant due dates.`;
    const splitText4 = doc.splitTextToSize(listText4, pageWidth - margin * 2 - 10);
    doc.text("4.", margin, currentY);
    doc.text(splitText4, margin + 10, currentY);
    currentY += splitText4.length * 6 + 2;

    const listText5 = `Please quote your above listed loan account Number in all your future corresponded with ${BRAND.name} SERVICES finance. This will help us to process your query more efficiently.`;
    const splitText5 = doc.splitTextToSize(listText5, pageWidth - margin * 2 - 10);
    doc.text("5.", margin, currentY);
    doc.text(splitText5, margin + 10, currentY);
    
    // Page 2
    doc.addPage();
    currentY = 20;

    // List items 6 to 9
    const listText6 = `Our relationship is special and we are happy to serve you at all times for any assistance, you can chat with our 24X7 virtual assistant on ${BRAND.name} SERVICES.`;
    const splitText6 = doc.splitTextToSize(listText6, pageWidth - margin * 2 - 10);
    doc.text("6.", margin, currentY);
    doc.text(splitText6, margin + 10, currentY);
    currentY += splitText6.length * 6 + 2;

    const listText7 = `Explore the revolution way of banking with ${BRAND.name} SERVICES.`;
    const splitText7 = doc.splitTextToSize(listText7, pageWidth - margin * 2 - 10);
    doc.text("7.", margin, currentY);
    doc.text(splitText7, margin + 10, currentY);
    currentY += splitText7.length * 6 + 2;

    const listText8 = `We share the core valves of our parent company ${BRAND.name} SERVICES. Which includes personal loan, Take over loan, Agriculture Loan, Business Loan, Project loan, Hosing Loan, Mortgage Loan, Vehicle Loan, Gold Loan, Education Loan.`;
    const splitText8 = doc.splitTextToSize(listText8, pageWidth - margin * 2 - 10);
    doc.text("8.", margin, currentY);
    doc.text(splitText8, margin + 10, currentY);
    currentY += splitText8.length * 6 + 2;

    const listText9 = `This Amount Is Totally Refundable. If the Company declines your loan proposal in primary verification.`;
    const splitText9 = doc.splitTextToSize(listText9, pageWidth - margin * 2 - 10);
    doc.text("9.", margin, currentY);
    doc.text(splitText9, margin + 10, currentY);
    currentY += splitText9.length * 6 + 10;

    // Note Text
    const noteText = `It is worth-mentioning here that all your documents will be verified before the check for the requested loan amount is transferring to you. If you have any queries or concerns, please contact ${formData.repName || 'Mr Sahil goyal'} (${formData.repContact || '+919831120414'}) from 10 AM to 6 PM Monday to Friday.`;
    const splitNote = doc.splitTextToSize(noteText, pageWidth - margin * 2);
    doc.text(splitNote, margin, currentY);
    
    currentY += splitNote.length * 6 + 30;

    // Drawing stamps
    // Right stamp: Authorize signature
    doc.setTextColor(0, 0, 0); // Reset text color
    const signatureImg = document.getElementById('authorize-signature-img2');
    if (signatureImg) {
      const sigWidth = 45;
      const sigHeight = (signatureImg.naturalHeight * sigWidth) / signatureImg.naturalWidth || 45;
      const sigX = pageWidth - margin - sigWidth - 10;
      doc.addImage(signatureImg, 'JPEG', sigX, currentY - 10, sigWidth, sigHeight);
    }
    
    // Right text
    doc.setFontSize(12);
    doc.text(`FOR ${BRAND.name.toUpperCase()} SERVICES`, pageWidth - margin, currentY + 45, { align: 'right' });
    
    // Bottom Signature line
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    const bottomY = pageHeight - 40;
    doc.text(`*Signature of the Applicant .....................................................Date........./............../..................`, margin, bottomY);


    doc.save(`Approval_Letter_${formData.applicantName || 'Applicant'}.pdf`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mt-8">
      {/* Hidden images for PDF generation */}
      <img id="company-logo-img2" src={logoImage} alt="Company Logo" style={{ display: 'none' }} crossOrigin="anonymous" />
      <img id="authorize-signature-img2" src={authorizeSignature} alt="Authorize Signature" style={{ display: 'none' }} crossOrigin="anonymous" />
      
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <h2 className="text-xl font-semibold text-gray-800">Generate Sanction Letter</h2>
      </div>

      <button
        onClick={generatePDF}
        className="w-full bg-navy-royal hover:bg-navy-deep text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Download Sanction Letter (.pdf)
      </button>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-md p-4 flex gap-3">
        <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          <h4 className="text-sm font-semibold text-blue-800">Note</h4>
          <p className="text-xs text-blue-600 mt-1">
            Ensure all details are filled accurately before downloading the letter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SanctionPdfGenerator;
