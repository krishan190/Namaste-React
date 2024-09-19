import React from "react";
import ReactDOM from "react-dom/client";

const Title = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeadingCmp = () => {
  return (
    <div>
      {Title}
      <h1>This is a functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCmp />);
