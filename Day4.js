let students = [
  { name: "Giovanni", score: "85" },
  { name: "Anna", score: "70" },
  { name: "Karen", score: "69" },
];
let bestStudent = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].score > bestStudent.score) {
    bestStudent = students[i];
  }
}

console.log(`The best student is ${bestStudent.name}`);
