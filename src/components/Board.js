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
      cards: [
      ]
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards')
    .then((response) => {
      this.setState({ cards: response.data });
      console.log(this.state.cards)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    const allCards = this.state.cards.map((card, i) => {
      return <Card
        key={i}
        text={card.card.text}
        emoji={card.card.emoji} />
    });

    return (
      <div>
        <ul>
          {allCards}
        </ul>
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
