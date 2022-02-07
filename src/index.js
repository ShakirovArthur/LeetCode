// let num = +prompt('Первое число', "");
// let num2 = +prompt('Второе число', "");
// console.log(num + num2);

// function readNumber () {
//   let num;
//  do {
//     num = prompt('Введите число', '');
//  } while (!isFinite(num));
//  if (num === null || num === "") {
//    return null;
//  }
//  return +num
// }
// alert (`${readNumber()}`);

// let styles = ['Джаз' , 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles.shift());
// styles.unshift('Рэп', 'Рэгги');
// console.log(styles);

// function unique(arr) {
//   return Array.from(new Set(arr));

// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// function aclean(arr) {
//   let mySet = new Set(arr)
// return Array.from(mySet)
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

//

// let user = {
//   name: 'John',
//   age: 30
// };
// function count(obj) {
//   return Object.keys(obj).length;
// }

// alert( count(user) );

// let user = {
//   name: "John",
//   years: 30
//   // isAdmin: 0
// };
// let { name, years: age, isAdmin = false } = user;
// alert(name);
// alert(age);
// alert(isAdmin);
// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// let data = new Date(2012 , 1 , 20 , 3 , 12);
// alert(data);

// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[date.getDay()];
// }
// let date = new Date();
// alert(getWeekDay(date));

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };
// let json = JSON.stringify(user);
// let user2 = JSON.parse(json);

// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
//   sayHi();
// }

// function printNumbers(from, to) {
//   let current = from;
//   let timerID = setInterval(function () {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerID);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(1, 5);

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//     constructor(options) {
//       super(options);
//       let precision = 1000;
//       precision = options;
//       this.precision = precision;
//     }

//     start(){
//       this.render();
//       this.timer = setInterval(() => this.render(), this.precision);
//     }
// };
