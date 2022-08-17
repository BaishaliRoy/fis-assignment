import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("in Constructor");
  }

  componentDidMount() {
    console.log("in componentDidMount method");
    this.setState({
      counter: parseInt(this.props.counter),
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("in componentDidUpdate method");
    console.log("Previous Props-", prevProps);
    console.log("Previous State-", prevState);
  }

  handleClick = (e) => {
    let counter = this.state.counter;
    this.setState({ counter: counter + 1 });
    console.log(counter);
  };

  render() {
    return (
      <div>
        <div className="App-header" onClick={this.handleClick}>
          Click Here {this.state.counter}
        </div>
        <br />
      </div>
    );
  }
}

export default Lifecycle;
