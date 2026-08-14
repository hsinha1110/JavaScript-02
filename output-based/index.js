// 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Output :  A C B

// 2
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// output : A D C B

// 3
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

// output : 1 5 4 2 3

// 4
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");

// output : A F B C E D

// 5
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

  setTimeout(() => {
    console.log("4");
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("5");
});

setTimeout(() => {
  console.log("6");
}, 0);

console.log("7");

// Output 1 7 5 2 3 4 6

// 6
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log("C");
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

// output : A E D B C

// 7
console.log("1");

Promise.resolve().then(() => {
  console.log("2");

  setTimeout(() => {
    console.log("3");
  }, 0);
});

setTimeout(() => {
  console.log("4");
}, 0);

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");

// output : 1 6 2 5 4 3

console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");

  setTimeout(() => {
    console.log("E");
  }, 0);
});

console.log("F");

// output : A F D B E C
/* 
Synchronous → A F
Microtask   → D
Task        → B
Microtask   → C
Task        → E
*/
// 9
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");

  Promise.resolve().then(() => {
    console.log("5");
  });
});

setTimeout(() => {
  console.log("6");
}, 0);

console.log("7");

// output 1 7