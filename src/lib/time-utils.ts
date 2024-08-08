/**
 * Returns the current date and time as a formatted string based on the provided options.
 *
 * This function returns the current date and time formatted according to the specified options.
 *
 * @param {boolean} [includeYear=true] - Whether to include the year in the output.
 * @param {boolean} [includeMonth=true] - Whether to include the month in the output.
 * @param {boolean} [includeDay=true] - Whether to include the day in the output.
 * @param {boolean} [includeHour=true] - Whether to include the hour in the output.
 * @param {boolean} [includeMinute=true] - Whether to include the minute in the output.
 * @param {boolean} [includeSecond=false] - Whether to include the second in the output.
 * @param {boolean} [hour12=true] - Whether to use 12-hour time format.
 * @param {string} [yearLength='numeric'] - The format length for the year (e.g., 'numeric', '2-digit').
 * @param {string} [monthLength='short'] - The format length for the month (e.g., 'numeric', '2-digit', 'short', 'long').
 * @param {string} [dayLength='numeric'] - The format length for the day (e.g., 'numeric', '2-digit').
 * @param {string} [hourLength='numeric'] - The format length for the hour (e.g., 'numeric', '2-digit').
 * @param {string} [minuteLength='numeric'] - The format length for the minute (e.g., 'numeric', '2-digit').
 * @param {string} [secondLength='numeric'] - The format length for the second (e.g., 'numeric', '2-digit').
 * @returns {string} The formatted current date and time.
 */
export function getCurrentDateTime(
  includeYear: boolean = false,
  includeMonth: boolean = false,
  includeDay: boolean = false,
  includeHour: boolean = false,
  includeMinute: boolean = false,
  includeSecond: boolean = false,
  hour12: boolean = true,
  yearLength: 'numeric' | '2-digit' = 'numeric',
  monthLength: 'numeric' | '2-digit' | 'short' | 'long' = 'short',
  dayLength: 'numeric' | '2-digit' = 'numeric',
  hourLength: 'numeric' | '2-digit' = 'numeric',
  minuteLength: 'numeric' | '2-digit' = 'numeric',
  secondLength: 'numeric' | '2-digit' = 'numeric',
  value: string
): string {
  const now: Date = new Date(value)
  const options: Intl.DateTimeFormatOptions = {}

  if (includeYear) options.year = yearLength
  if (includeMonth) options.month = monthLength
  if (includeDay) options.day = dayLength
  if (includeHour) options.hour = hourLength
  if (includeMinute) options.minute = minuteLength
  if (includeSecond) options.second = secondLength
  options.hour12 = hour12

  return now.toLocaleString('en-US', options)
}

/**
 * Formats a datetime string to a readable date format.
 *
 * This function takes a datetime string in the format "YYYY-MM-DDTHH:mm:ss.sssZ"
 * and returns the date in the format "MMM DD, YYYY".
 *
 * @param {string} datetime - The datetime string to be formatted.
 * @returns {string} The formatted date string.
 * @throws {Error} Throws an error if the input is not a valid datetime string.
 *
 * @example
 * formatDate('1985-02-15T00:00:00.000Z') // returns "Feb 15, 1985"
 */
export function formatDate(datetime: string): string {
  const date = new Date(datetime)

  if (isNaN(date.getTime())) {
    throw new Error('Invalid datetime string')
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }

  return date.toLocaleDateString('en-US', options)
}

/**
 * Formats a datetime string to a "9:34 AM" format.
 *
 * This function takes a datetime string and returns the hour and minutes
 * in the format "9:34 AM" without leading zeros for the hours.
 *
 * @param {string} datetime - The datetime string to be formatted.
 * @returns {string} The formatted time string.
 * @throws {Error} Throws an error if the input is not a valid datetime string.
 *
 * @example
 * formatTime('2024-07-30T09:34:00.000Z') // returns "9:34 AM"
 */
export function formatTime(datetime: string): string {
  const date = new Date(datetime)

  if (isNaN(date.getTime())) {
    throw new Error('Invalid datetime string')
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }

  return date.toLocaleString('en-US', options)
}
