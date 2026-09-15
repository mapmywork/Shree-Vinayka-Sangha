import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BRAND, CONTACT_INFO } from '../../utils/constants';
import logoImage from '../../assets/logo/logo.jpeg';

const ReportGenerator = ({ formData, summaryData, schedule }) => {
  const [reportData, setReportData] = useState({
    epcName: '',
    rmName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportData(prev => ({ ...prev, [name]: value }));
  };

  const formatCurrency = (amount) => {
    return 'INR ' + new Intl.NumberFormat('en-IN').format(Math.round(amount));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 14;

    const logoImg = document.getElementById('company-logo-img');
    let textStartX = margin;
    
    if (logoImg) {
      const imgWidth = 22;
      const imgHeight = (logoImg.naturalHeight * imgWidth) / logoImg.naturalWidth || 22;
      doc.addImage(logoImg, 'JPEG', margin, 12, imgWidth, imgHeight);
      textStartX = margin + imgWidth + 8;
    }

    // Add Brand Name
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(40, 40, 40); // Black/Dark Grey
    doc.text(BRAND.name, textStartX, 15);

    // Header Title
    doc.setFontSize(22);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text("EMI Calculator Report", textStartX, 23);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text("Detailed Loan Repayment Schedule & Analysis", textStartX, 30);

    doc.setDrawColor(200, 200, 200); // Thin grey line
    doc.setLineWidth(0.5);
    doc.line(margin, 38, pageWidth - margin, 38);

    // Contact Details Table
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text("Contact Details", margin, 48);

    autoTable(doc, {
      startY: 53,
      margin: { bottom: 45 },
      theme: 'plain',
      body: [
        ['EPC Name', reportData.epcName || 'N/A'],
        ['RM Name', reportData.rmName || 'N/A'],
        ['Phone Number', reportData.phoneNumber || 'N/A'],
      ],
      styles: { fontSize: 10, cellPadding: 3 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 60, textColor: [100, 100, 100] },
        1: { cellWidth: 'auto', textColor: [40, 40, 40] }
      },
      alternateRowStyles: { fillColor: [249, 250, 251] }
    });

    let currentY = doc.lastAutoTable.finalY + 15;

    // Loan Details Table
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text("Loan Details", margin, currentY);

    autoTable(doc, {
      startY: currentY + 5,
      margin: { bottom: 45 },
      theme: 'plain',
      body: [
        ['Loan Amount', formatCurrency(formData.loanAmount)],
        ['Interest Rate', `${formData.interestRate}% per annum`],
        ['Loan Tenure', `${formData.tenureMonths} months (${formData.tenureMonths / 12} years)`],
      ],
      styles: { fontSize: 10, cellPadding: 3 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 60, textColor: [100, 100, 100] },
        1: { cellWidth: 'auto', textColor: [40, 40, 40] }
      },
      alternateRowStyles: { fillColor: [249, 250, 251] }
    });

    currentY = doc.lastAutoTable.finalY + 15;

    // Loan Summary Table
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text("Loan Summary", margin, currentY);

    autoTable(doc, {
      startY: currentY + 5,
      margin: { bottom: 45 },
      theme: 'plain',
      body: [
        ['EMI', formatCurrency(summaryData.emi)],
        ['Processing Fee', formatCurrency(summaryData.processingFeeAmount)],
        ['GST on Processing Fee', formatCurrency(summaryData.gstOnPf)],
        ['Stamp Duty', formatCurrency(summaryData.stampDuty)],
        ['Total to be paid before LA', formatCurrency(summaryData.totalBeforeLa)],
        ['Total Interest Paid', formatCurrency(summaryData.totalInterestPaid)],
        ['Flat Rate', `${summaryData.flatRate}%`],
      ],
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 80, textColor: [100, 100, 100] },
        1: { cellWidth: 'auto', halign: 'right', textColor: [40, 40, 40] }
      },
      didParseCell: function (data) {
        if (data.row.index >= 4) {
          data.cell.styles.fillColor = [239, 246, 255]; // Blue-50 background for totals
          data.cell.styles.textColor = [30, 64, 175]; // Blue-800 text
          data.cell.styles.fontStyle = 'bold';
        } else if (data.row.index % 2 === 1) {
          data.cell.styles.fillColor = [249, 250, 251];
        }
      }
    });

    // Repayment Schedule on a new page
    doc.addPage();
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text("Monthly Repayment Schedule", margin, 20);

    const tableData = schedule.map(row => [
      row.month,
      new Intl.NumberFormat('en-IN').format(Math.round(row.emi)),
      new Intl.NumberFormat('en-IN').format(Math.round(row.principal)),
      new Intl.NumberFormat('en-IN').format(Math.round(row.interest)),
      new Intl.NumberFormat('en-IN').format(Math.round(row.balance))
    ]);

    autoTable(doc, {
      startY: 25,
      margin: { bottom: 45 },
      head: [['Month', 'EMI (INR)', 'Principal (INR)', 'Interest (INR)', 'Balance (INR)']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [37, 99, 235], // Blue-600
        textColor: 255,
        fontStyle: 'bold',
        halign: 'center'
      },
      columnStyles: {
        0: { halign: 'center' },
        1: { halign: 'right' },
        2: { halign: 'right' },
        3: { halign: 'right' },
        4: { halign: 'right' }
      },
      styles: {
        fontSize: 9,
        cellPadding: 4
      },
      alternateRowStyles: {
        fillColor: [249, 250, 251]
      }
    });

    // Add Final Summary Block
    let finalY = doc.lastAutoTable.finalY;
    if (finalY + 60 > doc.internal.pageSize.height - 45) {
      doc.addPage();
      finalY = 20;
    } else {
      finalY += 15;
    }

    const totalPrincipal = formData.loanAmount;
    const totalEmiPaid = summaryData.emi * formData.tenureMonths;
    const totalInterestBefore = summaryData.totalInterestPaid;
    const totalInterestAfter = Math.round(totalInterestBefore * 0.8);

    autoTable(doc, {
      startY: finalY,
      margin: { bottom: 45, left: margin, right: margin },
      theme: 'plain',
      body: [
        ['Total EMI Paid', formatCurrency(totalEmiPaid)],
        ['Total Principal', formatCurrency(totalPrincipal)],
        ['Total Interest (before cashback)', formatCurrency(totalInterestBefore)],
        ['Total Interest (after 20% cashback)', formatCurrency(totalInterestAfter)]
      ],
      styles: { fontSize: 11, cellPadding: 5 },
      columnStyles: {
        0: { fontStyle: 'bold', textColor: [40, 40, 40] },
        1: { fontStyle: 'bold', halign: 'right', textColor: [40, 40, 40] }
      },
      didParseCell: function (data) {
        if (data.row.index === 2) {
          data.cell.styles.textColor = [100, 100, 100];
          data.cell.styles.fontStyle = 'normal';
        } else if (data.row.index === 3) {
          data.cell.styles.fillColor = [239, 246, 255]; // Blue-50
          data.cell.styles.textColor = [30, 64, 175]; // Blue-800
        }
      }
    });

    // Add Disclaimer
    let disclaimerY = doc.lastAutoTable.finalY + 15;
    if (disclaimerY > doc.internal.pageSize.height - 45) {
      doc.addPage();
      disclaimerY = 20;
    }
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.setFont(undefined, 'italic');
    doc.text("* All figures mentioned in this report are indicative and subject to change based on the actual date of loan disbursement.", margin, disclaimerY);

    // Add Footer to all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      const pageHeight = doc.internal.pageSize.height;
      const pageWidth = doc.internal.pageSize.width;
      
      // Footer Divider Line
      doc.setDrawColor(37, 99, 235); // Blue-600
      doc.line(margin, pageHeight - 40, pageWidth - margin, pageHeight - 40);
      
      // Brand Name
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.setFont(undefined, 'bold');
      doc.text(BRAND.name, margin, pageHeight - 33);
      
      doc.setFont(undefined, 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      
      // Contact Info
      doc.text(`${CONTACT_INFO.email}  |  ${CONTACT_INFO.displayPhone}`, margin, pageHeight - 28);
      
      // Address
      const addressLines = doc.splitTextToSize(CONTACT_INFO.address, pageWidth - (margin * 2) - 40);
      doc.text(addressLines, margin, pageHeight - 23);
      
      // Date and Page Number
      doc.text(`Generated on: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`, margin, pageHeight - 12);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 12, { align: 'right' });
      
      // Generated By
      doc.setFontSize(7);
      doc.setTextColor(150, 150, 150);
      doc.setFont(undefined, 'italic');
      doc.text(`Generated by ${BRAND.name} EMI Calculator`, pageWidth / 2, pageHeight - 6, { align: 'center' });
      doc.setFont(undefined, 'normal');
    }

    doc.save('EMI_Calculator_Report.pdf');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mt-8">
      {/* Hidden logo for PDF generation */}
      <img id="company-logo-img" src={logoImage} alt="Company Logo" style={{ display: 'none' }} crossOrigin="anonymous" />
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        <h2 className="text-xl font-semibold text-gray-800">Download Report</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">EPC Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="epcName"
            value={reportData.epcName}
            onChange={handleInputChange}
            placeholder="Enter EPC name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">RM Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="rmName"
            value={reportData.rmName}
            onChange={handleInputChange}
            placeholder="Enter RM name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="phoneNumber"
            value={reportData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
      </div>

      <button
        onClick={generatePDF}
        disabled={!reportData.epcName || !reportData.rmName || !reportData.phoneNumber}
        className="w-full bg-navy-royal hover:bg-navy-deep text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Download as PDF File (.pdf)
      </button>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-md p-4 flex gap-3">
        <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          <h4 className="text-sm font-semibold text-blue-800">Download Information</h4>
          <p className="text-xs text-blue-600 mt-1">
            PDF file includes complete loan details, EMI summary, repayment schedule, and subsidy analysis with professional formatting.
          </p>
        </div>
      </div>
      
      <p className="text-[10px] text-gray-400 text-center mt-6">
        * All figures mentioned in this calculator are indicative and subject to change based on the actual date of loan disbursement.
      </p>
    </div>
  );
};

export default ReportGenerator;
