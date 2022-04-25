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
// console.log(basicOp("+", 3, 7));
