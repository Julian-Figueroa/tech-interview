// https://meet.google.com/oep-zhvq-hir?authuser=0

// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for 
// the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”."

// Multiples
function multiples() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      // console.log('Fizz');
    } else if (i % 5 === 0) {
      // console.log('Buzz');
    } else {
      // console.log(i);
    }
  }
}

console.log(multiples());

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// console.log(factorial(5)); // Prints the factorial of 5

// Prime Numbers:
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(17)); // Checks if 17 is prime

// GCD (Greatest Common Divisor):
function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

// console.log(gcd(24, 36)); // Computes the GCD of 24 and 36

// LCM (Least Common Multiple):
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// console.log(lcm(12, 18)); // Computes the LCM of 12 and 18

// Power
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// console.log(power(2, 3)); // Computes 2 raised to the power of 3

// Square root
function squareRoot(n) {
  return Math.sqrt(n);
}

// console.log(squareRoot(25)); // Computes the square root of 25

// Sum of Digits:
function sumOfDigits(n) {
  let sum = 0;
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// console.log(sumOfDigits(12345)); // Computes the sum of digits in 12345

// Fibonacci Series:
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fib = 0;

  for (let i = 2; i <= n; i++) {
    fib = fibMinus2 + fibMinus1;
    fibMinus2 = fibMinus1;
    fibMinus1 = fib;
  }

  return fib;
}

// console.log(fibonacci(10)); // Prints the 10th Fibonacci number

// Factorization
function factorize(n) {
  const factors = [];
  let divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

// console.log(factorize(36)); // Factors of 36: [2, 2, 3, 3]

// Sum of arithmetic series:
function sumArithmeticSeries(firstTerm, lastTerm, commonDifference) {
  const numberOfTerms = Math.ceil((lastTerm - firstTerm + 1) / commonDifference);
  const sum = (numberOfTerms * (firstTerm + lastTerm)) / 2;
  return sum;
}

// console.log(sumArithmeticSeries(1, 10, 2));
