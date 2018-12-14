import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.getCards()
  }

  getCards = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/Naheed/cards')
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  addCard = (text, emoji) => {
    axios.post(`https://inspiration-board.herokuapp.com/boards/Naheed/cards?text=${text}&emoji=${emoji}`)
    .then((response) => {
      this.getCards()
    });
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
    .then((response) => {
      this.getCards()
    });
  }


  render() {
    const allCards = this.state.cards.map((card) => {
      return <Card
        key={card.card.id}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
        addCardCallback={this.addCard}/>
    });

    return (
      <div >
        <h3 className="new-card-form__header">Make a new card</h3>
        <NewCardForm cards={this.state.cards} addCardCallback={this.addCard}/>
        <div className="board">
          {allCards}
        </div>
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
