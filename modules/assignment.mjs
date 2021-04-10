export { default as genMitLicense } from "./default-export.mjs";
// Type all export/module assignments here
// console.log("assignment.mjs is loaded");

// global.leak = "leak is now everywhere";

let defaultSubject = "there";

export function greet(subject = defaultSubject) {
  return `Hey, ${subject}!`;
}

let myObject = {
  name: "chantastic",
};

export { greet as greeting, greet as otherGreet, defaultSubject, myObject };

// export default greet;
