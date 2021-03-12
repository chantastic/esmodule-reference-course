// index.js
// lesson 2: modules can be imported asyncronously
// * how will the output change if we change this to a dynamic import?
// * how can we fix it? with .then()
// * we can alse use await
// * and add conditionals

// import("./modules/global-effects.mjs").then(() => console.log(global.test));

// const env = "development";

// if (env === "development") {
//   await import(`./modules/${"global-effects"}.mjs`);
//   console.log(global.test);
//   console.log("hey! we're in DEV. let's party!");
// }

// lesson 3: modules encapsulate code (if not global)
// Form here out, we'll use the static import style because there's more we can do with static imports
// * import from a module that has function declarations or variable assignments

// import "./modules/scratch.mjs";

// lesson 4: the export keyword makes code importable
// Form here out, we'll use the static import style because there's more we can do with static imports
// * import a named function
// * import a named text
// * (note code completion in VSCode)

// import { myNamedFunction, someText } from "./modules/named-exports.mjs";
// myNamedFunction();
// console.log(someText);

// lesson 5: import module exports by name

// lesson: module with export block
// import defaultText, { greet } from "./modules/export-block.mjs";
// const { greet, default: defaultText } = await import(
//   "./modules/export-block.mjs"
// );
// console.log(greet(defaultText));

// ---

// 1
// import "./modules/assignment.mjs";

// 2
// import "./modules/assignment.mjs";
// console.log(global.leak);

// 3
// import("./modules/assignment.mjs");
// console.log("first???");

// example use of pre-formed modules
// export-list

// assignment.js
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

// readme notes

// other syntaxes not covered yet
// // Exporting destructured assignments with renaming
// export const { name1, name2: bar } = o;

// export { name1 as default, … };

// // Aggregating modules
// export _ from …; // does not set the default export
// export _ as name1 from …; // Draft ECMAScript® 2O21
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;