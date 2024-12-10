# Stack Overflow in Euclidean Algorithm

This repository demonstrates a common error in recursive JavaScript functions: stack overflow due to excessive recursion depth. The `bug.js` file contains an implementation of the Euclidean algorithm, which finds the greatest common divisor (GCD) of two numbers using recursion.  The algorithm works correctly for most inputs but will fail with a stack overflow error for pairs of numbers that have a GCD that requires a very deep recursion depth.

The solution, shown in `bugSolution.js`, addresses the issue by implementing an iterative version of the Euclidean algorithm, avoiding unbounded recursion and thus preventing the stack overflow error.  The iterative approach has a constant space complexity, whereas the recursive version can have space complexity proportional to the input numbers, leading to stack overflow errors for sufficiently large inputs.

## How to reproduce the bug:
1. Clone this repository
2. Run `bug.js`.
3. Observe that the program will output `true` for many cases, but a `RangeError: Maximum call stack size exceeded` occurs for inputs such as `foo(1000, 5)`. 

## How to fix the bug:
1. Replace the recursive version with the iterative version provided in `bugSolution.js`.