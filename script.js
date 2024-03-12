/* 1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122). */

document.getElementById("task-1").addEventListener("click", function () {
    var userInput = prompt("Enter a ASCII Character");
    if (userInput === "z") {
      document.write(`${userInput} is ASCII HEX number is 122`);
    } else if (userInput === "a") {
      document.write(`${userInput} is ASCII HEX number is 97`);
    } else if (userInput === "Z") {
      document.write(`${userInput} is ASCII HEX number is 90`);
    } else if (userInput === "A") {
      document.write(`${userInput} is ASCII HEX number is 65`);
    } else {
      document.write(`Not a valid ASCII Alphabet`);
    }
  });
  
  /* 2. Write a JavaScript program that accept two integers and
  display the larger. Also show if the two integers are equal. */
  document.getElementById("task-2").addEventListener("click", function () {
    var number1 = +prompt("Enter a first number");
    var number2 = +prompt("Enter a second number");
    if (number1 === number2) {
      document.write(`<mark>${number1} is equal to ${number2}</mark>`);
    } else if (number1 > number2) {
      document.write(
        `<big><b>${number1}</b></big> is greater than to ${number2}`
      );
    } else if (number2 > number1) {
      document.write(
        `<big><b>${number2}</b></big> is greater than to ${number1}`
      );
    } else {
      document.write(`❌ Enter a valid number`);
    }
  });
  
  /* 3. Write a program that takes input a number from user &
  state whether the number is positive, negative or zero. */
  
  document.getElementById("task-3").addEventListener("click", function () {
    var userNumber = prompt("Enter a number to check positive or negative");
    if (userNumber > 0) {
      document.write(`${userNumber} is positive number`);
    } else if (userNumber < 0) {
      document.write(`${userNumber} is negative number`);
    } else if (userNumber === 0) {
      document.write(`${userNumber} is neither positive nor negative`);
    }
  });
  
  /* 4. Write a program that takes a character (i.e. string of
  length 1) and returns true if it is a vowel, false otherwise */
  
  document.getElementById("task-4").addEventListener("click", function () {
    var vowelCheck = prompt("Enter a vowel letter");
    if (
      vowelCheck === "a" ||
      vowelCheck === "e" ||
      vowelCheck === "i" ||
      vowelCheck === "o" ||
      vowelCheck === "u"
    ) {
      document.write(true);
    } else {
      document.write(false);
    }
  });
  
  /* 5. Write a program that  
  a. Store correct password in a JS variable.
  b. Asks user to enter his/her password
  c. Validate the two passwords:
  i. Check if user has entered password. If not, then
  give message “ Please enter your password”
  ii. Check if both passwords are same. If they are
  same, show message “Correct! The password you
  entered matches the original password”. Show
  “Incorrect password” otherwise. */
  document.querySelector("#task-5").addEventListener("click", function () {
    var userPassword = prompt("Enter your Password");
    if (userPassword === "allah786" || userPassword === "Allah786") {
      document.write(<h1><mark>Correct ✔</mark></h1>);
    } else if (userPassword === "") {
      document.write(<h1>Please enter your password</h1>);
    } else {
      document.write(<h1>Incorrect Password</h1>);
    }
  });
  
  /* 6. This if/else statement does not work. Try to fix it:
  var greeting;
  var hour = 13;
  if (hour < 18) {
  greeting = "Good day";
  else
  greeting = "Good evening";
  } */
  
  document.querySelector("#task-6").addEventListener("click", function () {
    var greeting;
    var hour = 13;
    if (hour < 18) {
      greeting = "Good day";
      document.write(greeting);
    } else {
      greeting = "Good evening";
      document.write(greeting);
    }
  });
  
  /* 7. Write a program that takes time as input from user in 24
  hours clock format like: 1900 = 7pm. Implement the
  following case using if, else & else if statements */
  
  document.getElementById("task-7").addEventListener("click", function () {
    var userTime = +prompt(
      "Enter your local time in 24 hour format (like: 1900 = 7pm)"
    );
    if (userTime >= 1000 && userTime < 1200) {
      document.write(<h1><mark> Good Morning </mark></h1>);
    } else if (userTime >= 1200 && userTime < 1700) {
      document.write(<h1><mark> Good Afternoon </mark></h1>);
    } else if (userTime >= 1700 && userTime < 2100) {
      document.write(<h1><mark> Good Evening </mark></h1>);
    } else if (userTime >= 2100 && userTime <= 2359) {
      document.write(<h1><mark> Good Night </mark></h1>);
    } else {
      document.write(<h1> Please enter correct time </h1>);
    }
  });