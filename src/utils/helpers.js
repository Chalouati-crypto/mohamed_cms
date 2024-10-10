export default function formatDate(dateStr) {
  const dateObj = new Date(dateStr);

  const formattedDate = dateObj.toLocaleDateString("en-GB");
  return formattedDate;
}
