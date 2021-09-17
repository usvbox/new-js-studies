"use strict";

////// Linear Search

const linearArr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
// let count = 0;
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === item) return i;
  }
  return null;
}

// console.log(linearSearch(linearArr, 7));
// console.log(`count =`, count);

////// Binary Search

const binaryArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//let count = 0;
function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  while (start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      return middle;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

//// Recursive Functions

/*function binarySearch(arr, item, start, end) {
  if (!(start <= end)) return -1;
  count++;
  console.log(`count = ${count}, start = ${start}, end = ${end}`);
  let middle = Math.floor((start + end) / 2);
  console.log(`middle = ${middle}`);
  if (arr[middle] === item) {
    return middle;
  }
  if (item < arr[middle]) {
    console.log(
      `item = ${item} arr[middle] = ${arr[middle]} end = ${middle - 1}`
    );
    binarySearch(arr, item, start, middle - 1);
  } else {
    console.log(
      `item = ${item} arr[middle] = ${arr[middle]} start = ${middle + 1}`
    );
    binarySearch(arr, item, middle + 1, end);
  }
}*/

/*
item = 0

Iteration 1
middle = 6
arr[middle] = 7
item < arr[middle]
end = middle - 1 = 5

start <= end true

Iteration 2
middle = 2
arr[middle] = 3
item < arr[middle]
end = middle - 1 = 1

start <= end true

Iteration 3
middle = 0
arr[middle] = 1
item < arr[middle]
end = middle - 1;

start <= end false
*/

/*
item = 6

Iteration 1
middle = 6
arr[middle] = 7
item < arr[middle] true
end = middle - 1 = 5

start <= end true

Iteration 2
middle = 2
arr[middle] = 3
item < arr[middle] false
start = middle + 1 = 3

start <= end true

Iteration 3
middle = 4
arr[middle] = 5
item < arr[middle] false
start = middle + 1 = 5;

start <= end true
middle = 5
arr[middle] = 6
*/

// console.log(binarySearch(binaryArr, 6, 0, binaryArr.length));
// console.log(`count =`, count);

////// Selection Sort

const selectionArr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
//let count = 0;
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

////// Bubble Sort

const bubbleArr = [3, 1, 5, 4];
//let count = 0;
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count++;
    }
  }
  return arr;
}

// console.log(bubbleSort(bubbleArr));
// console.log(count);

////// Quick Sort (Hoare's Algorithm)

const quickSortArr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;
function quickSort(arr) {}

// console.log(quickSort(quickSortArr));
// console.log(count);
