const BinarySearchTree = require("./binary-search-tree");
const Queue = require("./queue");

//how many searches

function binarySearch(arr, value, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  let index = Math.floor((start + end) / 2);
  let item = arr[index];

  console.log(`start and end: `, start, end);
  if (item === value) {
    return index;
  } else if (item < value) {
    return binarySearch(arr, value, index + 1, end);
  }
  //item greatter than value
  else if (item > value) {
    return binarySearch(arr, value, start, index - 1);
  }
}

//find a book
const books = [
  { dewy: "003.445", title: "a" },
  { dewy: "003.447", title: "b" },
  { dewy: "003.449", title: "c" },
  { dewy: "003.449", title: "d" },
  { dewy: "003.450", title: "e" }
];

//

function findBook(array, dewey, title) {
  //object.keys at beginning index
  const keys = Object.keys(array[0]);
  array.forEach(book => {
    if (book[keys[0]] === dewey && book[keys[1]] === title) {
      return book;
    }
  });
}
findBook(books, "003.449", "c");

//implement different tree traversals
function treeTraversals() {
  let BST = new BinarySearchTree();
  BST.insert(25, "25");
  BST.insert(15, "15");
  BST.insert(50, "50");
  BST.insert(10, "10");
  BST.insert(24, "24");
  BST.insert(35, "35");
  BST.insert(70, "70");
  BST.insert(4, "4");
  BST.insert(12, "12");
  BST.insert(18, "18");
  BST.insert(31, "31");
  BST.insert(44, "44");
  BST.insert(66, "66");
  BST.insert(90, "90");
  BST.insert(22, "22");
  //inOrder() preOrder() postOrder()

  const preOrder = bst => {
    console.log({ preOrder: bst.key });
    if (bst.left) {
      preOrder(bst.left);
    }
    if (bst.right) {
      preOrder(bst.right);
    }
  };

  const inOrder = bst => {
    if (bst.left) {
      inOrder(bst.left);
    }
    console.log(`bst.key `, { inOrder: bst.key });
    if (bst.right) {
      inOrder(bst.right);
    }
  };

  const postOrder = bst => {
    if (bst.left) {
      postOrder(bst.left);
    }
    if (bst.right) {
      postOrder(bst.right);
    }
    console.log(`postorder bst.key `, { postOrder: bst.key });
  };

  preOrder(BST);
  inOrder(BST);
  postOrder(BST);
}
//inOrder() preOrder() postOrder()

//next commanding officer

function nextCommandingOfficer() {
  let BST = new BinarySearchTree();
  BST.insert(5, "Captain Picard");
  BST.insert(3, "Commander Riker");
  BST.insert(6, "Commander Data");

  BST.insert(8, "Lt. Cmdr. Crusher");
  BST.insert(7, "Lieutenant Selar");
  BST.insert(3, "Lt. Cmdr. Worf");
  BST.insert(4, "Lt. Cmdr. LaForge");
  BST.insert(1, "Lt. security-officer");

  commanders(BST);
}

nextCommandingOfficer();

//max profit

function maxProfit(array) {
  //start at 0
  let max = 0;
  //loop through given array and set max
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] > max) {
      max = array[i + 1] - array[i];
    }
  }
  console.log(`max: `, max);
  return max;
}
maxProfit([128, 97, 121, 123, 98, 97, 105]);
