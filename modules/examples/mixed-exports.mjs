// This module has no discernable style and is diffifult to read.
// But it shows how all options may be used together.

// capitalize is not available locally. it is passed thru
export { default as capitalize } from "lodash.capitalize";

let fallbackGreetingText = "there";

export function greet(name = fallbackGreetingText) {
  return `Hello, ${name}!`;
}

function hype(phrase) {
  return `${phrase.toUpperCase()}!`;
}

function chant(phrase) {
  // This function will throw because `capitalize` is passed thru
  return [...Array(3)].map(() => `${capitalize(phrase)}! `).trim();
}

export { hype, chant as chantPhrase, generateMitLicense as default };

function generateMitLicense(legalName, year = new Date().getFullYear()) {
  return `MIT License

Copyright (c) ${year} ${legalName}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
}
