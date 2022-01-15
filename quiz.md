1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. It describes the elements that React needs to add to the real DOM.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
These are sibling elements. They should've been wrapped inside a parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?
It means that we only describe what needs to be done. We do not go into the nitty-gritty of how it should be done, step by step, like for the case of "imperative".

5. What does it mean for something to be "composable"?
It means that it can be broken down into smaller chunks, which can be built upon to "compose" it.