/* 12.08.2026 */

// 1. Number 1–10 ke range me hai ya nahi.
function checkRange(num) {
  if (num >= 1 && num <= 10) {
    console.log("Number is in range of 1 to 10");
  } else {
    console.log("Not in range");
  }
}
checkRange(11);

// 2. Number 10–50 ke range me hai ya nahi.
function checkAnotherRange(num) {
  if (num >= 10 && num <= 50) {
    console.log("Number is in range of 10 to 50");
  } else {
    console.log("Number is not in range");
  }
}
checkAnotherRange(20);

// 3. Teen numbers me largest find karo.
function checkLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log("A is greater");
  } else if (b >= a && b >= c) {
    console.log("B is greater");
  } else {
    console.log("C is greater");
  }
}
checkLargest(10, 20, 30);

// 4. Teen numbers me smallest find karo.
function checkSmallest(a, b, c) {
  if (a <= b && a <= c) {
    console.log("A is smallest");
  } else if (b <= a && b <= c) {
    console.log("B is smallest");
  } else {
    console.log("C is smallest");
  }
}
checkSmallest(30, 10, 50);

// 5. Marks ke basis par Pass/Fail/Distinction decide karo.
function checkMarks(marks) {
  if (marks >= 80) {
    console.log("Distinction");
  } else if (marks <= 35) {
    console.log("Fail");
  } else {
    console.log("Pass");
  }
}
checkMarks(25);

// 6. Marks ke basis par grade A/B/C/D/F do.
function checkGrade(marks) {
  if (marks <= 0 || marks > 100) {
    console.log("Invalid");
  } else if (marks >= 80) {
    console.log("A");
  } else if (marks >= 70) {
    console.log("B");
  } else if (marks >= 60) {
    console.log("C");
  } else if (marks >= 40) {
    console.log("D");
  } else {
    console.log("FAIL");
  }
}
checkGrade(-77);

function checkAge(age) {
  if (age < 0) {
    console.log("Invalid");
  } else if (age <= 5) {
    console.log("Child");
  } else if (age <= 17) {
    console.log("Teenager");
  } else if (age < 60) {
    console.log("Adult");
  } else {
    console.log("Senior Citizen");
  }
}

checkAge(35);

// 8. Salary ke basis par bonus calculate karo.
function checkBonus(salary) {
  const bonus = (salary * 5) / 100;
  if (salary >= 40000) {
    console.log(`Salary is ${salary} and bonus is ${bonus}`);
  } else {
    console.log("Normal Salary");
  }
}
checkBonus(20000);

// 9. Number 3 aur 5 dono se divisible hai ya nahi.
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("Number is divisible by 3 and 5");
  } else {
    console.log("Number is not divisible by 3 and 5");
  }
}
checkDivisible(30);

// 10. Number 3 ya 5 se divisible hai ya nahi.
function checkAnotherDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("Number is divisible by 3 and 5");
  } else {
    console.log("Number is not divisible by 3 and 5");
  }
}
checkAnotherDivisible(222);
