/**
 * Generates a budget object with specified income, GDP, and capita values.
 * @param {string} income - The income amount to be assigned in the budget object.
 * @param {string} gdp - The GDP value to be assigned in the budget object.
 * @param {string} capita - The capita amount to be assigned in the budget object.
 * @returns {object} - The created budget object containing income, GDP, and capita.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
