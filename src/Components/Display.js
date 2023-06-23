import React from "react";
import ann from "../images/ann.jpg";
export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      photoURL: "",
    });
  }

  render() {
    return (
      <div>
        <img src={ann} alt="" />
      </div>
    );
  }
}
