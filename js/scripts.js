// Business Logic

function roboger(targetNumber) {
  if (!parseInt(targetNumber)) {
    return "Numbers only, please";
  } else {
    return targetNumber;
  }
}