/**
 * Calculate the Monthly EMI based on reducing balance.
 * @param {number} principal - Loan Amount
 * @param {number} ratePerAnnum - Interest rate per year
 * @param {number} tenureMonths - Total months
 * @returns {number} EMI Amount
 */
export const calculateEMI = (principal, ratePerAnnum, tenureMonths) => {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  if (ratePerAnnum === 0) return principal / tenureMonths;

  const r = ratePerAnnum / 12 / 100;
  const emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
  return Math.round(emi);
};

/**
 * Generate the amortization schedule (Monthly Repayment Schedule)
 */
export const generateAmortizationSchedule = (
  principal,
  ratePerAnnum,
  tenureMonths,
  emi,
  subsidyAmount = 0,
  subsidyMonth = 0
) => {
  if (principal <= 0 || tenureMonths <= 0 || emi <= 0) return { schedule: [], totalInterest: 0 };

  const r = ratePerAnnum / 12 / 100;
  let balance = principal;
  const schedule = [];
  let totalInterest = 0;

  for (let month = 1; month <= tenureMonths; month++) {
    if (balance <= 0) break;

    let interest = Math.round(balance * r);
    let principalComponent = emi - interest;

    // Adjust last month's numbers to prevent negative balance due to rounding
    if (balance - principalComponent < 0 || month === tenureMonths) {
      principalComponent = balance;
      const adjustedEmi = principalComponent + interest;
      balance = 0;
      
      schedule.push({
        month,
        emi: adjustedEmi,
        principal: principalComponent,
        interest,
        balance,
      });
      totalInterest += interest;
      break;
    }

    balance -= principalComponent;

    // Apply Subsidy
    let subsidyApplied = 0;
    if (subsidyAmount > 0 && month === subsidyMonth) {
      subsidyApplied = Math.min(balance, subsidyAmount);
      balance -= subsidyApplied;
    }

    schedule.push({
      month,
      emi,
      principal: principalComponent,
      interest,
      balance,
      subsidyApplied
    });

    totalInterest += interest;
  }

  return { schedule, totalInterest };
};
