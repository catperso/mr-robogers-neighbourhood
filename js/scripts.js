// Business Logic

function roboger(targetNumber) {
  if (!parseInt(targetNumber)) {
    return "Numbers only, please";
  }
  if (targetNumber < 1) {
    return 0;
  }

  let numberArray = [];

  for (let i=0; i <= targetNumber; i++) {
    numberArray.push(i);
  }

  return numberArray;
}