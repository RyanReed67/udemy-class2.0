import React from "react";
import ReactDOM from "react-dom/client";

const fName = "Ryan";
const lName ="Reed";
const num = "67";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>My lucky number is {num}</p>
</div>
);
