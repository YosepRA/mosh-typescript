// Annotate object type just like any other types.
// Use keyword "readonly" to prevent data mutation for said property.
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Joe',
  retire: (date: Date) => {
    console.log(date);
  },
};
