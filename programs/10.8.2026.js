// 1 factorial of number
function fact(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(fact(5));

// 2 Prime number
function checkPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return true;
    }
  }
  return;
}
console.log(checkPrime(5));

// 3 Print Prime Numbers 1 to 100
let primes = [];
for (let i = 1; i <= 100; i++) {
  if (checkPrime(i)) {
    primes.push(i);
  }
}
console.log(primes);

// 4 Reverse String
let n = 12345;
function reverseNumber(n) {
  let str = String(n);
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(reverseNumber(12345));
