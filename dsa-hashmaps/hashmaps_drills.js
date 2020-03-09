const { HashMap } = require("./HashMap");
const { HashMap_SepChain } = require("./HashMap_SepChain");

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lor = new HashMap();
  const data = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandolf" },
    { Human: "Aragon" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" }
  ];
  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lor.set(key, obj[key]);
  });

  console.log(lor); // length = 9. 2 items are missing because there are 2 items with the same key value ('Hobbit', 'Maiar')

  // TODO: Retrieve the value that is hashed in the key "Maiar" and "Hobbit"
  console.log("Maiar =", lor.get("Maiar")); // Sauron
  console.log("Hobbit =", lor.get("Hobbit")); // Frodo

  // TODO: What are the values of Maiar and Hobbit that I have?
  // I am getting Sauron and Frodo because we have 2 keys storing 2 different values and its only showing the latter value due to not having anything to resolve collisions

  // TODO: What is the capacity of the hash table after you hashed all the above items?
  console.log(lor._capacity); // returns 24
  // capacity is 24. We went over our capacity load ratio (50%) of 8 and we have to multiply that by our size_ratio value of 3 so thats how we got 24.
  // initial capacity = 8. MAX_LOAD_RATIO = 0.5. SIZE_RATIO = 3.
  // Once the load capacity reached 4 items, the initial capacity was multipled by the SIZE_RATIO of 3.
}

main();

//demonstrate understanding
//You don't need to write code for the following two drills. use any drawing app or simple pen and paper *
//TODO: 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 using open addressing and a hash function k mod m.
//[22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]
//TODO: 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.
//[null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]

//remove duplicates
function removeDuplicates(string) {
  const map = new Map();
  let newStr = "";
  string.split("").forEach(letter => {
    if (!map.has(letter)) {
      map.set(letter, "");
      newStr += letter;
    }
  });
  return newStr;
}

console.log(removeDuplicates("google")); // gole
console.log(removeDuplicates("google all that you think can think of")); // gole athyuinkcf

//permuation a palindrome

// input: 'acecarr'
// output: true

function palindrome(string) {
  const result = new Map();
  for (let i = 0; i < string.length; i++) {
    console.log(result);
    if (!result.delete(string[i])) {
      result.set(string[i], 1);
    }
  }
  console.log(result.size, result);
  if (result.size <= 1) {
    return true;
  }
  return false;
}

console.log(palindrome("acecarr")); // true;
console.log(palindrome("north")); // false;

//anagram grouping

// input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
// output = [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

// function anagrams(input) {
//     let map = new HashMap();
//     input.forEach(word => {
//         map.set(word, '');
//     });
//     let result = [];
//     map._hashTable.forEach(arr => result.push(arr.map(obj => obj.key)));
//     return result;
// }

// console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

//seperate chaining

HashMap_SepChain.MAX_LOAD_RATIO = 0.5;
HashMap_SepChain.SIZE_RATIO = 3;

function sepMain() {
  const lor = new HashMap_SepChain();
  const data = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandolf" },
    { Human: "Aragon" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" }
  ];
  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lor.set(key, obj[key]);
  });
  console.log(lor);
}

sepMain();
