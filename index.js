// About this course:
// This course is a reference course.
// I want to expose you to everything you can do with modules before diving into how to utilize them with React.

// lesson 1: modules leak
// * global code is global code, even if in a module
// * this is useful for setup in a global environment like with styling in a React project.

// import "./modules/global-effects.mjs";
// console.log(global.test);

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
import { greet } from "./modules/export-block.mjs";
console.log(greet());
