type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employeeOne: Employee = {
  id: 1,
  name: 'Joe',
  retire: (date: Date) => {
    console.log(date);
  },
};

let employeeTwo: Employee = {
  id: 2,
  name: 'Martha',
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employeeOne.name);
console.log(employeeTwo.name);
