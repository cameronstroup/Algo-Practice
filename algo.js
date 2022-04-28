// const { isNumberObject } = require("util/types");

// // let newV = vals.map((num) => (num / 2) & 0);
// // console.log(newV);

// // npm cache verify
// // // // function sum(acc, val) {
// // // //   console.log(acc);
// // // //   return acc + val;
// // // // }
// // // // let answer = vals.reduce(sum, 10);
// // // // console.log(answer);

// // // max = (acc, val) => {
// // //   if ((acc = val)) {
// // //     return acc;
// // //   }
// // // // };

// // // function repatStr(n, s) {
// // //   return s.repeat(n);
// // // }
// // // console.log(repatStr(10, "whats up"));

// // function invert(array) {
// //   return array.map((num) => num * 2);
// // }
// // newArray = invert(array);

// // (newArray) => newArray.reduce((con, value) => value + con);

// // console.log(newArray);

// // function TcuPlayer(posistion, number, firstName, lastName, year) {
// //   this.posistion = posistion;
// //   this.number = number;
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.year = year;
// // }

// // let MikeMiles = new TcuPlayer("PG", 10, "Mike", "Miles", "JR");

// // console.log(MikeMiles);

// // function DOG(age, breed, goodBoy, age) {
// //   this.age = age;
// //   this.breed = breed;
// //   this.goodBoy = goodBoy;
// //   this.age = age;
// // }

// // let Lake = new DOG(4, "lab", "yes", 28);

// // console.log(Lake);
// let newVals = vals.map((num) => num * 2);
// console.log(newVals);

// 'Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case r, you are playing banjo!

// The function takes a name as its only argument, and returns one of the following names:'

// //

// let areYouPlayingBanjo = (name) => {
//   if (name[0] === r || name[0] === R) {
//     return  `${name'
//   } else {
//     return "${name}  does not play banjo";
// //   }
// function opposite(a) {
//   return a + 1;
//   //your code here
// }
// console.log(opposite(5));

// function find_average(array) {
//   let sum = 0;
//   if ((array = [] || NaN)) {
//     return 0;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       sum = sum + array[i];
//     }
// //     return sum / array.length;
// //   }
// // }
// let simpleM = (num) => {
//   if (num % 2 === 0) {
//     return num * 8;
//   } else {
//     return num * 9;
//   }
// };

// // console.log(simpleM(3));

// const isDivideBy = (a, num1, num2) => {
//   if ((a % num1 === 0) & (a % num2 === 0)) {
//     return true;
//   } else return false;
// // };
// let initialValue1 = 0;
// let sum = (array) => {
//   array.reduce((a, b) => {
//     a + b, initialValue1;
//   });
// };

// console.log(sum(vals));

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10
// Task;
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

let vals = [5, 4, 1, 2, 9, 55, 34, 2, 5, 66];

// initialValue = 0;
// compareFuction = (a, b) => {
//   return a - b;
// };

// sumArray = (array) => {
//   initialValue = 0;
// if (!array) {
//   return 0;
// }

// //   compareFuction = (a, b) => {
// //     return a - b;
// //   };
// //   newValues = array.sort(compareFuction);
// //   sliceValues = newValues.slice(1, array.length - 1);
// //   reducedVal = sliceValues.reduce((a, b) => a + b, initialValue);
// //   return reducedVal;
// // };
// initialValue = 0;
// sum = (array) => array.reduce((a, b) => a + b, initialValue);

// // console.log(sum(vals));

// sum = (array) => {
//   initialValue = 0;
//   if (!array) {
//     return 0;
//   } else {
// //     return parseInt(array.reduce((a, b) => a + b, initialValue));
// //   }
// // };

// // console.log(sum(vals));

// function firstNonConsecutive(arr) {
//   if (!arr) {
//     return 0;
//   }

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] + 1 != arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
// }
// arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(firstNonConsecutive(arr));

// let practice = (num) => {
//   reversed = String(num).split("").reverse().map(Number);
//   return reversed;
// };
// console.log(practice(3356));

// let betterThanAverage = (classPoints, yourPoints) => {
//   initialValue = 0;
//   let classSum = classPoints.reduce((a, b) => a + b, initialValue);
//   classAverage = classSum / classPoints.length;
//   if (classAverage > yourPoints) {
//     return false;
//   }
// //   {
// //     return true;
// //   }
// newArray = [];
// let babyVoice = (str) => {
//   // };

//   array = [...str];
//   for (i = 0; i > array.length; i++) {
//     newArray.push(array[i]);
//     console.log(newArray);
//   }
// };
// console.log(babyVoice("whatsup"));

// // const dogs = ["Lake", "Kobe", "Tuck"];

// // dogs.push("Misty");
// // console.log(dogs);

// // This time no story, no theory. The examples below show you how to write function accum:

// // Examples:
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"

// let basicOp = (opp, num1, num2) => {
//   if (opp === "*") {
//     newVal = num1 * num2;
//     return newVal;
//   }
//   if (opp === "/") {
//     newVal = num1 / num2;
//     return newVal;
//   }
//   if (opp === "+") {
//     newVal = num1 + num2;
//     return newVal;
//   }
//   if (opp === "-") {
//     newVal = num1 - num2;
//     return newVal;
//   }
// };
// // console.log(basicOp("+", 3, 7));

// let grow = (x) => {
//   i = 0;
//   return x.reduce((a, b) => a * b, i);
// };

// function boolToWord( bool ){bool.includes("") {return "yes"}
//                             return "No
//   //...
// }

// let boolToWord = (bool) => {
//   if (bool.includes("") === true) {
//     return "Yes";
//   }
//   return "No";
// };

// let cockroachSpeedRun = (s) => {
//   cm = s * 27.777;
//   return Math.floor(cm);
// };
// console.log(cockroachSpeedRun(8));

// let findNeedle = (array) => {
//   for (i = 0; i, array.length; i++) {
//     if (array[i] === "needle") {
//       return `Found the needle at position ${i}`;
//     }
//   }
// };

// let minMax = (arr) => {
//   newArray = [];
//   newArray.push(Math.min(...arr));
//   newArray.push(Math.max(...arr));
//   return newArray;
// };

// console.log(minMax(vals));

// let factorial = (n) => {
//   newArray = [];
//   initialValue = 0;
//   for (i = n; i > 0; i--) {
//     newArray.push(i);
//   }
//   answer = newArray.map((x) => x * x);

//   let finalAnswer = answer.reduce((a, b) => a + b, initialValue);
//   return finalAnswer;
// };
// console.log(factorial(10));

// let factorial = (n) => {
//   newArray = [];
//   initialValue = 1;
//   for (i = n; i > 0; i--) {
//     newArray.push(i);
//   }

//   let finalAnswer = newArray.reduce((a, b) => a * b, initialValue);
//   if (finalAnswer > 13 || finalAnswer < -1) {
//     throw new RangeError("The argument must be between 0 and 12.");
//     a;
//   }
//   return finalAnswer;
// };
// console.log(factorial(2));

// litres = (time) => {
//   return math.floor(time / 2);
// };

// console.log(litres(0.5));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// isPalindrome = (str) => {
//   array = [...str];
//   if (array === array.reverse()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrome("hello"));
// // console.log(vals.reverse());

// let findshort = (s) => {
//   newArray = [];
//   revmoveStr = s.split(" ");
//   for (let i = 0; i < revmoveStr.length; i++) {
//     newArray.push(revmoveStr[i].length);
//   }
//   orderArray = newArray.sort((a, b) => a - b);
//   return orderArray[0];
// };

// let string = "cameron is so cool, how is he so cool?";
// console.log(findshort(string));
// getAge = (string) => {
//   return parseInt(string.split(""));
// };

// // console.log(getAge("4 years old"));

// let twoSort = (string) => {
//   order = string.sort((a, b) => a.localeCompare(b));
// //   order[0];
// // };
// // console.log();

// // // nameArray = ["cameorn", "hunter", "abby"];
// // // console.log(twoSort(nameArray));
// // squareSum = (x) => {
// //   i = 0;
// //   newArray = x.map((a) => a * a);
// //   answer = newArray.reduce((a, b) => {
// //     a + b, i;
// //     return answer;
// //   });
// // };
// // console.log(squareSum(vals));
// const rps = (p1, p2) => {
//   if ((p1 === "scissors") & (p2 === "paper")) {
//     return "Player 1 won!}";
//   }
//   if ((p1 === "scissors") & (p2 === "rock")) {
//     return "Player 1 won!}";
//   }
//   if (p1 === p2) {
//     return "Draw!";
//   }
//   {
// //     return "player 2 won!";
// //   }
// // };
// our start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// function greet(lang) {
//   return langs[lang] || langs["english"];
// }\function greet(lang) {

// function greet(lang) {
//   return langs[lang] || langs["english"];
// }

// var langs = {
//   czech: "Vitejte",
//   danish: "Velkomst",
//   dutch: "Welkom",
//   estonian: "Tere tulemast",
//   finnish: "Tervetuloa",
//   flemish: "Welgekomen",
//   french: "Bienvenue",
//   german: "Willkommen",
//   irish: "Failte",
//   italian: "Benvenuto",
//   latvian: "Gaidits",
//   lithuanian: "Laukiamas",
//   polish: "Witamy",
//   spanish: "Bienvenido",
//   swedish: "Valkommen",
//   welsh: "Croeso",
// // };

// function noSpace(x) {
//   return x.split(" ").join("");
// }

// console.log(noSpace("what is up today, I am so happy"));

// let disemvowel = (str) => {
//   newArray = [];
//   for (i = 0; i < str.length; i++) {
//     if (
//       (str[i] != "a") &
//       (str[i] != "A") &
//       (str[i] != "e") &
//       (str[i] != "E") &
//       (str[i] != "I") &
//       (str[i] != "i") &
//       (str[i] !== "o") &/       (str[i] != "O") &
//       (str[i] !== "u") &
//       (str[i] != "U")
//     ) {
//       newArray.push(str[i]);
//     }
//   }
//   return newArray.join("");
// };

// string = "what is up today, I am so happy";
// console.log(disemvowel(string));
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// // }

// let oddOrEven = (array) => {
//   i = 0;
//   newA = array.reduce((a, b) => a + b, i);
//   if (newA % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// };

// console.log(oddOrEven(vals));

// let isSquare = (n) => {
//   newArray = [];
//   for (i = 0; i <= n; i++) {
//     newArray.push(i);
//   }
//   for (i = 0; i < newArray.length; i++) {
//     if (newArray[i] * newArray[i] === n) {
//       return true;
// //     }
// //   }
// //   return false;
// // };

// // console.log(isSquare(13));

// // let isSquare = (n) => {
// //   Number.isInteger.isSquare;
// // };
// function century(year) {
//   // Finish this :)
// //   return math.floor(year / 10) + 1;
// // }

// let string = ["hello", "world", "this", "is", "great"];

// let smash = (words) => {
//   let newString = words.toString();
//   return newString.replace(",", " ");
// // };

// // console.log(smash(string));

// // let descendingOrder = (n) => {
// //   newArray = Array.from(String(n), Number);

// //   sortedArray = newArray.sort((a, b) => b - a);

// //   return parseInt(sortedArray.join(""));
// // };

// // console.log(descendingOrder(1343534643225));

// let summation = (num) => {
//   let newVal = 0;
//   for (i = 0; i <= num; i++) {
//     newVal = newVal + i;
//   }
//   return newVal;
// };

// console.log(summation(8));

let arrayDiff = (arr, query) => {
  return arr.filter((el) => el.indexOf(query) !== -1);
};
