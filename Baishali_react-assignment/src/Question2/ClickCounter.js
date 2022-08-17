import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = (e) => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div>
        <div className="App-header" onClick={this.handleClick}>
          Click Here {this.state.count}
        </div>
        <br />
      </div>
    );
  }
}

export default ClickCounter;
