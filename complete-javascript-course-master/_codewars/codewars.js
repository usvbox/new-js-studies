//School Paperwork
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

const classmates = 5;
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
console.log(pagesToCopyForClass);
