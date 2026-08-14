// IIFE
(function () {
  console.log("JavaScript");
})();

(function (name) {
  console.log(`Hell ${name}`);
})("Himanshu");

const multiply = (function (a, b) {
  return a * b;
})(3, 6);
console.log(multiply);

// Callback
const calculate = (calculation = (a, b, calc) => {
  return calc(a, b);
});

const mult = (a, b) => {
  return a * b;
};

const add = (a, b) => {
  return a + b;
};
console.log(calculate(10, 20, mult));
console.log(calculate(20, 30, add));

// Promise
const res = new Promise((resolve, reject) => {
  let isLogin = true;
  if (isLogin) {
    resolve("User Logged in");
  } else {
    reject("Not Loggin");
  }
});
res.then((res) => console.log(res)).catch((err) => console.log(err));

// async await
// const getProducts = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// };
// getProducts()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Lexical Scope
let firstName = "Himanshu";
const outer = () => {
  let lastName = "Sinha";
  const inner = () => {
    console.log(`My ${firstName} - ${lastName}`);
  };
  return inner;
};
const outt = outer();
outt();

// Closure
const out = () => {
  let count = 0;
  const inn = () => {
    console.log("Count is :", count);
    count++;
  };
  return inn;
};
const out2 = out();
out2();
out2();
out2();

// Call apply bind
const user = {
  firstName: "Himanshu",
  lastName: "Sinha",
  age: 34,
};

function userDetail(city) {
  return this.firstName + " " + this.lastName + " " + this.age + " " + city;
}
console.log(userDetail.call(user, "usa"));
console.log(userDetail.apply(user, ["uk"]));
const ress3 = userDetail.bind(user, "india");
console.log(ress3());

// Debouncing
const debouncing = (fn, delay) => {
  let time;
  return function (...args) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const search = (message) => {
  console.log(`Search ${message}`);
};

const debounce = debouncing(search, 1000);

debounce("h");
debounce("he");
debounce("hel");
debounce("hell");
debounce("hello");

// Throttling
const throttling = (fn, delay) => {
  let time = 0;
  return function (...args) {
    let now = Date.now();
    if (now - time >= delay) {
      fn.apply(this, args);
      time = now;
    }
  };
};

const printMessage = (message) => {
  console.log(`Search ${message}`);
};

const throttle = throttling(printMessage, 1000);

throttle("J");
throttle("Ja");
throttle("Jav");
throttle("Java");
throttle("Javas");
throttle("Javasc");
throttle("Javascr");
throttle("Javascri");
throttle("Javascrip");
throttle("Javascript");

// Currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(10)(20)(30));

// Prototype
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello user ${this.name}`);
};
const person = new Person("John");
person.sayHello();

// Hoisting
console.log(a);
var a = 10;

// console.log(b);
// let b = 10;

greet();
function greet() {
  console.log("Hello JavaScript");
}
ress();
const ress = function (a, b) {
  return a + b;
};
