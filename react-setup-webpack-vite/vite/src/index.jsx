// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  return <h1>AG Coding!</h1>;
}

// 5) Show the component on the screen
root.render(<App />);

// single, uninterrupted, synchronous transaction. With synchronous rendering, once an update starts rendering, nothing can interrupt it until the user can see the result on screen.

// What is Concurrent React?
// It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time, You can think of concurrency as an implementation detail
//priority queues and multiple buffering strategies
