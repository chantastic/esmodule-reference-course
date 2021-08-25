function greet(name) {
  return `Hey, ${name}!`;
}

// intentionally broken
export { greet, hey: "there" }