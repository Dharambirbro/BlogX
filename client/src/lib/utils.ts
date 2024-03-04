// 2024-02-15 --> Thursday, Feb 2024
export function DateConvert(date: string) {
  // Parse the date string
  var dateString = date;
  var dateObj = new Date(dateString);

  // Define arrays for days and months
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthsOfYear = [
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

  // Get day of the week, month, and year
  var dayOfWeek = daysOfWeek[dateObj.getDay()];
  var month = monthsOfYear[dateObj.getMonth()];
  var year = dateObj.getFullYear();

  // Construct the formatted date string
  var formattedDate = dayOfWeek + ", " + month + " " + year;
  return formattedDate;
}

export function Capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function SpaceRemover(str: string) {
  let stringWithout_Spaces_specialWord = str.replace(/[^\w]/gi, "");
  return stringWithout_Spaces_specialWord;
}
