import React from "react";

export default class RandomNumberGenerator extends React.Component {
  getRandomNumber = () => {
    return Math.ceil(Math.random() * 100);
  };
  render() {
    return (
      <div>
        <form>
          <button>Get Random Number</button>
        </form>
      </div>
    );
  }
}
