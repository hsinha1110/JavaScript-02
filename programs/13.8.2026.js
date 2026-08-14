// 1 Check Array is sorted or not

function checkSorted(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}
console.log(checkSorted([1, 2, 3, 4, 5]));

// 2 Find Longest string
function checkLongestString(str) {
  let strr = str.split(" ");
  let longest = strr[0];
  let smallest = strr[0];

  for (let word of strr) {
    if (word.length > longest.length) {
      longest = word;
    }
    if (word.length < smallest.length) {
      smallest = word;
    }
  }
  return { smallest, longest };
}
console.log(checkLongestString("I Love JavaScript"));

// 3 First Letter Capitalize
function captializeLetter(str) {
  let str1 = str.split(" ");
  let result = "";
  for (let word of str1) {
    result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }
  return result.trim();
}
console.log(captializeLetter("hello world"));

// 4 Remove Duplicate
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 5 Find Second Largest
function secondLargest(num) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      secondLargest = largest;
      largest = num[i];
    } else if (num[i] > secondLargest && num[i] !== largest) {
      secondLargest = num[i];
    }
  }
  return { largest, secondLargest };
}
console.log(secondLargest([10, 5, 20, 8, 15]));

// 6 Count frequency of each elements
function countFrequency(arr) {
  const result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return result;
}
console.log(countFrequency([1, 2, 2, 3, 1, 2]));

// 7 non repeating character
function firstNonRepeating(str) {
  const result = str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const result2 = str.split("").find((item) => result[item] === 1);
  return result2;
}
console.log(firstNonRepeating("aabbcdde"));

//8 Find Missing Number
function MissingNumber(arr) {
  let n = arr.length + 1;
  let sumOfArray = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const missingNum = sumOfArray - sum;
  return missingNum;
}
console.log(MissingNumber([1, 2, 3, 5, 6, 7]));
