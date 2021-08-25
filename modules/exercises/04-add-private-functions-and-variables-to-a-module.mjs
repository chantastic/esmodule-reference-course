console.log("04-add-private-function-and-variables.mjs loaded")

function thisIsPrivate() {}

let thisIsAlsoPrivate = ""

function greet(name) {
  return `Hello, ${name}`
}