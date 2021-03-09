// About this course:
// This course is a reference course.
// I want to expose you to everything you can do with modules before diving into how to utilize them with React.

// lesson 1: modules leak
// * global code is global code, even if in a module
// * this is useful for setup in a global environment like with styling in a React project.

// import "./lesson/1-modules-leak.mjs";
// console.log(global.test);

// lesson 2: modules can be imported asyncronously
// * how will the output change if we change this to a dynamic import?
// * how can we fix it? with .then()
// * we can alse use await
// * and add conditionals

// import("./lesson/1-modules-leak.mjs").then(() => console.log(global.test));

const env = "production";

if (env === "development") {
  await import("./lesson/1-modules-leak.mjs");
  console.log(global.test);
  console.log("hey! we're in DEV. let's party!");
}
