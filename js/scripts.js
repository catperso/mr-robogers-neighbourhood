function roboger(input, reverse, name) {
  if (input < 1) {
    return [0];
  }
  let targetNumber = parseInt(input);
  let numberArray = [];
  let neighbour = '?';
  if (name) {
    neighbour = ", " + name + "?";
  }
  if (reverse) {
    for (let i=targetNumber; i >= 0; i--) {
      numberArray.push(i);
    }
  } else {
    for (let i=0; i <= targetNumber; i++) {
      numberArray.push(i);
    }  
  }
  numberArray = numberArray.map(function(number) {
    if (number.toString().includes(3)) {
      return "Won't you be my neighbour" + neighbour;
    } else if (number.toString().includes(2)) {
      return "Boop!";
    } else if (number.toString().includes(1)) {
      return "Beep!";
    } else if (parseInt(number) === 69) {
      return '<a href="http://bitly.com/98K8eH" target=_blank><em>Nice</em></a>';
    } else {
      return number;
    }
  });
  return numberArray;
}
function fizzBuzzer(input) {
  if (input < 1) {
    return ["Enter a number for fizzbuzz!"];
  }
  let target = parseInt(input);
  let numberArray = [];
  for (let i=1; i <= target; i++) {
    numberArray.push(i);
  }
  numberArray = numberArray.map(function(number) {
    if (!(number % 15)) {
      return "fizzbuzz";
    } else if (!(number % 5)) {
      return "buzz";
    } else if (!(number % 3)) {
      return "fizz";
    } else {
      return number;
    }
  });
  return numberArray;
}
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    $("#beep-boop").empty();
    let reverse = false;
    if ($("input:checked").val()) {
      reverse = true;
    }
    const userInput = $("#user-number").val();
    const userName = $("#user-name").val().toUpperCase();
    let outputArray = roboger(userInput, reverse, userName);
    outputArray.forEach(function(number) {
      $("#beep-boop").append("<li>" + number + "</li>");
    });
  });
  $("#bonus").click(function() {
    const fizzBuzzIn = $("#user-number").val();
    $("#fizz-buzz").empty();
    let fizzBuzzOut = fizzBuzzer(fizzBuzzIn);
    $("#fizz-buzz").append("<li>Super Secret Bonus!</li>");
    fizzBuzzOut.forEach(function(number) {
      $("#fizz-buzz").append("<li>" + number + "</li>");
    });
  });
});