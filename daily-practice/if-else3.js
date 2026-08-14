/* 13.08.2026 */

// 1. Login email aur password correct hain ya nahi.
function checkLogin(email, password) {
  if (email === "himanshusinha011@gmail.com" && password === "12345678") {
    console.log("Login Correct");
  } else {
    console.log("Invalid Login");
  }
}
checkLogin("himanshusinha011@gmail.com", "12345678");

// 2. Username empty hai ya nahi.
function checkUserName(userName) {
  if (userName.trim() === "") {
    console.log("Please enter username");
  } else {
    console.log("username is valid");
  }
}
checkUserName("hsinha011");

// 3 Password 8 characters ka hai ya nahi.
function checkPassword(password) {
  if (password.length === 8) {
    console.log("Password is valid");
  } else {
    console.log("Invalid Password");
  }
}
checkPassword("12345678");

// 4 Cart total ₹1000 se greater hai to discount do.
function checkDiscount(cartTotal) {
  if (cartTotal > 1000) {
    let totalDiscount = (cartTotal * 10) / 100;

    console.log(`You got ${totalDiscount} discount on your purchase`);
  } else {
    console.log("No discount available");
  }
}
checkDiscount(2000);

// 5. Bank balance withdrawal ke liye sufficient hai ya nahi.
function checkBalance(withdrawal) {
  let BankBalance = 10000;
  if (BankBalance >= withdrawal) {
    console.log("you can withdraw money");
  } else {
    console.log("you are not eligible");
  }
}
checkBalance(1000);

// 6. ATM withdrawal amount valid hai ya nahi.
function checkWithDrawal(amount) {
  if (amount > 0) {
    console.log("withdraw amount is valid");
  } else {
    console.log("withdraw amount is invalid");
  }
}
checkWithDrawal(1000);

// 7. Driving license ke liye age eligible hai ya nahi.
function checkAge(age) {
  if (age >= 18) {
    console.log("eligible for driving license");
  } else {
    console.log("you are too young");
  }
}
checkAge(19);

// 8. Voting ke liye eligible hai ya nahi.
function checkAgeVoting(age) {
  if (age >= 18) {
    console.log("eligible for voting");
  } else {
    console.log("not eligible for voting");
  }
}
checkAgeVoting(19);

// 9. Number leap year hai ya nahi.
function checkLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("year is leap year");
  } else {
    console.log("not leap year");
  }
}

// 10. Character vowel hai ya consonant.
function checkVowels(char) {
  if ("aeiou".includes(char.toLowerCase())) {
    console.log("Vowels");
  } else {
    console.log("Consonants");
  }
}
// 10. Character vowel hai ya consonant.
function checkVowels(char) {
  if ("aeiou".includes(char.toLowerCase())) {
    console.log("Vowels");
  } else {
    console.log("Consonants");
  }
}
checkVowels("z");
