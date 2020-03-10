let cnt = 0;

//length = 8, 3 9 1 14 17 24 22 20
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  // array ==3 9 1 14 17 24 22 20, start = 0, end = 8
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function mergeSort(array) {
  console.log(array);
  if (array.length <= 1) {
    return array;
  }
  cnt++;
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  console.log("left ", left);
  console.log("right ", right);
  console.log("array ", array);
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  console.log("merge ", array);
  return array;
}
let arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
mergeSort(arr);

//drills - 2-1 The pivot could have been either 14 or 17
//Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the
//resulting list after the second partitioning according to the quicksort algorithm.

//When using the last item on the list as a pivot
//10, 3, 9, 12, 14, 17, 13, 15, 19, 16 -> 3, 9, 10, 12, 14, 13, 15, 16, 17, 19
//When using the first item on the list as a pivot
//13, 10, 3, 9, 12, 14, 17, 15, 19, 16 -> 3, 9, 10, 13, 12, 14, 17, 15, 19, 16
// 7. Sort in place
function shuffle(array, counter = 0) {
  while (counter < array.length) {
    let randomIndex = Math.floor(Math.random() * array.length);
    swap(array, counter, randomIndex);
    counter++;
    return shuffle(array, counter);
  }
  return array;
}

let shuffleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(shuffle(shuffleData));

// 8. Sorting books
function SortBooks(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = SortBooks(left);
  right = SortBooks(right);
  return merge(left, right, arr);
}

const books = [
  "To Kill a Mocking Bird",
  "Hamlet",
  "Ulysses",
  "The Lord of the Rings",
  "Of Mice and Men",
  "The Catcher in the Rye",
  "Odyssey",
  "Harry Potter",
  "Game of Thrones",
  "War and Peace",
  "Catch-22"
];

console.log(SortBooks(books));
