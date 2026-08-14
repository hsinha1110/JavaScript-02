/* 11.08.2026 */

// 1. Number positive, negative ya zero check karo.
function checkNumber(n) {
  if (n > 0) {
    console.log("Number is Positive");
  } else if (n < 0) {
    console.log("Number is Negative");
  } else {
    console.log("Number is zero");
  }
}
checkNumber(0);

// 2. Number even ya odd check karo.
function checkEvenOdd(n) {
  if (n % 2 === 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}
checkEvenOdd(4);

// 3. Number greater than 10 hai ya nahi.
function checkNum(n) {
  if (n > 10) {
    console.log("Number is greater than 10");
  } else {
    console.log("Number is less than 10");
  }
}
checkNum(12);

// 4. Number 5 se divisible hai ya nahi.
function checkDivisible(n) {
  if (n % 5 === 0) {
    console.log("Number is divisible by 5");
  } else {
    console.log("Number is not divisible by 5");
  }
}
checkDivisible(124);

// 5. Person adult hai ya minor.
function checkAge(age) {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}
checkAge(15);

// 6. Do numbers me greater number find karo.
function checkGreater(n1, n2) {
  if (n1 > n2) {
    console.log(`${n1} is greater than ${n2}`);
  } else if (n1 < n2) {
    console.log(`${n1} is smaller than ${n2}`);
  } else {
    console.log("Both are equal");
  }
}
checkGreater(10, 20);

// 7. Do numbers equal hain ya nahi.
function checkEqual(n1, n2) {
  if (n1 === n2) {
    console.log("Both are equal");
  } else {
    console.log("Both are not equal");
  }
}
checkEqual(20, 10);

// 8. Number 100 ke equal hai ya nahi.
function checkEqualorNot(n) {
  if (n === 100) {
    console.log("Number is equal to 100");
  } else {
    console.log("Number is not equal to 100");
  }
}
checkEqualorNot(101);

// 9. Student pass/fail check karo, passing marks 40.
function checkPassFail(marks) {
  if (marks >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
checkPassFail(33);

// 10 Temperature hot/cold check karo.
function checkTemp(temp) {
  if (temp >= 39) {
    console.log("Hot");
  } else {
    console.log("Cold");
  }
}
checkTemp(33);
