import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
  }
  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        valu={name}
      />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
