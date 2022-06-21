// helper
function getBiggerOrSmaller(val1, val2, op) {
  if (op === ">") return val1 > val2 ? val1 : val2;
  if (op === "<") return val1 < val2 ? val1 : val2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = getBiggerOrSmaller(num1, num2, ">");
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = getBiggerOrSmaller(num1, num2, ">");
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = getBiggerOrSmaller(sum1, sum2, ">");
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = getBiggerOrSmaller(weight1, weight2, "<");
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/

/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
