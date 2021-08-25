let fallbackGreetingText = "there";

export function greet(name = fallbackGreetingText) {
  return `Hello, ${name}!`;
}

export function hype(phrase) {
  return `${phrase.toUpperCase()}!`;
}

export function chant(phrase) {
  return [...Array(3)]
    .map(() => hype(phrase))
    .join(" ")
    .trim();
}
