/**
 * Formats a number as a human-readable monetary value.
 *
 * This function takes a number or float and returns it as a string formatted
 * with a dollar sign, two decimal places, and commas as thousand separators.
 *
 * @param {number} value - The number to be formatted as currency.
 * @returns {string} The formatted currency string.
 * @throws {Error} Throws an error if the input is not a number.
 *
 * @example
 * formatCurrency(10356) // returns "$ 10,356.00"
 * formatCurrency(39.39) // returns "$ 39.39"
 * formatCurrency(5.5)   // returns "$ 5.50"
 */
export function formatCurrency(value: number): string {
  if (isNaN(value)) {
    throw new Error('Input must be a number')
  }
  return '$ ' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
