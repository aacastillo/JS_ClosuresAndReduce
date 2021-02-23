
//warm up
function concat_all (arr) {
  //for each elem
  //add each element to result
  //return result
  function concat(emptyStr, elem) {
    return emptyStr + elem;
  }
  return arr.reduce(concat, "");
}

function twoD(arr) {
  return arr.reduce((acc, elem) => acc + elem.reduce((a, elem2) => a * elem2, 1), 0);
}


// we have a bunch of observational data, and we want to know how much of
//   it is close to a desired value c (within an error of +-d)

// within is a function which returns a function to check the number of
//   elements in an array within the interval [c-d, c+d]
// Question 1: what is the type signature of within?
// within(??, ??): number
function within(c, d) {
  // Question 2: implement within; you may not use loops
  function cd(num)
  {
    return  (num >= c-d && num<=c+d);
  }
  
  return a => a.filter(cd).length;
}


// Question 3: complete the following test
test("test within", function() {
  let c = 2;
  let d = 1;
  let arr = [0, 1, 2, 3, 4, 5];
  assert(within(c,d)(arr) === 3);
});

// Question 4.1:
// we have the following observations, divided by data class
let data = [[0.934, 0.124, 0.850, 0.924, 0.397],
            [0.928, 0.288, 0.806, 0.166, 0.388],
            [0.083, 0.310, 0.393, 0.268, 0.475],
            [0.320, 0.459, 0.398, 0.290, 0.032],
            [0.602, 0.957, 0.776, 0.173, 0.913]];
let error_bound = within(0.9, 0.05);
// write an expression that gives the number of observations per class for
//   the interval error_bound
// the output should be [3, 1, 0, 0, 1]
//   ie. the 1st class has 3 instances and the 4th class has 0 instances
console.log(data.map(error_bound));

// Question 4.2
// using the same data and the following desired error bounds
let error_bounds = [within(0.5, 0.1), within(0.5, 0.15), within(0.7, 0.1)];
// write an expression that, for each error bound, gives the number
//   of observations per class
// the output should be [[0, 0, 1, 1, 0], [1, 1, 2, 2, 1], [0, 0, 0, 0, 2]]
//   ie. for the bound within(0.7, 0.1), the 1st class has 0 insances
//   and the 5th class has 2 instances
console.log();

// Bonus Questions:
// evaluate_range is a function which takes a range of inputs and
//   returns a function which takes a function f and evaluates f over that range
// (Bonus Question 5): what is the type signature of evaluate range
// evaluate_range(??, ??, ??): ??
function evaluate_range(from, to, step) {
  // (Bonus Question 6): implement evaluate_range; you may use loops
}

test("test evaluate_range", function() {
  let square = x => x * x;
  // assert(evaluate_range(0, 4, 1)(square) === [0, 1, 4, 9]);
});

// (Bonus Question 7): repeat Q4, but over function ouputs instead of data
let funcs = [(x => 2 * x), (x => x + 0.1)]; // add your own
let error_bounds_2 = [within(2, 0.05)]; // add your own
let range = evaluate_range(0, 5, 0.5);
// console.log(/* ?? */);