/**
 * Generates an array of objects with a date as the name, a random value between 100 and 500,
 * and a label key that is empty unless it's the first date, the start of a month, or the last entry.
 *
 * @param {number} count - The number of objects to generate.
 * @returns {Array<{name: string, value: number, label: string}>} An array of objects with 'name', 'value', and 'label' keys.
 */
export function generateDateValueArray(count: number): any {
  const data = []
  const today = new Date()
  const ticks = []

  for (let i = 0; i < count; i++) {
    // Create a new date object for each entry
    const date = new Date(today)
    date.setDate(today.getDate() - (count - 1) + i)

    // Format the date as a string (e.g., '2024-08-19') for the name key
    const formattedDate = date.toISOString().split('T')[0]

    // Generate a random value between 100 and 500
    const randomValue = Math.floor(Math.random() * 401) + 100

    // Determine the label
    let label = ''
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
    label = date.toLocaleDateString('en-US', options)
    if (i === 0 || i === count - 1 || date.getDate() === 1) {
      ticks.push(label)
    }

    // Push the object to the data array
    data.push({
      name: formattedDate,
      value: randomValue,
      label: label
    })
  }

  return { data, ticks }
}
