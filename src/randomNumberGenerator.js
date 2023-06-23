import React from "react";

export default class RandomNumberGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: undefined,
    };
  }
  getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100);
    this.setState({
      number: number,
    });
  };
  render() {
    return (
      <div>
        <form>
          <button>Get Random Number</button>
        </form>
        {this.state.number ? <div>Result:{this.state.number}</div> : null}
      </div>
    );
  }
}
