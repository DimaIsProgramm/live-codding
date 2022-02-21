function sum(from, to, resolver) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  resolver(sum);
}

function printResult(res) {
  console.log('Result is ' + res);
}
