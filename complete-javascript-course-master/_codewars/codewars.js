//School Paperwork
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

/* const classmates = 5;
const pages = 5;

const calculateBlankPages = function (classmates, pages) {
  //Option 1
  //   let totalPages;
  //   if (classmates > 0 && pages > 0) {
  //     totalPages = classmates * pages;
  //     return totalPages;
  //   } else {
  //     return 0;
  //   }
  //Option 2
  return classmates > 0 && pages > 0 ? classmates * pages : 0;
};

//Option 3
const calcPages = (n, m) => Math.max(0, n) * Math.max(0, m);

let pagesToCopy = calculateBlankPages(classmates, pages);
console.log(pagesToCopy);

let pagesToCopyForClass = calcPages(classmates, pages);
console.log(pagesToCopyForClass); */

//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.
//Example: h = 0, m = 1, s = 1 => result = 61000

/*
Questions
Does the function need to take in a particular reading of the clock?
Do we need to calculate how much time has passed since midnight? E.g. if it's 2:53:13am, it means that 2 hours 53 minutes and 13 seconds have passed since midnight, and we need to convert the time passed to milliseconds?
 */

/*
Decomposition
Write an empty body of a function that can take in hours, minutes and seconds as arguments, basically, the reading of a clock, the time that has passed after midnight.
Check if the hour value is within the allowed range
Check if the minute value is within the allowed range
Check if the second value is within the allowed range
Process an exception if the passed values are outside the allowed ranges
Convert hours into milliseconds => h*60*60*1000
Convert minutes into milliseconds => m*60*1000
Convert seconds into milliseconds => s*1000
Sum the converted h, m, s
Return the resulting time value in milliseconds
 */

let hours = 0;
let minutes = 1;
let seconds = 1;
let clockReading;
let timeInMilliseconds;

const checkTimeValues = function (h, m, s) {
  if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    return true;
  } else {
    return false;
  }
};

const displayClockReading = function (h, m, s) {
  let hour;
  let minute;
  let second;
  const isTimeValid = checkTimeValues(h, m, s);
  if (isTimeValid) {
    h.toString().length < 2 ? (hour = "0" + h) : (hour = h.toString());
    m.toString().length < 2 ? (minute = "0" + m) : (minute = m.toString());
    s.toString().length < 2 ? (second = "0" + s) : (second = s.toString());
    return `${hour}:${minute}:${second}`;
  } else {
    return `Wrong time values.`;
  }
};

const calculateTimeInMilliseconds = function (h, m, s) {
  // const checkTimeValues = function (h, m, s) {
  //   if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const isTimeValid = checkTimeValues(h, m, s);
  if (isTimeValid) {
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  } else {
    return `Wrong time values.`;
  }
};

clockReading = displayClockReading(hours, minutes, seconds);
console.log(clockReading);

timeInMilliseconds = calculateTimeInMilliseconds(hours, minutes, seconds);
console.log(timeInMilliseconds);

function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  return setTime - midnight;
}

console.log(
  new Date().setHours(hours, minutes, seconds) - new Date().setHours(0, 0, 0)
);

console.log(Date());
console.log(new Date());
console.log(Date.now());
