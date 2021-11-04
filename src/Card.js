import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render() {
    /* transform: translate(10px, 20px) rotate(20deg); */
    console.log(this._transform);
    const { name, img, id } = this.props;
    return (
      <div className="Card">
        {/* <p> {id}</p> */}
        <img
          style={{ transform: this._transform }}
          src={`${img}`}
          alt={`${name}`}
        />
      </div>
    );
  }
}

export default Card;
