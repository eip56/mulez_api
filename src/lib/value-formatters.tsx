/**
 * Returns a div element with the appropriate status text based on the input value.
 *
 * This function takes a value between 0 and 3 and returns a div element.
 * - 0: "Disabled"
 * - 1: "Active"
 * - 2: "Suspended"
 * - 3: "Banned"
 *
 * @param {number} status - The status value (0, 1, 2, or 3).
 * @returns {String} The String with the corresponding status text.
 * @throws {Error} Throws an error if the input value is not between 0 and 3.
 *
 * @example
 * getStatus(1) // returns a string "Active"
 */
export function getStatus(status: number): string {
  const statusTextMap: { [key: number]: string } = {
    0: 'Disabled',
    1: 'Active',
    2: 'Suspended',
    3: 'Banned',
  }

  if (!(status in statusTextMap)) {
    throw new Error('Invalid status value')
  }

  return statusTextMap[status]
}

/**
 * Calculates the age from a given datetime string to the current date.
 *
 * This function takes a datetime string in the format "YYYY-MM-DDTHH:mm:ss.sssZ"
 * and returns the age of the person as a number.
 *
 * @param {string} birthdate - The datetime string representing the birthdate.
 * @returns {number} The calculated age.
 * @throws {Error} Throws an error if the input is not a valid datetime string.
 *
 * @example
 * calculateAge('1944-06-19T00:00:00.000Z') // returns the age as a number
 */
export function calculateAge(birthdate: string): number {
  const birthDate = new Date(birthdate)

  if (isNaN(birthDate.getTime())) {
    throw new Error('Invalid datetime string')
  }

  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()
  const dayDifference = today.getDate() - birthDate.getDate()

  // Adjust age if birth date hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--
  }

  return age
}
