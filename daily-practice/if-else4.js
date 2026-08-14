/* 14.8.2026 */
// 1. Character uppercase hai ya lowercase.
function checkLowerCase(char) {
  if (char === char.toLowerCase()) {
    console.log("Character is in lower case");
  } else {
    console.log("Character is in upper case");
  }
}
checkLowerCase("A");

// 2. Number single/double/triple digit hai.
function checkDigit(num) {
  if (num >= 0 && num <= 9) {
    console.log("Single Digit");
  } else if (num >= 10 && num <= 99) {
    console.log("Double Digit");
  } else if (num >= 100 && num <= 999) {
    console.log("Thriple Digit");
  } else {
    console.log("Not in range");
  }
}
checkDigit(11);

// 3. Number 2, 3, 5 se divisible hai ya none.
function checkDivisible(num) {
  if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
    console.log("Number is divisible by 2 , 3 and 5");
  } else {
    console.log("Number is not divisible by 2 , 3 and 5");
  }
}
checkDivisible(30);

// 4. Triangle valid hai ya nahi.
function checkTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Valid Triangle");
  } else {
    console.log("Invalid Triangle");
  }
}

checkTriangle(10, 20, 15);

// 5. Triangle equilateral/isosceles/scalene identify karo.
function checkTriangle2(a, b, c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || c === a) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
console.log(checkTriangle2(5, 5, 5));
console.log(checkTriangle2(5, 5, 3));
console.log(checkTriangle2(5, 4, 3));

//6. Three numbers ascending order me hain ya nahi.
function ascendingOrder(a, b, c) {
  if (a <= b && b <= c) {
    console.log("Ascending order");
  } else {
    console.log("Not in ascending order");
  }
}

ascendingOrder(10, 20, 30);

// 7. Three numbers descending order me hain ya nahi.
function descendingOrder(a, b, c) {
  if (a >= b && b >= c) {
    console.log("Desceding order");
  } else {
    console.log("Not in descending order");
  }
}
descendingOrder(100, 90, 80);

// 8. Number prime hai ya nahi — only conditions ke saath.
function checkPrimer(num) {
  if (num <= 1) {
    return "Not Prime";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}
console.log(checkPrimer(3));

// 9. Number palindrome hai ya nahi.
function checkPalindrome(num) {
  let str = String(num);
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str ? "Palindrome" : "Not Palindrome";
}
console.log(checkPalindrome(132));
