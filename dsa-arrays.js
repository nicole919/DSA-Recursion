//implement an array from scratch

const Memory = require("./memory.js");
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

//push method
function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();
  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  console.log(arr.get(0));
  //pop method
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");
  console.log(arr.get(0));
}

main();

//urlify a string

function urlifyString(string) {
  string = string.trim();
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      output += "%20";
    } else {
      output += string[i];
    }
  }
  return output;
}

// input: tauhida parveen

// Output: tauhida%20parveen

// input: www.thinkful.com /tauh ida parv een

// output: www.thinkful.com%20/tauh%20ida%20parv%20een

// complexity: O (n)
console.log(urlifyString("  tauhida parveen"));

//filter an array
function myFilter(arr, filter = 5) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= filter) {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8]));

// input : [1, 2, 3, 4, 5, 6, 7, 8]

// output : [5, 6, 7, 8]

// complexity: O (n)

//arr[0]+arr[1]
//arr[0]+arr[1]+arr[2]

//max sum
function maxSum(arr) {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

const answer = maxSum([4, 6, -3, 5, -2, 1]);
//console.log(answer);
//answer = 12
//O(n^2)

//merge arrays

function mergeArrays(arr1, arr2) {
  let output = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  while (current < arr1.length + arr2.length) {
    let depleted1 = index1 >= arr1.length;
    let depleted2 = index2 >= arr2.length;

    //if next item comes from arr1
    if (!depleted1 && (depleted2 || arr1[index1] < arr2[index2])) {
      output.push(arr1[index1]);
      index1++;
      //if next item comes from arr2
    } else {
      output.push(arr2[index2]);
      index2++;
    }
    current++;
  }

  return output;
}

//const answer2 = mergeArrays([1,3,6],[2,4,5]);
//console.log(answer2);
//answer2 = [1,2,3,4,5,6]
//O(n)

//remove characters

function removeCharacters(string, chars) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let contained = true;
    for (let j = 0; j < chars.length; j++) {
      if (string[i] === chars[j]) {
        contained = false;
      }
    }
    if (contained) {
      output += string[i];
    }
  }
  return output;
}

//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'
// Complexity: O (n^2)

//products

function products(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    output.push(product);
  }
  return output;
}

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]
// O(n^2)

//2D array

function twoDarray(arr) {
  let output = [];
  let rowCheck = [];
  let columnCheck = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        rowCheck[i] = true;
        columnCheck[j] = true;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!output[i]) {
      output[i] = [];
    }
    for (let j = 0; j < arr[0].length; j++) {
      if (rowCheck[i] || columnCheck[j]) {
        output[i][j] = 0;
      } else {
        output[i][j] = 1;
      }
    }
  }
  return output;
}

/*row check
    [[0],
     [0],
     [1],
     [0],
     [1]]
  */

/*
    column check
  [0],[0],[1],[1],[0]
  */

//input
const arr1 = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];
//output
const arr2 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0]
];

//const answer4 = twoDarray(arr1);
//console.log(answer4);

//O(n^2)

//string rotation
function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let doublestr1 = str1 + str1;

  if (doublestr1.indexOf(str2) === -1) {
    return false;
  } else {
    return true;
  }
}

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

const answer5 = stringRotation("amazon", "azonam");
console.log(answer5);

//O(n)
//indexOf's complexity is O(n)
