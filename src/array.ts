// Valid in JavaScript.
// let numbers = [1, 2, '3'];

/* ===================================================================== */

// Declare array type with its values' type.

// BAD.
// let numbers: number[] = [1, 2, '3'];

// GOOD.
// let numbers: number[] = [1, 2, 3];

/* ===================================================================== */

// You don't need type annotation for array if it has a consistent
// value type.
// let numbers = [1, 2, 3];

/* ===================================================================== */

// Declaring an empty array.

let numbers: number[] = [];

numbers[0] = 1;
numbers[1] = 2;
// numbers[2] = '3'; // TypeScript won't allow assigning string to an array of numbers.
