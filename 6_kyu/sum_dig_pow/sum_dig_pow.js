function sumDigPow(a, b) {
  let x;
  let numList = []

  for(x = a; x <= b; x++) {
    if (summedPowIsX(x)) numList.push(x)
  }

  return numList;
};

function summedPowIsX(x) {
  return String(x).split('').map((el, idx) => {
    return Math.pow(el, idx + 1)
  }).reduce((prev, curr) => prev + curr) === x
}
