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
        {
          "text": "Make sure you pet a dog this week!"
        },
        {
          "text": "",
          "Emoji": "heart_eyes"
        },
        {
          "text": "REST is part of work"
        },
        {
          "text": "Take a nap"
        },
        {
          "emoji": "beer"
        }
      ]
    };
  }


  render() {
    const cards = this.state.cards;

    const allCards = cards.map((card, i) => {
      return <Card
        key={i}
        text={card.text}
        emoji={card.emoji} />
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
