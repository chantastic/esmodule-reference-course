let fallbackGreetingText = "there";

function greet(name = fallbackGreetingText) {
  return `Hello, ${name}!`;
}

function hype(phrase) {
  return `${phrase.toUpperCase()}!`;
}

function chant(phrase) {
  return [...Array(3)]
    .map(() => hype(phrase))
    .join(" ")
    .trim();
}

export { greet as greetName, hype as hypeString, chant as chantPhrase };
