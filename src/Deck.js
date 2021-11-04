import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: "", drawn: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    let deckUrl = `${API_BASE_URL}new/shuffle/`;
    let response = await axios.get(deckUrl);
    let deckId = response.data.deck_id;
    this.setState({ deck: deckId });
  }
  async drawNewCard() {
    let cardUrl = `${API_BASE_URL}${this.state.deck}/draw/`;
    try {
      let response = await axios.get(cardUrl);
      if (response.data.cards.length === 0) {
        throw new Error("No card remaining");
      } else if (!response.data.success) {
        throw new Error("Something went wrong");
      }
      let card = response.data.cards[0];
      let { image, suit, value, code } = card;
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          { id: code, img: image, name: `${value} of ${suit} ` },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }
  handleClick(e) {
    this.drawNewCard();
  }
  render() {
    const cards = this.state.drawn.map((card) => (
      <Card key={card.id} name={card.name} img={card.img} id={card.id} />
    ));
    return (
      <div className="Deck">
        <h1 className="deck-title">Card dealer</h1>
        <button onClick={this.handleClick}>Draw new card</button>
        <div className="Cards">{cards}</div>
      </div>
    );
  }
}

export default Deck;
