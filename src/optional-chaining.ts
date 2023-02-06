// "birthday" is optional.
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customerZero = getCustomer(0);

// Optional property access operator.
console.log(customerZero?.birthday);

let customerOne = getCustomer(1);
// Optional property access operator.
console.log(customerOne?.birthday?.getFullYear());

// Optional element access operator.
// customer?.[0]

// Optional call operator.
let log: any = () => null;
log?.('Marco');
