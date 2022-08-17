import React, { createContext } from "react";

const TestContext = createContext({
  username: "",
  updateUsername: () => {},
});

export class TestProvider extends React.Component {
  updateUsername = (newUsername) => {
    this.setState({ username: newUsername });
  };

  state = {
    username: "Baishali",
    updateUsername: this.updateUsername,
  };

  render() {
    return (
      <TestContext.Provider value={this.state}>
        {this.props.children}
      </TestContext.Provider>
    );
  }
}

export const TestConsumer = TestContext.Consumer;
