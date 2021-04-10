// import * as assignmentMod from "./modules/assignment.mjs";
import("./modules/assignment.mjs").then(
  ({ genMitLicense, greeting: myGreet }) => {
    console.log(myGreet());
    console.log(genMitLicense("Geo Lessel"));
  }
);

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
