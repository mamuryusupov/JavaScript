function increaser(a, index) {
  const num = a > index ? a + index : a;
  return num;
}

console.log(increaser(10, 9));
