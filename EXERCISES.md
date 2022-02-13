# Assignments

## 1. Import a module from the file system

Let's import our first ES Module.

Our goal is to import the [assignment.mjs][] module into our main file, [index.js][].

Open [index.js][] file in our project.

Import [assignment.mjs][] using the import keyword and providing the path as a string:

```mjs
import "./modules/assignment.mjs";
```

That's all for this assignment!

With one line, you've imported [assignment.mjs][] into [index.js][].

[assignment.mjs][] doesn't have any code yet and that's fine. It only needs to exist for [index.js][] it find and import it.

## 2. Add side-effects to a module

Modules can leak! This sounds bad — and it can be if not handled correctly.

Let's identy what features make a module leak.

### `console.log` makes modules leak

The first way to make a module leak is with `console.log`. If a module includes a module-level a `console.log` statement, it will be exectuted when that module is imported.

Add a `console.log` statement to [assignment.mjs][] to see this in action.

```js
// assignment.mjs
console.log("this will log when imported.");
```

### `global` assignments make modules leak

The second way to make modules like is with an assignment to `global`. These assignmentns will be added to the global environment when the module is imported.

Add a `global` assignment to [assignment.mjs][].

```js
// assignment.mjs
global.thisIsEverywhere = "welcome to side-effects";
```

Now this one requires some coordination to see.

In [index.js][], log the value of `global.thisIsEverywhere`.

```js
//index.js
console.log(global.thisIsEverywhere);
```

This was not imported from the module. It was added to the `global` object as a side-effect of the module being imported.

In the following lessons, we'll cover how to import from a module.

#### Consider this

- Where may the automatic execution of global code be useful?
- Have you seen it in use before?

## 3. Import a module dynamically

The `import` keyword has two variants.

Up to this point we've used the "static" `import`. Let's learn how to use the dynamic `import`.

!!!you were here!!!

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

### 12. Tree-shaking \* as

TODO

### 13. Don't return an object as default

TODO

[index.js]: ./index.js "Project main file"
[assignment.mjs]: ./assignment.mjs "Assignment workspace file"
