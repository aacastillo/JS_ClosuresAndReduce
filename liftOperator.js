//We want to create a closure where we
//can generalize an operation on two functions

//lift((op: (a:number, b:number) => number): (f,g) => number => number
function lift(op) {
  return function (f, g) {
    return x=> op(f(x), g(x));
  }
}

//lift takes anonymous function that sums arguments
const fsum = lift((a, b) => a + b);
const funct = fsum(x=>x+1, x=>x*3)

//print 9
console.log(funct(2));

//split(T[]): {odd:T[], even:T[]
function split(arr) {
  function func(acc, elem) {
    if(elem % 2 === 0) {
      acc.even.push(elem);
    } else {
      acc.odd.push(elem);
    }
    return acc;
  }
  return arr.reduce(func, {odd: [], even:[]});
}