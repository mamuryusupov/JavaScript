function findDivCount(a, b, n) {
  let resultOfDivs = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      resultOfDivs += 1;
    }
  }
  return resultOfDivs;
}
