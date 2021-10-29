// Business Logic

function roboger(targetNumber) {
  if (!parseInt(targetNumber)) {
    return "Numbers only, please";
  } else if (targetNumber < 1) {
    return 0;
  } else {
    return targetNumber;
  }
}