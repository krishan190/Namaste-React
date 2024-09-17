{
  /* <div id="container">
      <h1 id="title">Heading 1</h1>
      <h1 id="title">Heading 2</h1>
  </div> */
}

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2] //It is a react element (It is a object at the end of the day)
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
// render will modify the DOM
root.render(container);
