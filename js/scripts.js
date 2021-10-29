// Business Logic

function roboger(input, name) {
  if (input < 1) {
    return [0];
  }

  let targetNumber = parseInt(input);
  let numberArray = [];
  let neighbour = '?';

  if (name) {
    neighbour = ", " + name + "?";
  }

  for (let i=0; i <= targetNumber; i++) {
    numberArray.push(i);
  }

  numberArray = numberArray.map(function(number) {
    if (number.toString().includes(3)) {
      return "Won't you be my neighbour" + neighbour;
    } else if (number.toString().includes(2)) {
      return "Boop!";
    } else if (number.toString().includes(1)) {
      return "Beep!";
    } else {
      return number;
    }
  });

  return numberArray;
}

// UI Logic

$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();

    const userInput = $("#user-number").val();
    const userName = $("#user-name").val().toUpperCase();
    let outputArray = roboger(userInput, userName);

    $("ul").empty();

    outputArray.forEach(function(number) {
      $("ul").append("<li>" + number + "</li>");
    });
  });
});