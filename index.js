// About this course:
// This course is a reference course.
// I want to expose you to everything you can do with modules before diving into how to utilize them with React.

// lesson 1: modules leak
// * global code is global code, even if in a module
// * this is useful for setup in a global environment like with styling in a React project.

import "./lesson/1-modules-leak.mjs";
console.log(global.test);