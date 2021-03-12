// 2
// console.log("assignment.mjs is loaded.");
// global.leak = "oops! guess this is everywhere now.";

// 4
// console.log("assignment.mjs is loaded.");
// global.leak = "oops! guess this is everywhere now.";

// let fallbackName = "there";

// function greet(name = fallbackName) {
//   return `Hey, ${name}!`;
// }

// 5
console.log("assignment.mjs is loaded.");
global.leak = "oops! guess this is everywhere now.";

let fallbackName = "there";

function greet(name = fallbackName) {
  return `Hey, ${name}!`;
}

export { greet };
