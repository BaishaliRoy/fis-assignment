import React from "react";
import { TestConsumer } from "./testcontext";

export default function Testform() {
  return (
    <TestConsumer>
      {({ updateUsername }) => (
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            onChange={(event) => {
              updateUsername(event.target.value);
            }}
          />
        </div>
      )}
    </TestConsumer>
  );
}
