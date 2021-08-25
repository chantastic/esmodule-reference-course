# ES Modules for Lunch with [@chantastic][]

This is the course material for `ES Modules Reference` on [lunch.dev](lunch.dev).
Videos, ebook, and cheatsheet are accompaniments to this workshop are provided to members.

## Description

ES Modules (JavaScript Modules, if you like) help structure, organize and isolate code.

This reference course focuses on the ES Modules features available in a Node.js environment. I've chosen Node.js because most JavaScript applications today (2021) go thru some form of bundling before being sent to the browser. The features we cover should be common to all Node.js bundling tools (Webpack, Rollup, esbuild), using the latest LTS Node.js environments (v14+).

## Get started

- Clone this repo to a local directory and enter the directory
  - `cd` into the new directory
- run `npm install` to get the environment dependencies
- run `npm start` to run the `nodemon` watch script. This re-runs [index.js][] ever time a file in the project directory is saved

## Project structure

### README.md

You are here.

This is the file you're reading now. It includes setup and project navigation instrutions.

If you're watching this in workshop form, I'll lead you thru all the steps. If you're reading it, you can follow the EXERCISES.md linearly.

### index.js

This is our main file.

As you follow along with the video exercises, you will edit this file directly and in tandem with [assignment.mjs][].

In comments, you will see imports for every available lesson. These comments can be uncommented to jump to a working state for each lesson.

They look like this:

```js
// Lesson 5
// import { greet } from "./modules/05-import-from-module-export-list.mjs";
```

### /modules/assignment.mjs

[This file][assignment.mjs] is empty. It's where you will put your code, as you navigate the course!

I recommend going thru all the excercises — whether with your hands, voice-to-text, or otherwise. Completing the examples yourself will hell you translate the patterns to your own apps.

### /modules/exercises/

[This directory][exercises] includes completed modules for all lessons.

These are handy references for checking and debugging your soltions.

### /modules/examples/

[This directory][examples] includes additional examples of module techniques you mind find in applications.

## Copyright

Copyright &copy; 2021 Michael Chan

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[index.js]: ./index.js "index.js"
[exercise.md]: ./EXERCIES.md "EXERCISE.md"
[assignment.mjs]: ./assignment.mjs "assignment.mjs"
[examples]: ./modules/examples
[exercises]: ./modules/exercises
[@chantastic]: https://twitter.com/chantastic
