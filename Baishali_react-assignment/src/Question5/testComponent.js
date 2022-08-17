import React from "react";
import { TestConsumer } from "./testcontext";

export default function TestComponent() {
  return (
    <TestConsumer>
      {({ username }) => <div className="App-header">Hello {username}!</div>}
    </TestConsumer>
  );
}
