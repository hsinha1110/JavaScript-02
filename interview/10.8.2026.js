// 1 Remove duplicate values from an array

function removeDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// 2 Find largest & smallest number in an array
function findLargest(arr) {
  let largest = arr[0];
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { smallest, largest };
}
console.log(findLargest([12, 45, 7, 89, 34, 67, 23]));

// 3 Find second largest element
function secondLargest(arr) {
  let secondLargest = -Infinity;
  let larger = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larger) {
      secondLargest = larger;
      larger = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== larger) {
      secondLargest = arr[i];
    }
  }
  return { secondLargest, larger };
}
console.log(secondLargest([12, 45, 7, 89, 34, 67, 23]));

// 4 Reverse array without reverse
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([12, 45, 7, 89, 34, 67, 23]));

// 5 Find unique elements
function findUniqueElement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(findUniqueElement([1, 2, 2, 3, 4, 4, 5]));

// 6 Check Frequency of the element
function frequecyElement(arr) {
  let result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return result;
}
console.log(frequecyElement([1, 2, 2, 3, 4, 4, 5]));

// 7 Find missing number from the array
function missingNumber(arr) {
  let n = arr.length + 1;
  let sumOfNArr = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const missNum = sumOfNArr - sum;
  return missNum;
}
console.log(missingNumber([1, 3, 4, 5, 6, 7]));

// 8 Check Array is sorted or not
function checkSorted(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}
console.log(checkSorted([1, 3, 4, 5, 6, 7]));

// 9 Merge two arrays
function mergeArr(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }
  return result;
}
console.log(mergeArr([1, 2, 3, 4], [5, 6, 7, 8]));

// 10 Flatten Nested Array
function flatArr(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatArr(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatArr([1, 2, 3, [4, 5, [6, 7, [8]]]]));
