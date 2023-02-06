// Union type allows a parameter to expect an input of different types.
function kgToLbs(weight: number | string): number {
  // There is a technique called "narrowing".
  // Narrowing a union type to a specific type, which will enable
  // Intelisense to pick up the correct methods according to its type.
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight, 10) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs('20'));
