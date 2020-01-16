// //Counting Sheep

let num = 4;
function sheep(num) {
  if (num == 0) {
    console.log("all of the sheep have jumped over the fence");
  } else {
    console.log(`${num} sheep have jumped over the fence`);
    sheep(num - 1);
  }
}
sheep(num);
// Power Calculator
function powerCalculator(base, exp) {
  if (exp < 0) {
    console.log("exponent should be >=0");
  } else {
    return base * powerCalculator(base, exp - 1);
  }
}
console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));

//Reverse String
function reverseString(string) {
  if (string.length <= 0) {
    return "";
  } else {
    if (string.length >= 1) {
      return string[string.length - 1] + reverseString(string.slice(0, -1));
    }
  }
}
console.log(reverseString("acbde"));

// Triangular Number
function triangular(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + triangular(num - 1);
  }
}

console.log("triangular =", triangular(1));
console.log("triangular =", triangular(2));
console.log("triangular =", triangular(3));
console.log("triangular =", triangular(4));
console.log("triangular =", triangular(5));

//String Splitter
function stringSplitter(string, seperator) {
  if (string.length === 0) {
    return "";
  } else {
    return string[0] + stringSplitter(string.slice(1), sep);
  }
}
console.log(stringSplitter("02/20/2020", "/"));

//Fibonacci
fibonacci = num => {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
};
console.log(fibonacci(7));

//Factorial
function factorial(num) {
  if (num <= 1) {
    return num;
  } else {
    return num * factorial(n - 1);
  }
}
console.log(factorial(6));

//Binary
console.log("binary");
function binary(num) {
  if (num === 0) {
    return "0";
  }
  const dividedNum = Math.floor(num / 2);
  const remainder = num % 2;
  if (dividedNum === 0) {
    return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
}

console.log(binary(25));
