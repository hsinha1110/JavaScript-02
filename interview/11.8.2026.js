// 1. reverse string
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("JavaScript"));

// 2 Check Palindrome
function checkPalindrome(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  if (result === str) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
  return result;
}
checkPalindrome("MADAMA");

// 3 Count Vowels
let count = 0;

function countVowels(ch) {
  for (let i of ch) {
    if ("aeiou".includes(i)) {
      count++;
      console.log(count);
    }
  }
}
countVowels("JavaScript");

// 4 Find Duplicates from array
function findDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5]));

let str = "programming";

// 5 Find Character Frequency
const res = str.split("").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

// 6 Find first non repeating
const res2 = str.split("").find((item) => res[item] === 1);
console.log(res2);

// 7 Find sum of array
function sumOfArray(n) {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}
console.log(sumOfArray([1, 4, 5, 6, 8, 12]));
