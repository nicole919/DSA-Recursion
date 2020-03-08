//create stack class with core functions
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    this.top = new _Node(data, this.top);
  }

  pop() {
    const topNode = this.top;
    if (topNode === null) return;
    this.top = topNode.next;
    return topNode.value;
  }
}

module.exports = Stack;

//star trek stack
function main() {
  const starTrek = new Stack();

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
}

//useful methods for a stack

function peek(stack) {
  if (!stack.top) return null;
  return stack.top.value;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  let currNode = stack.top;
  if (currNode === null) console.log("empty stack");
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

//check for palindromes
function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (string.length <= 1) return true;
  const firstHalfEndIndex = Math.floor((string.length - 2) / 2);
  const secondHalfStartIndex = Math.ceil(string.length / 2);

  const charStack = new Stack();

  for (let i = 0; i <= firstHalfEndIndex; i++) {
    charStack.push(string[i]);
  }

  for (let i = secondHalfStartIndex; i < string.length; i++) {
    if (string[i] !== charStack.pop()) return false;
  }
  return true;

  //compare front half of a string to the back half the string
  //ignore the character in the middle if the string has an odd number of chars
  //iterate through the first half of the string and push chars to a stack
  //then iterate through the second half of the string and compare the top char in stack
  //to the next char of the word
  //if at any point stackChar !== stringChar, return false
  //else, return true
}

//matching parenthesis in an expression

function parenthesisCheck(string) {
  //iterate through the given string
  //push "(" parenthesis (only parenthesis) to the stack when found
  //pop the stack when ")" is found
  //if at the end of the string, the stack still has something on it, we have unclosed parenthesis
  //while iterating, if we try to pop an empty stack, we're missing open parenthesis
  if (!string.length) return null;
  const parenStack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      parenStack.push("(");
    }
    if (string[i] === ")") {
      if (isEmpty(parenStack)) {
        console.log('you are missing a "("');
        return false;
      }
      parenStack.pop();
    }
  }
  if (!isEmpty(parenStack)) {
    console.log('you are missing a ")"');
    return false;
  }
  return true;
}

//sort stack

function sortStack(stack) {
  if (stack.top === null || stack.top.next === null) return stack;
  //iterate through the given stack once and identify minValue and maxValue.
  //push maxValue to newStack.top
  //iterate through the given stack again to find the next largest number
  //that is less than newStack.top
  //once we've taken one pass through the given stack, we will push the current value
  //of largestValue to newStack
  //run this iteration until newStack.top === minValue

  const newStack = new Stack();
  let minValue = stack.top.value;
  let maxValue = stack.top.value;
  let currNode = stack.top;
  while (currNode.next !== null) {
    if (currNode.value > maxValue) maxValue = currNode.value;
    if (currNode.value < minValue) minValue = currNode.value;
    currNode = currNode.next;
  }
  if (currNode.value > maxValue) maxValue = currNode.value;
  if (currNode.value < minValue) minValue = currNode.value;

  newStack.push(maxValue);

  while (newStack.top.value !== minValue) {
    let currNode = stack.top;
    let currMax = minValue;

    while (currNode.next !== null) {
      if (currNode.value > currMax && currNode.value < newStack.top.value) {
        currMax = currNode.value;
      }
      currNode = currNode.next;
    }
    if (currNode.value > currMax && currNode.value < newStack.top.value) {
      currMax = currNode.value;
    }
    newStack.push(currMax);
  }

  return newStack;
}

//create a queue class using doubly linked list

class _Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new _Node(data, this.last);
    if (this.first === null) this.first = newNode;
    if (this.last) this.last.next = newNode;
    this.last = newNode;
  }

  dequeue() {
    if (!this.first) return null;
    const firstNode = this.first;
    if (firstNode.next === null) this.last = null;
    else firstNode.next.prev = null;
    this.first = firstNode.next;
    return firstNode.value;
  }
}

//queue implementation using a stack

//square dance pairing

const Dance = new dancePartners();

Dance.queueDancer("F Jane");
Dance.queueDancer("M Frank");
Dance.queueDancer("M John");
Dance.queueDancer("M Sherlock");
Dance.queueDancer("F Madonna");
Dance.queueDancer("M David");
Dance.queueDancer("M Christopher");
Dance.queueDancer("F Beyonce");

class dancePartners {
  constructor() {
    this.maleQ = new Queue();
    this.femaleQ = new Queue();
  }

  queueDancer(string) {
    const gender = string[0];
    const name = string.split(" ")[1];

    if (gender === "F") this.femaleQ.enqueue(name);
    if (gender === "M") this.maleQ.enqueue(name);

    if (this.femaleQ.first && this.maleQ.first) {
      const fDancer = this.femaleQ.dequeue();
      const mDancer = this.maleQ.dequeue();
      console.log(
        `Female dancer is ${fDancer}, and the male dancer is ${mDancer}`
      );
    }

    if (this.femaleQ.first) {
      //count & display waiting female dancers
      let count = 1;
      let currNode = this.femaleQ.first;

      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} female dancers waiting to dance.`);
    }

    if (this.maleQ.first) {
      //count & display waiting male dancers
      let count = 1;
      let currNode = this.maleQ.first;

      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} male dancers waiting to dance.`);
    }
  }
}

//ophidian bank

function ophidinBankTest() {
  const BQ = new Queue();

  BQ.enqueue("person a");
  BQ.enqueue("person b");
  BQ.enqueue("person c");
  BQ.enqueue("person d");
  BQ.enqueue("person e");
  BQ.enqueue("person f");

  ophidinBank(BQ);
}

ophidinBankTest();
function peek(queue) {
  if (!queue.first) return null;
  return queue.first.value;
}

function isEmpty(queue) {
  return queue.first === null;
}

function display(queue) {
  let currNode = queue.first;
  if (currNode === null) console.log("empty queue");
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function ophidinBank(queue) {
  while (queue.first) {
    let person = queue.dequeue();
    let random = Math.random();
    if (random < 0.25) {
      queue.enqueue(person);
      console.log(
        `${person} paperwork isn't quite right, and moved back to the end of the queue`
      );
    } else {
      console.log(`${person} served`);
    }
  }
  console.log(`Served everybody`);
}
