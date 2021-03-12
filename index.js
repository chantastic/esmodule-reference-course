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
// import defaultText, { greet } from "./modules/export-block.mjs";
// const { greet, default: defaultText } = await import(
//   "./modules/export-block.mjs"
// );
// console.log(greet(defaultText));

// new route from globals
// * function can't be exported
// * export block
// * can we use object syntaxes? no. export blocks are not objects
//   lens into why: export named, default, and renaming with as (value of import block)
// * named exports with export keyword before function
// * rename on export
// * rename on import
// * alternatives to block
//   * can we have both block and named exports? 👍
//   * what about block and default and named?
// * how default looks in an export block
// * change it to dynamic again to make sure we can do all the same things

// modules
// * export-list
// * named-exports
// * renamed-exports
// * default-export
// * mixed-exports
// * global-effects
// * mixed-exports-and-global-effects
// * isolated-only

// import "./modules/global-effects.mjs";
// console.log(leak);

// ---

// 1
// import "./modules/assignment.mjs";

// 2
// import "./modules/assignment.mjs";
// console.log(global.leak);

// 3
import("./modules/assignment.mjs");
console.log("first???");
