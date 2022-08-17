import React from "react";
import TestComponent from "./Question5/testComponent";
import { TestProvider } from "./Question5/testcontext";
import Testform from "./Question5/testForm";
import "./App.css";

function App() {
  return (
    <TestProvider>
      <TestComponent />
      <Testform />
    </TestProvider>
  );
}

export default App;
