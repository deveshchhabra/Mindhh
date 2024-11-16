import React, { useState } from "react";

function App() {
  const [disabled, setDisabled] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const handleClick = (button) => {
    setDisabled({
      button1: button === "button1" ? false : true,
      button2: button === "button2" ? false : true,
      button3: button === "button3" ? false : true,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={() => handleClick("button1")}
        disabled={disabled.button1}
      >
        Button 1
      </button>
      <button
        onClick={() => handleClick("button2")}
        disabled={disabled.button2}
        style={{ marginLeft: "10px" }}
      >
        Button 2
      </button>
      <button
        onClick={() => handleClick("button3")}
        disabled={disabled.button3}
        style={{ marginLeft: "10px" }}
      >
        Button 3
      </button>
    </div>
  );
}

export default App;
