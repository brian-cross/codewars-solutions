// Original solution;

// function alphabetPosition(str) {
//   const positions = "abcdefghijklmnopqrstuvwxyz".split("");
//   const strArray = str.toLowerCase().split("");
//   const positionsArray = [];

//   strArray.forEach(c => {
//     const index = positions.indexOf(c);
//     if (index !== -1) positionsArray.push(index + 1);
//   });

//   return positionsArray.join(" ");
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

// More elegant solution:

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .match(/[A-Z]/gi)
    .map(c => c.charCodeAt(0) - 96)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
