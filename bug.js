function foo(a, b) {
  if (a === b) {
    return true; 
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(15, 9)); // Output: true
console.log(foo(10, 6)); // Output: true
console.log(foo(12, 4)); // Output: true
console.log(foo(5, 3)); //Output: true
console.log(foo(100, 5)); //Stack overflow error