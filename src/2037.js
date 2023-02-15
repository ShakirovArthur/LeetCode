let seats = [3, 1, 5];
let students = [2, 7, 4];
seats.sort();
students.sort();
let count = 0;
for (let i = 0; i < seats.length; i++) {
  count += Math.abs(seats[i] - students[i]);
}
console.log(count);
