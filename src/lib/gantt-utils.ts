/**
 * Generates an array of objects representing time and meridiem for the current time,
 * starting from the nearest half-hour mark, in 30-minute intervals, with a total of 12 entries.
 * Optionally supports 24-hour format (military time).
 *
 * @param {boolean} [isMilitaryTime=false] - If true, returns time in 24-hour format. Default is 12-hour format.
 * @returns {Array<{time: string, meridiem?: string}>} An array of objects with 'time' and optional 'meridiem' keys.
 */
export function generateHalfHourIntervals(
  isMilitaryTime: boolean = false
): Array<{ time: string; meridiem?: string }> {
  const intervals = []
  const now = new Date()

  // Determine the starting point: on the hour or half hour
  const currentMinutes = now.getMinutes()
  if (currentMinutes >= 30) {
    now.setMinutes(30)
  } else {
    now.setMinutes(0)
  }

  // Subtract 30 minutes from the current time
  now.setMinutes(now.getMinutes() - 30)

  // Generate 12 time intervals (including the current time)
  for (let i = 0; i < 12; i++) {
    const hours = now.getHours()
    const minutes = now.getMinutes()

    let timeString
    let meridiem

    if (isMilitaryTime) {
      // 24-hour format (military time)
      timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
    } else {
      // 12-hour format (regular time)
      meridiem = hours >= 12 ? 'PM' : 'AM'
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12
      timeString = `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes}`
    }

    // Push the time and meridiem (if not military time) to the array
    intervals.push({
      time: timeString,
      ...(isMilitaryTime ? {} : { meridiem })
    })

    // Increment by 30 minutes for the next interval
    now.setMinutes(now.getMinutes() + 30)
  }

  return intervals
}
