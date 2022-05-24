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
// test = [2, 2, 3, 1, 2, 1];
// const removeSmallest = (numbers) => {
//   newArray = [];
//   // newArray = numbers.map((x) => x * 1);
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));

//   log(indexOfMin);
// };

// // removeSmallest(test);
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
// test = ["Beg", "Life", "I", "To"];
// const sortByLength = (array) => {
// //   return array.sort((a, b) => b.length - a.length);
// // };
// lake = 40452;
// // log(sortByLength(test));
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
// let tester = [9, 3, "7", "3"];

// const sumMix = (array) => {
//   i = 0;
//   newArray = [];
//   array.forEach((a) => {
//     newArray.push(Number(a));
//   });
//   return newArray.reduce((a, b) => a + b, 0);
// };

// log(sumMix(tester));
test = [1, 2, "aasf", "1", "123", 123];
const filter_list = (l) => {
  newArray = [];
  for (i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      newArray.push(l[i]);
    }
  }
  return newArray;
};

log(filter_list(test));
