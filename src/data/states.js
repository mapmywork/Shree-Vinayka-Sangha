// Map of Indian States and their Stamp Duty logic (example rates)
// Stamp duty rules often specify a percentage of the loan amount, sometimes with a maximum cap.
// Note: These are representative values and should be updated by the client with exact legal rates.

export const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export const getStampDuty = (state, loanAmount) => {
  // We can add state-specific logic here. 
  // For now, let's assume a default of 0.1% (or ₹100 per 1 Lakh) across all states
  // if not explicitly defined, with a minimum of ₹100 and maximum of ₹1000.
  
  const stateRates = {
    "Karnataka": { type: "percentage", value: 0.1, max: 1000 },
    "Maharashtra": { type: "percentage", value: 0.2, max: null },
    "Delhi": { type: "flat", value: 500 },
    // Add other state rules as required
  };

  const rule = stateRates[state] || { type: "percentage", value: 0.1, max: 1000 };

  if (rule.type === "flat") {
    return rule.value;
  } else if (rule.type === "percentage") {
    let duty = (loanAmount * rule.value) / 100;
    if (rule.max && duty > rule.max) {
      duty = rule.max;
    }
    // Minimum stamp duty ₹100 usually
    return Math.max(100, Math.round(duty));
  }
  
  return 100; // fallback
};
