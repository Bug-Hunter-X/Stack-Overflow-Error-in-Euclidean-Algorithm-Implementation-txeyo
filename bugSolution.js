function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(15, 9)); // Output: 3
console.log(gcd(10, 6)); // Output: 2
console.log(gcd(12, 4)); // Output: 4
console.log(gcd(5, 3)); // Output: 1
console.log(gcd(100, 5)); //Output: 5
console.log(gcd(1000,5)); //Output: 5