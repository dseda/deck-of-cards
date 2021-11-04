import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, img, id } = this.props;
    return (
      <div>
        <p> {id}</p>
        <img src={`${img}`} alt={`${name}`} />
      </div>
    );
  }
}

export default Card;
