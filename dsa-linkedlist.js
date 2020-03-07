//create linked list class w core functions
class _Node {
    constructor(value,next) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    contructor(){
        this.head = null;
    }
};

insertFirst(item) {
    this.head = new _Node(item, this.head);
};

insertLast(item) {
    if (this.head === null) {
        this.insertFirst(item);
    } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next
        }
         tempNode.next = new _Node(item,null)
    }
};

remove(item) {
    if (this.head === null) {
      return console.error('No items in list!');
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = this.head;
    while (current !== null && current.value !== item) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found');
    }
    previous.next = current.next;
  };

  find(item) {
    if (this.head === null) {
      return console.error('No items in list!');
    }
    let current = this.head;
    while (current !== null && current.value !== item) {
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found');
    }
    return current;
  }

  insertBefore(item, key) {
    if (this.head.value === key) {
      this.head = new _Node(key, this.head.next)
    } else {
      let current = this.head;
      let previous = this.head;
      while (current !== null && current.value !== key) {
        previous = current;
        current = current.next;
      }
      if (current === null) {
        return console.log('Item not found')
      }
      previous.next = new _Node(item, current)
    }
  }

  insertAfter(item, key) {
    let current = this.head;
    while (current !== null && current.value !== key) {
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found');
    }
    current.next = new _Node(item, current.next);
  }

  insertAt(item, position) {
    let counter = 1;
    if (position === 1) {
      this.insertFirst(item);
    } else {
      let previous = this.head;
      let current = this.head;
      while (current !== null && counter !== position) {
        previous = current;
        current = current.next;
        counter++;
      }
      if (current === null && counter === position) {
        previous.next = new _Node(item, null);
      }
      if (current === null && counter < position) {
        return console.log('Position is unreachable');
      }
      previous.next = new _Node(item, current);
    }
  }

  find(value) {
    if (this.head === null) {
      return false;
    }
    let tempNode = this.head;
    while (tempNode.value !== value) {
      if (tempNode.next === null) {
        return false;
      } else {
        tempNode = tempNode.next;
      }
    }
    return tempNode;
  }

  remove(value) {
    if (this.head === null) {
      return false;
    }
    let currentNode = this.head;
    let previousNode;
    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        return false;
      } else {
        //setting previous node to currentNode
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (!previousNode) {
      this.head = currentNode.next;
      return 'yay';
    }
    previousNode.next = currentNode.next;
    return true;
  }


//create singly linked list  
  function main() {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.find('Husker')
    SLL.remove('Husker')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tahuida')
  return SLL;
 
}
console.log(main())

/// Mystery program
// This function traverses a linked list to check for duplicate items.
// If duplicates are found, they are removed from the linked list.
// runtime: O(n^2)

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    // while current is not the last item enter loop.
    while (current !== null) {
      // declaring newNode as variable
      let newNode = current;
      // if newNode.next is not at the end of the linked list enter loop
      while (newNode.next !== null) {
        // if there are two consecutive values that are the same enter if block
        if (newNode.next.value === current.value) {
          // sets the newNode.next pointer to the node after current thus removing it from the linked list.
          newNode.next = newNode.next.next;
        }
        else {
          // if we do not enter the if block above, run the statement below to continue traversing the linked list.
          newNode = newNode.next;
        }
      }
      // once we complete the while loop, run statement below to continue traversing the linked list.
      current = current.next;
    }
  }

//reverse a list
function reverseAList(ll) {
    let current = ll.head;
    let previous = null;
    let tempNext = null;
    while (current !== null) {
        tempNext = current.next;
        current.next = previous;
        previous = current;
        current = tempNext;
    }
    ll.head = previous;
    return ll
}

// find third from last element
function thirdElementFromEnd(ll) {
    let current = ll.head;
    if (size(11) < 3) {
        return console.log("less than three items in list");
    }
    while (current.next.next.next != null) {
        current = current.next;
    }
    return current
}

//find middle
function findMiddle(ll) {
    let current = ll.head;
    let previous = null;
    let tempNext = null;
    let counter = 0;
    while (current !== null) {
        tempNext = current.next;
        current.next = previous;
        previous = current;
        current = tempNext;
        counter++
    } 
     ll.head = previous;
    let middle = Math.floor(counter / 2);
    current = ll.head;
    for (let i = 0; i < middle; i++) {
      current = current.next;
    }
    return current;
  } 

  //cycle in a list
  function cycle(ll) {
      let current = ll.head;
      let storedValue = ll.head;
      while (current !== null && storedValue !== null && storedValue.next !== null) {
        current = current.next;
        storedValue = storedValue.next.next;
        if (current === storedValue) {
          return true;
        }
      }
      return false;
    }

