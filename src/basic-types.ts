// Annotating type to variable name.

// let sales: number = 123_456;
// let course: string = 'TypeScript';
// let isPublished: boolean = true;
// let level: any;

/* ===================================================================== */

// These two are the same.
// If you don't annotate (declare the type), TypeScript will automatically
// set its type according to the value assigned to it.

let sales = 123_456;
let course = 'TypeScript';
let isPublished = true;
let level;
