//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const name = "Ryan Reed";
const year = new Date().getFullYear();

root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>
);
