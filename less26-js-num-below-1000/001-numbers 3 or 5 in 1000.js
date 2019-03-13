/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function numbers(length) {
  length--;
  let a = length / 3,
    b = length / 5,
    c = length / 15;

  return (
    ((a * (a + 1)) / 2) * 3 + ((b * (b + 1)) / 2) * 5 - ((c * (c + 1)) / 2) * 15
  );
}

console.log(Math.round(numbers(1000)));
