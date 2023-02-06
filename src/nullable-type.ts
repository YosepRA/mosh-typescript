// TypeScript is strict to nullish values as it's the source of most bugs.
// Therefore, if you expect a nullish values, you have to explicitly include it
// in your function's annotation using the union operator.

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Hola');
  }
}

greet('marco'); // MARCO
greet(null); // Hola
greet(undefined); // Hola
