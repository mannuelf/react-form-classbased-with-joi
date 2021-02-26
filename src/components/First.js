import { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(() => {
      console.log("...updating state");
      this.setState({ count: 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("💥 componentWillUnmount");
  }

  render() {
    console.log("Render");
    return <div>Hello</div>;
  }
}

export default First;
