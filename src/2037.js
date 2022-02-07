let seats = [3, 1, 5]; // 1 3 5
let students = [2, 7, 4]; // 2 4 7
seats.sort();
students.sort();
let count = 0;
// for(let i = 0; i < seats.length;i++) {
//     for(let j = 0; j < students.length; j++) {
//         if (j > i) {
//             j - 1;
//             count++;
//         }
//     }
// }
for (let i = 0; i < seats.length; i++) {
  count += Math.abs(seats[i] - students[i]);
}
console.log(count);
