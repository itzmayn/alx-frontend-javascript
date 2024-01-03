/**
 * Retrieves the current year using JavaScript's Date object.
 * @returns {number} - The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Creates and returns a budget object for the current year containing income, GDP, and capita.
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The capita value to be included in the budget object.
 * @returns {object} - The budget object for the current year containing income, GDP, and capita.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
