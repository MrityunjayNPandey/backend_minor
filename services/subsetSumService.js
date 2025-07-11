function findClosestSum(bigNumber, smallNumbers) {
  let closestSum = 0;
  let bestCombination = [];

  smallNumbers = smallNumbers.filter((num) => num <= bigNumber);

  for (let i = 0; i < 1 << smallNumbers.length; i++) {
    let currentSum = 0;
    let currentCombination = [];
    for (let j = 0; j < smallNumbers.length; j++) {
      if ((i >> j) & 1 && currentSum + smallNumbers[j] <= bigNumber) {
        currentSum += smallNumbers[j];
        currentCombination.push(smallNumbers[j]);
      }
    }

    if (currentSum <= bigNumber && currentSum > closestSum) {
      closestSum = currentSum;
      bestCombination = currentCombination;
    }
  }
  return { combination: bestCombination, sum: closestSum };
}

module.exports = { findClosestSum };
