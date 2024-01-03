import getBudgetObject from './7-getBudgetObject';

/**
 * Constructs a complete budget object with income, GDP, and capita, along with functions for income conversion.
 * @param {string} income - The income value for the budget object.
 * @param {string} gdp - The GDP value for the budget object.
 * @param {string} capita - The capita value for the budget object.
 * @returns {object} - The constructed budget object including income, GDP, capita, and income conversion methods.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
