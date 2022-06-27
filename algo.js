// const { isNumberObject } = require("util/types");

const { text } = require("express");

const log = console.log;

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
//   if (name[0] === r & name[0] === R) {
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
//   if ((array = [] & NaN)) {
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
//   if (finalAnswer > 13 & finalAnswer < -1) {
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
//   return langs[lang] & langs["english"];
// }\function greet(lang) {

// function greet(lang) {
//   return langs[lang] & langs["english"];
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
// //   }
// //   return newVal;
// // };

// // console.log(summation(8));

// let arrayDiff = (arr, query) => {
//   return arr.filter((el) => el.indexOf(query) !== -1);
// // };
// var alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// // let alphabetPosistion = (text) => {};
// let uniqueInOrder = (iterable) => {
//   let newArr = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] != iterable[i + 1]) {
//       newArr.push(iterable[i]);
//     }
// //   }
// // //   return newArr;
// // // };
// // let x = "1 2 3 4 5"; // console.log(uniqueInOrder("AAAAAAAAAAAbbbbBCC"));

// // let highAndLow = (numbers) =>
// //   `${Math.max(...numbers.split(" "))}${Math.min(...numbers.split(" "))}`;
// let lovefunc = (flower1, flower2) => {
//   if ((flower1 + flower2) % 2 === 0) {
// //     return false;
// //   }
// //   return true;
// // // };

// // let findNextSquore = (sq) => {
// //   if (sqrt(n) % 1 === 0) {
// //     return sqrt(n) + 1;
// //   }

// //   return -1;
// // };

// // let count = string => {
// //   string.slipt("")
// //   for (i=0;i<string.length;i++){
// //     if (string[i]=== string[i+1]
// //       {string

// // //       }
// // //   }
// // // }
// // function duplicateEncode(word) {
// //   var repeat = [];
// //   var result = [];
// //   var letters = word.split("");
// //   for (i = 0; i < letters.length; i++) {
// //     if (repeat.indexOf(letters[i]) > -1) {
// //       result.push(")");
// //     } else {
// //       result.push("(");
// //     }
// // //     repeat.push(letters[i]);
// // //   }
// // //   return result.join("");
// // // }
// // // // console.log(duplicateEncode("aleluia"));
// // // function past(h, m, s) {
// // //   h = 3600000;
// // //   m = 60000;
// // //   s = 1000;
// // //   return h + m + s;

// // //   //#Happy Coding! ^_^
// // // }

// // let findOdd = A=>{
// //   let repeat=[]
// // //   for(i=0;i<A.length;i++)
// // //   {
// // //     if( repeat.indexOf(A[i]) > -1) {
// // //             repeat.push("");
// // //   }
// // // }
// // let countBy = (x, n) => {
// //   let z = [];
// //   let i = 0;
// //   i = 1;

// //   while (i - 1 < n) {
// //     z.push(x * i);
// //     i++;
// //   }
// //   return z;
// // };

// // countBy(3, 5);

// function getGrade(s1, s2, s3) {
//   let totalGrade = s1 + s2 + s3;
//   let average = totalGrade / 3;
//   if (average >= 90) {
//     return "A";
//   }
//   if ((average >= 80) & (average <= 90)) {
//     return "B";
//   }
//   if ((average >= 70) & (average <= 80)) {
//     return "C";
//   }

//   if ((average >= 60) & (average <= 70)) {
//     return "D";
//   }

// //   return "F";

// //   // Code here
// // }
// let wave = (str) => {
//   array = [];
//   waveArray = [];
//   for (i = 0; i < str.length; i++) {
//     array.push(str);
//   }

//   for (i = 0; i < array.length; i++) {
//     waveArray.push(array[i].charAt(0 + i).toUpperCase());
//   }
//   console.log(waveArray);
// };

// // wave("hello");

// let sumTwoSmallestNumbers = (number) => {
//   number.sort((a, b) => a - b);
//   return number[0] + number[1];
// };

// console.log(sumTwoSmallestNumbers(vals));

// gooseFilter = (birds) => {
//   newArray = [];
//   for (i = 0; i < birds.length; i++) {
//     if (
//       (birds[i] !== "African") &
//       (birds[i] !== "Roman Tufted") &
//       (birds[i] !== "Toulouse") &
//       (birds[i] !== "Pilgrim") &
//       (birds[i] !== "Steinbacher")
//     )
//       newArray.push(birds[i]);
//   }
//   return newArray;
// };
// // function gooseFilter(birds) {
// //   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// //   return birds.filter((b) => !geese.includes(b));
// // }

// newArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];
// switchItUP = (num) => {
//   newArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

//   return newArray[num - 1];
// };

// reverseSeq = (n) => {
//   newArray = [];
//   for (i = n; i > 0; i--) {
//     newArray.push(i);
//   }
//   return newArray;
// };

// SumDigPow = (a, b) => {
//   array = [];
//   newArray = [];
//   for (i = a; i <= b; i++) {
//     array.push(i.toString().split(""));
//   }

// //   log(array);
// // };
// // SumDigPow(1, 12);

// let removeChar = (str) => {
//   newstring = [];
//   for (i = 1; i < str.length - 1; i++) {
//     newstring.push(i);
//   }
//   return newstring.join("");
// };

// sortArray = (array) => {
//   arrayE = [];
//   arrayO = [];
//   finalArray - [];

//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       arrayE.push(array[i]);
//     }
//     arrayO.push(array[i]);
//   }
//   arrayO.sort((a, b) => a - b);

//   log(arrayO);
// };

// sortArray(vals);

//prtotype methode,

// const Trip = function (location, vacationtype, cost, budgit) {
//   this.location = location;
//   this.vacationtype = vacationtype;
//   this.cost = cost;
//   this.budgit = budgit;
// };

// const montanatrip = new Trip("Montans", "Wedding", 1000, 1233);

// Trip.prototype.calcCost = function () {
//   console.log(this.budgit - this.cost + "$");
// };
// montanatrip.calcCost();

// console.log(montanatrip.cost);
letters = ["s", "d", "g", "s", "s", "s", "g", "g", "a", "b"];
// vals.map();
// count = {};
// letters.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else count[item] = 1;
// });

// console.log(count);

// var events = [
//   {
//     userId: 1,
//     place: "Wormholes Allow Information to Escape Black Holes",
//     name: "Check out this recent discovery about workholes",
//     date: "2020-06-26T17:58:57.776Z",
//     id: 1,
//   },
//   {
//     userId: 1,
//     place: "Wormholes Allow Information to Escape Black Holes",
//     name: "Check out this recent discovery about workholes",
//     date: "2020-06-26T17:58:57.776Z",
//     id: 2,
//   },
//   {
//     userId: 1,
//     place: "Cameron is cool",
//     name: "thses are all the same",
//     date: "2020-06-26T17:58:57.776Z",
//     id: 3,
//   },
// ];
// // cameron = events.map((event) => ({ wormhole: event.name, hello: event.place }));
// // console.log(cameron);
// num = 0;
// Lake = vals.reduce((a, b) => a + b, num);
// console.log(Lake);

// let removeEveryOther = (arr) => {
//   for (i = 0; i < arr.length; i + 3) {
//     newarray = arr.push;
//   }
//   log(newarray);
// // };

// let feast = (beast, dish) => {
//   if (
//     (beast[0] === dish[0]) &
//     (beast[beast.length - 1] === dish[dish.length - 1])
//   ) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// const getCount = (str) => {
//   let vowelsCount = 0;
//   for (i = 0; i < str.lengtj; i++) {
//     if (
//       str[i] == a ||
//       str[i] == e ||
//       str[i] == i ||
//       str[i] == o ||
//       str[i] == u
//     ) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// };

// const humanYearsCatYearsDogYears = (humanYears) => {
//   newArray = [];
//   newArray.push(humanYears);

//   if (humanYears === 1) {
//     newArray.push(15);
//   } else if (humanYears === 2) {
//     newArray.push(24);
//   } else {
//     newArray.push(humanYears * 4 + 16);
//   }
//   if (humanYears === 1) {
//     newArray.push(15);
//   } else if (humanYears === 2) {
//     newArray.push(24);
//   } else {
//     newArray.push(humanYears * 5 + 14);
//   }
//   return newArray;
// };
// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
// //     return num * -1;
// //   }
// // }
// walk = [2, 2, 3, 1, 2, 1];
// const removeSmallest = (numbers) => {
//   newArray = [];
//   // newArray = numbers.map((x) => x * 1);
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));

//   log(indexOfMin);
// };

// // removeSmallest(walk);
// let rentalCarCost = (a) => {
//   if (a == 1) {
//     return 40;
//   }
//   if (a == 2) {
//     return 80;
//   }
//   if ((a >= 3) & (a < 7)) {
//     return a * 40 - 20;
// //   }
// //   return a * 40 - 50;
// // };
// lake = ["a", "b", "c"];
// let number = (array) => {
//   newArray = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] == "a") {
//       newArray.push("1: a");
//     }
//     if (array[i] == "b") {
//       newArray.push("2: b");
//     }
//     if (array[i] == "c") {
//       newArray.push("3: c");
//     }
//   }
//   return newArray;
// // };
// let stops = [
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ];
// // log(number(lake));
// const number = (busStops) => {
//   onTheBus = 0;
//   offTheBus = 0;
//   for (i = 0; i < busStops.length; i++) {
//     onTheBus = busStops[i][0] + onTheBus;
//     offTheBus = busStops[i][1] + offTheBus;
//   }
//   total = onTheBus - offTheBus;
//   return total;
// // };
// // number(stops);
// walk = ["Beg", "Life", "I", "To"];
// const sortByLength = (array) => {
// //   return array.sort((a, b) => b.length - a.length);
// // };
// lake = 40452;
// // log(sortByLength(walk));
// let expandedForm = (num) => {
//   power = num.length;
//   nNum = num.toString();
//   newArray = [];
//   finalArray = [];

//   for (i = 0; i < nNum.length; i++) {
//     if (nNum[i] == 0) {
//       newArray.push();
//     } else {
//       newArray.push(parseInt(nNum[i]) * Math.pow(10, nNum.length - 1 - i));
//     }
//     newArray;
//   // }
//   for (j = 0; j < newArray.length; j++) {
//     finalArray.push(`${newArray[j]} +`);
//   }
//   return finalArray.join(" ").slice(0, -2);
// };

// // expandedForm(lake);
// // log(expandedForm(lake));
// const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//   return Math.abs(dadYearsOld - sonYearsOld * 2);
// };

// // log(twiceAsOld(50, 34));
// dan = "GCAT";
// const DNAtoRNA = (dna) => {
//   newAaray = [];
//   [...dna].forEach((a) => {
//     if (a == "T") {
//       newAaray.push("U");
//     } else {
//       newAaray.push(a);
//     }
//   });
//   return newAaray.join("");
// };
// DNAtoRNA(dan);
// let walker = [9, 3, "7", "3"];

// const sumMix = (array) => {
//   i = 0;
//   newArray = [];
//   array.forEach((a) => {
//     newArray.push(Number(a));
// //   });
// //   return newArray.reduce((a, b) => a + b, 0);
// // };

// // log(sumMix(walker));
// walk = [1, 2, "aasf", "1", "123", 123];
// const filter_list = (l) => {
//   newArray = [];
//   for (i = 0; i < l.length; i++) {
//     if (typeof l[i] == "number") {
//       newArray.push(l[i]);
//     }
//   }
//   return newArray;
// };

// let walk = [2, 3, 1];
// // log(filter_list(walk));
// const gimme = (triplet) => {
//   newArray = triplet.map((x) => x * 1);
//   sort = triplet.sort((a, b) => a - b);
//   return newArray.indexOf(sort[1]);
// };

// log(gimme(walk));
// const roundToNext5 = (n) => {
//   helper = n % 5;

//   if (helper == 0) {
//     return n;
//   }
//   if (n < -6) {
//     return n - helper;
//   }

//   if ((n >= -5) & (n < 0)) {
//     return 0;
//   }
//   if ((n < 5) & (n > 0)) {
//     return 5;
//   }
//   return n + 5 - helper;
// // };
// // log(roundToNext5(-5));

// const amazoneDelivery = (weeks) => {
//   let days = 5;
//   let hours = 4;
//   let pay = 18.25;
//   let tax = 0.88;
//   log(days * hours * pay * tax * weeks);
// };
// amazoneDelivery(4);

// amazoneDelivery(4);
// walkData = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ];
// const openOrSenior = (data) => {
//   newArray = [];
//   for (i = 0; i < data.length; i++) {
//     if ((data[i][0] >= 55) & (data[i][1] > 7)) {
//       newArray.push("Senior");
//     } else {
//       newArray.push("Open");
//     }
//   }
//   return newArray;
// };

// // log(openOrSenior(walkData));
// const arithmetic = (a, b, operator) => {
//   if ((operator = "add")) {
//     return a + b;
//   }
//   if ((operator = "subtract")) {
//     return a - b;
//   }
//   if ((operator = "multiply")) {
//     return a * b;
//   }
//   if ((operator = "divide")) {
//     return a / b;
//   }
// };
// log(arithmetic(7, 5, "multiply"));
// let walk = ["Alex", "Jacob", "Mark", "Max"];
// const likes = (names) => {
//   if (names.length == 0) {
//     return "no one likes this";
//   }
//   if (names.length == 1) {
//     return `${names[0]} likes this`;
//   }
//   if (names.length == 2) {
//     return `${names[0]} and ${names[1]} likes this`;
//   }
//   if (names.length == 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//     return `${names[0]}, ${names[1]} and ${[
//       names.length - 2,
//     ]} others like this`;
//   }
// };

// log(likes(walk));
// let num = 34532535;
// const squareDigits = (num) => {
//   newArray = [];
//   let stringNum = [...num.toString()];
//   stringNum.forEach((element) => {
//     newArray.push(Math.pow(parseInt(element), 2));
//     newArray.join("");
//   });
//   return parseInt(newArray.join(""));
// // };
// // log("2" * "2");

// const sumDigits = (number) => {
//   sum = 0;
//   [...Math.abs(number).toString()].forEach((element) => {
//     sum = parseInt(element) + sum;
//   });
//   return sum;
// };

// log(sumDigits(18));

// const findSum = (n) => {
//   let newArray = [];
//   let accum = 0;
//   let accum2 = 0;
//   let i = 0;
//   let j = 0;
//   let threes = Math.floor(n / 3);
//   let fives = Math.floor(n / 5);
//   while (i < threes) {
//     newArray.push((accum = 3 + accum));
//     i++;
//   }
//   while (j < fives) {
//     newArray.push((accum2 = 5 + accum2));
//     j++;
//   }
//   let uniqueChars = [...new Set(newArray)];
//   return uniqueChars.reduce((a, b) => a + b, 0);
// };

// // log(findSum(5));

// const isIsogram = (str) => {
//   return [...new Set(str.toLowerCase())].join("") == str.toLowerCase();
// // };

// // log(isIsogram("Ddermatoglyphics"));

// const Benchmark = require("benchmark");

// const suite = new Benchmark.Suite();

// suite
//   .add("random walk", function () {
//     // benchmark generating a random number
//     Math.floor(Math.random() * 10) + 1;
//   })
//   .on("complete", function () {
//     console.log(this);
//   })
//   .run();

// const fibonacci = (position) => {
//   // TODO: Add a comment describing the purpose of this conditional statement.
//   if (position < 2) {
//     return position;
//   }

//   // TODO: Add a comment describing the purpose of this return statement.
// //   return fibonacci(position - 1) + fibonacci(position - 2);
// // };

// // // TODO: What will this return?
// // console.log(fibonacci(9));

// const countDown = (num) => {
//   if (num === 0) return;
//   log(num);
//   countDown(num - 1);
// };

// countDown(12);

const animals = [
  { name: "Lake", species: "dog" },
  { name: "Charlie", species: "dog" },
  { name: "Misty", species: "dog" },
  { name: "Jim", species: "fish" },
  { name: "Bow", species: "bird" },
  { name: "Nuts", species: "squirle" },
  { name: "Mac", species: "dog" },
];

const orders = [
  { amount: 350 },
  { amount: 234 },
  { amount: 123 },
  { amount: 231 },
  { amount: 350 },
];
// // this is an object that is just dogs
// const isDog = animals.filter((x) => {
//   return x.species === "dog";
// });

// const names = animals.map((animal) => {
//   return `${animal.name} is a ${animal.species}`;
// });
// // log(names);
// let totalAmount = orders.reduce((a, b) => {
//   return a + b.amount;
// }, 0);
// log(totalAmount);
// const getSum = (a, b) => {
//   let sum = 0;
//   if (a == b) {
//     return a;
//   }

//   if (a > b) {
//     for (i = a; i >= b; i--) {
//       sum = sum + i;
//     }

//     return sum;
//   }

//   if (a < b) {
//     log("hello");
//     for (i = a; i <= b; i++) {
//       sum = sum + i;
//     }
//   }
//   return sum;

//   //Good luck!
// };

// getSum(-1, 2);
// log(getSum(1, 0));

// longest = "man i need a taxi up to ubud";
// log(longest.split(" "));
// score1 = ["a", "a", "c", "b"];
// score2 = ["a", "a", "b", ""];
// const checkExam = (arrayA, arrayB) => {
//   let score = 0;
//   for (i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] === arrayB[i]) {
//       score = score + 4;
//     }
//     if (arrayA[i] == "") {
//       score = score + 0;
//     }
//     if ((arrayA[i] !== arrayB[i]) & (arrayA[i] !== "")) {
//       score = score - 1;
//       log(score);
//     }
//   }
//   return score;
// };
// checkExam(score1, score2);
// // log(checkExam(score1, score2));

// const capitals = (word) => {
//   array = [];
//   for (i = 0; i < word.length; i++)
//     if (word[i] == word[i].toUpperCase()) {
//       array.push(i);
//     }
//   return array;
// };

// const declareWinnder = (fighter1, fighter2, firstAttacker) => {};

// const nameShuffler = (str) => {
//   string = str.split(" ");
//   return string[1] + "" + string[0];
// };

// nameShuffler("Lake Stroup");

// const max = (array) => {
//   let max = Math.max(array);

//   return max;
// };

// const min = (array) => {
//   let min = Math.min(array);

//   return min;
// };

// log(max([4, 5, 7]));
walk = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];

// const isValidWalk = (walk) => {
//   let count = 0;
//   let countValues = (array, countItem) => {
//     array.forEach((itm) => {
//       if (itm == countItem) count++;
//     });
//     return count;
//   };
//   if (
//     (countValues(walk, "n") === countValues(walk, "s")) &
//     (countValues(walk, "e") === countValues(walk, "w")) &
//     (walk.length = 10)
//   )
//     return true;
// };
// log(isValidWalk(walk));

// const isValidWalk = (walk) => {
//   let count = 0;
//   let countValues = (array, countItem) => {
//     array.forEach((itm) => {
//       if (itm == countItem) count++;
//     });
//     return count;
//   };

//   log(countValues(walk, "e"));
// };
// log(isValidWalk(walk));

// const SeriesSum = (n) => {
//   array = [];

//   for (i = 1; i < n + 1; i++) {
//     array.push(1 / (i * 3 - 2));
//   }
//   return array
//     .reduce((a, b) => a + b, 0)
//     .toFixed(2)
//     .toString();
// };
// log(SeriesSum(5));
// mav = [";D", ":-(", ":-)", ";~)"];
// const countSmileys = (arr) => {
//   smileyCount = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (
//       arr[i] === ":)" ||
//       arr.replace(~- ,"")[i].replace(`~``-`, "") === ":D" ||
//       arr[i].replace(`~``-`, "") === ";D" ||
//       arr[i].replace(`~``-`, "") === ";)"
//     ) {
//       log(smileyCount);
//       smileyCount++;
//     }
//   }
//   return smileyCount;
// };

// log(countSmileys(mav));
// log(mav[1]);

// url = "www.whats.com";
// const removeUrlAnchor = (url) => {
//   const indexOfAnchor = url.indexOf("#");
//   if (indexOfAnchor === -1) {
//     return url;
//   } else {
//     return url.substr(1, indexOfAnchor - 1);
//   }
// };

// // log(removeUrlAnchor(url));
// let oddAndEvens = [3, 5, 7, 8, 8, 9, 10];
// const sortArray = (array) => {
//   const oddArray = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddArray.pop(array[i]);
//       log(oddArray), log(array);
//     }
//   }
// };

// sortArray(oddAndEvens);

// cameronIsCool = ["lake", ...vals, "shot an 84 today"];
// log(cameronIsCool);

// const reverseLetter = (str) => {
//   return str.replace(/[^a-z]/gi, "t");
//   // .split("")
//   // .reverse()
//   // .join("");
// };

// log(reverseLetter("cameorn is so cool !!!!!!!!"));

// const findMultiples = (integer, limit) => {
//   array = [];
//   sum = integer;
//   while (integer < limit + 1) {
//     array.push(integer);
//     integer = sum + integer;
//   }
//   return array;
// };
// log(findMultiples(5, 25));

// const isAnagram = (test, original) => {
//   return (
//     [...test.toUpperCase()].sort().join() == [...original.toUpperCase()].sort()
//   );
// };

// log(isAnagram("Twoo", "WooT"));

// const getRealFloor = (n) => {
//   if (n <= 0) {
//     return n;
//   }
//   if ((n >= 1) & (n <= 13)) {
//     return n - 1;
//   } else {
//     return n - 2;
//   }
// };

// log(getRealFloor(-3));
// log(getRealFloor(3));
// log(getRealFloor(13));

// const practice = () => {
//   for (i = 5; i <= 200; i = i + 5) {
//     log(i);
//   }
// };

// practice();
// const sequenceSum = (begin, end, step) => {
//   answer = 0;
//   for (i = begin; i <= end; i = i + step) {
//     answer = answer + i;
//   }
//   return answer;
// };

// log(sequenceSum(1, 5, 1));

// const sumStr = (a, b) => {
//   if ((a == "") & (b == "")) {
//     return "0";
//   }

//   if (a == "") {
//     return parseInt(b).toString();
//   }
//   if (b == "") {
//     return parseInt(a).toString();
//   } else {
//     return (parseInt(a) + parseInt(b)).toString();
//   }
// };
// log(sumStr("", ""));

// const solve = (s) => {
//   const numUpper = (s.match(/[A-Z]/g) || []).length;
//   const numlower = (s.match(/[a-z]/g) || []).length;
//   if (numUpper > numlower) {
//     return s.toUpperCase();
//   }
//   if (numlower >= numUpper) {
//     return s.toLowerCase();
// //   }
// // };

// // log(solve("CODe"));

// // const areaOrPerimeter = (l, w) => {
// //   if (l === w) {
// //     return l * w;
// //   } else {
// //     return l * 2 + w * 2;
// //   }
// // };

// function solution(str, ending) {
//   return str.slice(-ending.length) === ending;
// }

// log(solution("samurai", "ai"));

// const deleteNth = (arr, n) => {
//   const counts = {};
//   valuesCut = [];
//   arr.forEach(function (x) {
//     counts[x] = (counts[x] || 0) + 1;
//   });

//   const keys = Object.entries(counts);

//   log(keys[1][1]);
//   for (i = 0; i < keys.length; i++) {
//     if (keys[i][1] > n) {
//       valuesCut.push(keys[i]);
//     }
//   }
//   log(valuesCut);
// };

// deleteNth([1, 1, 3, 3, 3, 3, 7, 2, 2, 2, 2], 3);

// const myBill = () => {
//   log(1915 * 6 + 1000);
// };

// // myBill();

// const minValue = (values) => {
//   min = Math.min(...values);
//   return values.filter((e) => e ===
// };

// // log(minValue([1, 3, 4, 5]));
// const getMiddle = (s) => {
//   if (s.length % 2 !== 0) {
//     return s.charAt(s.length / 2);
//   } else {
//     return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
//   }
// };

// log(getMiddle("Lake"));
// // // log(getMiddle("lake"));
// function getMiddle(s) {
//   return s.slice(middle - 1, middle + 1);
// }

let myName = [1, 2, 3, 4];
let myPet = [5, 6, 7, 8, 19];
// log(string.slice(1, -2));

// const reverseWords = (str) => {
//   theAnswer = [];
//   arrayN = myName.split(" ");
//   for (i = 0; i < arrayN.length; i++) {
//     theAnswer.push(arrayN[i].split("").reverse().join(""));
//   }
//   return theAnswer.join(" ");
// log(reverseWords(myName));

// log([...myPet, ...myName].sort());
// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => {
//     return a - b;
//   });
// // }

// // log(mergeArrays(myName, myPet));

// const nbYear = (p0, percent, aug, p) => {
//   function yearCal() {
//     return (p0 = p0 * (percent / 100) + p0 + aug);
//   }
//   log((p0 = 15 * yearCal));
// };
// nbYear(1500, 5, 100, 5000);

// const noBoringZeros = (n) => {
//   if (n % 10 === 0) {
//     array = [...n.toString()];
//     for (i = array.length; i > 0; i--) {
//       if (array[i] == "0") {
//         array.pop(array[i]);
//       }
//     }
//     return parseInt(array.join(""));
//   } else {
//     return n;
//   }
// // };

// log(noBoringZeros(-8905));

// function setAlarm(employed, vacation) {
//   if ((employed === true) & (vacation === true)) {
//     return true;
//   } else {
//     return false;
// //   }
// // }

// const powersOfTwo = (n) => {
//   array = [];

//   for (i = 0; i <= n; i++) {
//     array.push(Math.pow(2, i));
//   }
//   return array;
// };

// log(powersOfTwo(1));

// const positiveSum = (arr) => {
// // };

// // positiveSum([1, -4, 7, 12]);
// const flattenAndSort = (array) => {
//   arrays = array
//     .join()
//     .split(",")
//     .filter((word) => word !== "")
//     .map(Number)
//     .sort((a, b) => {
//       return a - b;
//     });

//   return arrays;
// };

// arrayOfArrays = [[], []];
// flattenAndSort(arrayOfArrays);

// const longest = (s1, s2) => {
//   ArrayS = new Set([...s1, ...s2]);
//   return Array.from(ArrayS).sort().join("");
// };

// log(longest("aretheyhere", "yestheyarehere"));

// function greet(name, owner) {
//   if (name === owner) {
//     return "Hello boss";
//   } else {
//     return "Hello guest";
//   }
// }

// const order = (words) => {
//   log(words.split(" "));
// };

// // order("is2 Thi1s T4est 3a");
// function reverseList(list) {
//   return list.reverse();
// }

// // function distinct(a) {
// //   return [...new Set(a)];
// // }
// // log(distinct([1, 1, 2]));
// // log(distinct);
// function unusualFive() {
//   const index = "hello";
//   return index.length;
//   //
// // }

// // console.log(unusualFive(0));

// function howManyLightsabersDoYouOwn(name) {
//   if (name === "Zach") {
//     return 19;
//   } else return 0;
// }

// log(howManyLightsabersDoYouOwn("jim"));
