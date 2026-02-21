# Gooact – A Tiny React-Like Library in ~160 Lines

Gooact is a minimal React-inspired library built from scratch in plain JavaScript to understand how modern frontend frameworks work under the hood.

This project focuses on the core ideas behind React, not performance or feature completeness. It demonstrates how components, state, and rendering can be implemented with a small amount of code and no external dependencies.

---

## What This Project Demonstrates

- Function-based components
- A simplified `useState` hook implementation
- Virtual element creation (similar to what JSX compiles into)
- Recursive rendering of a virtual tree to the real DOM
- Full re-rendering on state updates (no diffing or reconciliation)

The goal is educational clarity rather than optimisation.

---

## Key Concepts Explored

- How React hooks rely on call order
- How state can be stored and retrieved across renders
- How JSX maps to `createElement` calls
- How a virtual structure is translated into DOM nodes
- Why frameworks abstract these details away in real applications

---

## How It Works (High Level)

- Components are plain JavaScript functions
- Each component returns a virtual element tree
- `useState` stores values in an indexed state array
- Updating state triggers a full re-render
- The virtual tree is recursively converted into real DOM nodes

---

## Why This Exists

Most React applications hide the mechanics of rendering and state management.  
This project exists to demystify React by rebuilding its core ideas in the simplest way possible.

It is intended for learning, experimentation, and deeper understanding — not production use.

---

## Limitations

- No JSX support (elements are created manually)
- No diffing or reconciliation
- No lifecycle methods
- No effects, context, or memoisation
- Entire DOM is re-rendered on each state change

These limitations are intentional to keep the implementation readable and focused.

---

## Running the Project

1. Clone the repository
2. Open `index.html` in a browser
3. Interact with the example component to see state updates in action

No build tools or dependencies are required.

---

## What I Learned

- How React’s mental model differs from its implementation
- Why hooks must be called in a consistent order
- How virtual DOM abstractions simplify UI reasoning
- How much complexity real frameworks manage for developers

