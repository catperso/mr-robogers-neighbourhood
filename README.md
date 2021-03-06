# _Mr Roboger's Neighbourhood_

#### By _**Matt C.**_

#### _Counts up to an inputted number with a few fun adjustments_

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_
* _Bootstrap_
* _jQuery_

## Description

_When you input a number, it will list all the numbers between 0 and your number, changing any number with a 1 to 'Beep!', any number with a 2 to 'Boop!', and any number with a 3 to 'Won't you be my neighbour?'. Includes optional name input for personalized output, and the choice to count down FROM your number instead of up TO your number. Click on the picture for an unrelated secondary output._

## Setup/Installation Requirements

* _Clone this repository to your local device_
* _Run index.html in your browser_
* _Enjoy the lovely CSS_
* _Or experience the site live on github pages right [here](https://catperso.github.io/mr-robogers-neighbourhood)!_

## Known Bugs

* _None so far_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems/bugs feel free to send me an email @mc.casperson@gmail.com with details._

Copyright (c) _2021_ _Matt C._

## Specs

### **Describe** _roboger()_

**Test:** _It should display a notification if the user inputs anything other than a number._
* __Code:__ roboger("Words and strings and sentences and such, basically anything that isn't just a simple number");
* __Expected Output:__ "Please only input numbers"

**Test:** _It should only display 0 for numbers that are smaller than 1._
* __Code:__ roboger("0"); || roboger("-16");
* __Expected Output:__ "0"

**Test:** _It should display all numbers from 0 to the number that was input._
* __Code:__ roboger("8");
* __Expected Output:__ "0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8"

**Test:** _It should change all displayed numbers that contain a 3 to "Won't you be my neighbour?"._
* __Code:__ roboger("13");
* __Expected Output:__ "0 - 1 - 2 - Won't you be my neighbour? - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - Won't you be my neighbour?"

**Test:** _It should change all displayed numbers that contain a 2 to "Boop!" if they don't also contain a 3._
* __Code:__ roboger("13");
* __Expected Output:__ "0 - 1 - Boop! - Won't you be my neighbour? - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - Boop! - Won't you be my neighbour?"

**Test:** _It should change all displayed numbers that contain a 1 to "Beep!" if they don't also contain a 2 or a 3._
* __Code:__ roboger("13");
* __Expected Output:__ "0 - Beep! - Boop! - Won't you be my neighbour? - 4 - 5 - 6 - 7 - 8 - 9 - Beep! - Beep! - Boop! - Won't you be my neighbour?"

**Test:** _It should append the user's name to each 'Won't you be my neighbour?' if one was inputted._
* __Code:__ roboger("13", "Roger");
* __Expected Output:__ "0 - Beep! - Boop! - Won't you be my neighbour, Roger? - 4 - 5 - 6 - 7 - 8 - 9 - Beep! - Beep! - Boop! - Won't you be my neighbour, Roger?"

**Test:** _It should reverse the output order if the user chooses._
* __Code:__ roboger("13", true, "Roger");
* __Expected Output:__ "Won't you be my neighbour, Roger? - Boop! - Beep! - Beep! - 9 - 8 - 7 - 6 - 5 - 4 - Won't you be my neighbour, Roger? - Boop! - Beep! - 0"

**Test:** _It should print something funny instead of the number 69._
* __Code:__ roboger("71");
* __Expected Output:__ \[...\] "67 - 68 - _Nice!_ - 70 - Beep!"

### **Describe** _fizzBuzzer()_

**Test:** _It should display all the numbers from 1 to the number that was input._
* __Code:__ fizzBuzzer(14);
* __Expected Output:__ "1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - 13 - 14"

**Test:** _It should display 'fizz' instead of any number divisible by 3._
* __Code:__ fizzBuzzer(14);
* __Expected Output:__ "1 - 2 - fizz - 4 - 5 - fizz - 7 - 8 - fizz - 10 - 11 - fizz - 13 - 14"

**Test:** _It should display 'buzz' instead of any number divisible by 5._
* __Code:__ fizzBuzzer(14);
* __Expected Output:__ "1 - 2 - fizz - 4 - buzz - fizz - 7 - 8 - fizz - buzz - 11 - fizz - 13 - 14"

**Test:** _It should display 'fizzbuzz' instead of any number divisible by 15._
* __Code:__ fizzBuzzer(15);
* __Expected Output:__ "1 - 2 - fizz - 4 - buzz - fizz - 7 - 8 - fizz - buzz - 11 - fizz - 13 - 14 - fizzbuzz"
