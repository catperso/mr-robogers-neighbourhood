// Business Logic

function roboger(input) {
  if (!parseInt(input)) {
    return "Numbers only, please";
  }
  if (input < 1) {
    return 0;
  }

  let targetNumber = parseInt(input);
  let numberArray = [];

  for (let i=0; i <= targetNumber; i++) {
    numberArray.push(i);
  }

  numberArray = numberArray.map(function(number) {
    if (number.toString().includes(3)) {
      return "Won't you be my neighbour?";
    } else {
      return number;
    }
  });

  return numberArray;
}