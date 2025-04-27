/**
 * Format a date object into a readable date string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "20th June, 2023")
 */
export function formatDate(date = new Date()) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const suffix = getDaySuffix(day);

  return `${day}${suffix} ${month}, ${year}`;
}

/**
 * Format a date object into a readable time string
 * @param {Date} date - The date to format
 * @returns {string} Formatted time string (e.g., "10:30 AM")
 */
export function formatTime(date = new Date()) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${ampm}`;
}

/**
 * Get the ordinal suffix for a day number
 * @param {number} day - The day of the month
 * @returns {string} The ordinal suffix (st, nd, rd, or th)
 */
function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
