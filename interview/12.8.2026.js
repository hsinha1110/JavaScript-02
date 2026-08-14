// 1 Reverse String

// Manual
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("JavaScript"));

// Built In
function reverseString2(str) {
  const result = str.split("").reverse().join("");
  return result;
}
console.log(reverseString("JavaScript"));

// 2 Palindrome
function checkPalindrom(str) {
  const result = str.split("").reverse().join("");
  return result === str ? "Palindrom" : "Not Palindrome";
}
console.log(checkPalindrom("MADAMA"));

// 3 Check Largest and Smallest
function checkLargest(num) {
  let largest = num[0];
  let smallest = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }

    if (num[i] < smallest) {
      smallest = num[i];
    }
  }
  return { smallest, largest };
}
console.log(checkLargest([10, 5, 20, 8]));

// 4 Remove Duplicates
function removeDuplicates(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (!result.includes(num[i])) {
      result.push(num[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// 5 Count Frequency
function countFrequency(arr) {
  const result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return result;
}
console.log(countFrequency([1, 2, 2, 3, 3, 3]));

// 6 Find Duplicates
function findDuplicates(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 3, 3, 4]));

// 7 Sum of Array
function sumOfArray(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

// 8 Flattern Array
function flatternArr(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatternArr(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatternArr([1, [2, [3, 4]]]));

// 9 Count Vowels
let count = 0;
function countVowels(char) {
  for (let item of char.toLowerCase()) {
    if ("aeiou".includes(item)) {
      console.log(count++);
    }
  }
  return count;
}
countVowels("I Love JavaScript");
