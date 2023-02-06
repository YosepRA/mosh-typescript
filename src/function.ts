// We can annotate function's parameter and return type.
// Always try to annotate your functions to maximize TypeScript.
// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }

//   return income * 1.3;
// }

/* ===================================================================== */

// Add question mark for optional parameters.
// function calculateTax(income: number, taxYear?: number): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }

//   return income * 1.3;
// }

/* ===================================================================== */

// Add default parameters if none is provided.
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}
