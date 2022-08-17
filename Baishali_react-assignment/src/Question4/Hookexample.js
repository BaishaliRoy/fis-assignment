import React, { useState, useEffect, useRef } from "react";

function Hookexample() {
  const [count, setCount] = useState("0");
  useEffect(() => {
    console.log("clicked");
  });

  return (
    <div>
      <div className="App-header" onClick={() => setCount(parseInt(count) + 1)}>
        Click Here {count}
      </div>

      <br />
    </div>
  );
}

export default Hookexample;
