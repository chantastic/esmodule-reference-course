// Hey there!
// This file is where you'll import your module at `./assignment.mjs`















// If you want to jump to a working example, uncomment the lesson solutions below 👇

// Lesson 1
// import "./modules/examples/01-import-a-module-from-the-file-system.mjs";

// Lesson 2
// import "./modules/examples/02-add-import-side-effects-to-a-module.mjs";
// console.log(thisIsEverywhere);

// Lesson 3
// import("./modules/examples/03-import-a-module-dynamically.mjs").then(() => {
//   console.log(thisIsEverywhere);
// })

// Lesson 4
// import "./modules/examples/04-add-private-functions-and-variables-to-a-module.mjs";
// // as we add these private functions we get errors
// thisIsPrivate(); // we expect to see an error
// console.log(thisIsAlsoPrivate);

// Lesson 5
// import { greet } from "./modules/examples/05-import-from-module-export-list.mjs";

// console.log(greet("there"));

// Lesson 6
// flesh this out a little bit
// import { greet, someObject: { someValue } } from "./modules/examples/05-import-from-module-export-list.mjs";

// console.log(greet("there"));

// Lesson 7
// import { greet, chant } from "./modules/examples/07-import-and-export-multiple-items-with-export-list.mjs";
// console.log(greet("there"));
// console.log(chant("You"));

// Lesson 8
// import { greetName, chant } from "./modules/examples/08-rename-exports-with-as-keywoard.mjs";
// console.log(greetName("there"));
// console.log(chant("You"));

// Lesson 9
// import * as nameUtils from "./modules/examples/09-reference-a-modules/examples-contents-like-an-object.mjs";
// console.log(nameUtils.greet("there"));
// console.log(nameUtils.chant("You"));

// Lesson 10
// import { greet, chant } from "./modules/examples/10-export-functions-and-variables-inline.mjs";
// console.log(greet("there"));
// console.log(chant("You"));

// Lesson 11

// ---
// import * as assignmentMod from "./modules/examples/assignment.mjs";
// import("./modules/examples/assignment.mjs").then(
//   ({ genMitLicense, greeting: myGreet }) => {
//     console.log(myGreet());
//     console.log(genMitLicense("Geo Lessel"));
//   }
// );

// function greet(subject = defaultSubject) {
//   return `Salutations, ${subject}!`;
// }

// console.log(assignmentMod.greet(assignmentMod.defaultSubject));
// console.log(assignmentMod.otherGreet(assignmentMod.defaultSubject));
// console.log(assignmentMod.greeting(assignmentMod.defaultSubject));

// let myModule = "assignment";
// import(`./modules/${myModule}.mjs`).then(() => {
//   console.log(global.leak);
// });

// 11. Import module contents with dynamic imports
// 11. Aggregate modules with `export from` ("emport")
// 12. Eliminate unaccessed exports with tree-shaking
// 13. Ruin everything by exporting an object
// import greetName, * as nameUtils from "./assignment.mjs";

// chant("We're done")
