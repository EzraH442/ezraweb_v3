export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(d: Date): string {
  return `${Months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default formatDate;
