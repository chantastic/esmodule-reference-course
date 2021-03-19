# ES Modules Reference Course with @chantastic

This is the course material for `ES Modules Reference` on [lunch.dev](lunch.dev).
A video of this workshop is provided to members.

ES Modules (JavaScript Modules, if you like) help us structure, organize and isolate code.

These reference course focuses on the ES Modules features available in a Node.js environment. I've chosen node because most JavaScript applications today (early 2021) still go thru some form of bundling before being sent to the browser. The features we cover should be common to all Node.js bundling tools (Webpack, Rollup, esbuild) (the latest LTS) Node.js environments (v14+).

## Get started

- Clone this repo to a local directory and enter the directory
- run `npm install` to get the environment dependencies
- run `npm start` to run the `nodemon` watch script. this will re-run `index.js` ever time you save a file in the project directory

## Project structure

### `index.js`

`index.js` is our main file. This is where all exercises are run.

Examples in `readme.md` can be copy/pasted into `index.js`.

### `readme.md`

`readme.md` is where all the written exercises live. If you're watching this in workshop form, I'll lead you thru all the steps. If you're reading it, you can follow the [assignments](#assignemnts) linearly.

### `./modules`

`./modules` includes a number prepared module files. The names relate to the type of content inside. Various examples might use these prepared modules to explore a concept.

### `./modules/assignment.mjs`

`./modules/assignment.mjs` is an empty module. I use this for interactive workshops.

If you're following along, I recommend typing everything. This empty module can be a good place to do that.

## Assignments

### 1. Import a module from the file system

Modules are imported using the `import` keyword and a string path to that module.
This is predominantly done at the openning of a file.

We can import any module that exists on the file system.

#### Assignment

Import the `assignment.mjs` module using the `import` keyword and file path.

### 2. Make your module leaky (temporarily)

The first thing to know about modules is that they leak. They don't perfectly encapsulate all code. Global code is global code, even if in a module.

This might sounds bad (and it can be) but it's an important feature.

#### Assignment

Add globally executing code to the `asignment.mjs` module — imported in the previous lesson.
Globally executing code can be `console.log("assignments.mjs loaded.")` and/or an assignment like `global.leak = "oops! guess this is everywhere now!"`.

#### Discuss

Where may the automatic execution of global code be useful? Have you seen it in use before?

### 3. Import a module dynamically

The `import` keyword has two variants.
It can be static (as we've done up to this point) or it can be dynamic.

You can change a static import to a dynamic import by adding parenthesis around the path string.

- static import: `import "./modules/assignment.mjs";`
- dynamic import: `import("./modules/assignment.mjs");`

#### Assignment

Change the static import to a dynamic import.  
Dynamic `import` returns a `Promise`.
Take a stab at handling that promise using `.then()` or `await`.

#### Discuss

Using `.then()` to resolve the Promise, how might this change the order of execution?

What are two places where loading modules dynamically might be useful?

### 4. Add a function declaration and variable to the module

While, global code is executed at `import`, variables and function declarations are not.
They're kept isolated to the module.

Even though a function or variable might exist in an imported module, it can't be accessed outside of that module.

#### Assignment

Add a variable and function declaration to the module.

I'll be using this in future examples:

```js
let fallbackName = "there";

function greet(name = fallbackName) {
  return `Hey, ${name}!`;
}
```

### 5. Export using an export list

Now we'll cover the first of `export` (make available) code from a module.

We'll use an `export` list to export our `greet` function, which shares a syntax with `import`.
We can export anything defined in our module by adding it to the comma separated `export` list.

`export { fallbackName, greet };`

Anything exported from a module may also be imported, using the same list syntax `{}`.
Importing specific imports from a module requires the `from` keyword before the path string.

`import { fallbackName, greet } from "./modules/assignment.js";`

_Note that an `export` list is commonly at the end of a file to guarantee that everything exported — or referenced — already exists_

#### Assignment

Export and import just the `greet` function using an `export` list.

#### Discuss

Note that `greet` still has access to `fallbackName`, even though `fallbackName` isn't exported.
Why do you think that is?
How might it be used to your advantage?

### 6. Export and import lists are not objects

`export` and `import` lists are exactly that, lists.  
They share curly braces `{}` with JavaScript `Objects` but that's all they share.

So you can't use a `:` to define or rename something inline.
And you can't do deep destructuring like you might with an object.

### Assignment

If you don't believe me, give it a try.
Export and object and try destructuring it in `import`.

### 7. Use `as` to alias (or rename) imports and exports

Modules might not share object syntax with modules but they still allow for aliasing (or renaming) of variables and functions. We alias imports and exports using the `as` keyword. And it works identically on both import and export side.

```js
export { aGoodLocalName as aBetterExportedName };
```

```js
import { aBetterExportedName as anEvenBetterContextualName } from "./modules/assignment";
```

#### Assignment

Rename the `greet` function at `export` (doesn't matter what).  
At import, use the new function name you've exported.  
Then rename it back to `greet` at `import`, just to complete the circle 😆

#### Discuss

Why is this an important feature?
How does it help you write better applications?

### 8. Export a named named export inline

TODO

#### Discuss

Can I use named exports and blocks? Yup, if they don't export the same named functions.

### 9. Export a default with the `default` keyword

TODO

### 10. Collect an entire module into an object with the \*

TODO

### 11. (dynamic)

TODO

### 11. Aggregate modules with `export from` ("emport")

TODO

### 12. Tree-shaking * as

TODO

### 13. Don't return an object as default

TODO
