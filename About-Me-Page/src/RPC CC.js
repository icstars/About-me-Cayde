let cChoice = (arr) => {
  let cPc = arr[Math.floor(Math.random() * arr.length)];
  console.log(cPc);
  return cPc;
};

export { cChoice };
