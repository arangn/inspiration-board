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

  addCard = (text, emoji) => {
    axios.post(`https://inspiration-board.herokuapp.com/boards/Naheed/cards?text=${text}&emoji=${emoji}`)
      .then((response) => {
        axios.get('https://inspiration-board.herokuapp.com/boards/Naheed/cards')
        .then((response) => {
          this.setState({ cards: response.data });
        })

        // let updatedData = this.state.cards;
        // updatedData.push();
        // this.setState({cards: updatedData});
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
    .then((response) => {
      // We can update the state so we don't need to make another GET request
      axios.get('https://inspiration-board.herokuapp.com/boards/Naheed/cards')
      .then((response) => {
        this.setState({ cards: response.data });
      })
      // let updatedData = this.state.cards;
      // updatedData.filter((card) => {
      //   return id != card.id;
      // });
      // this.setState({cards: updatedData});
    })
    .catch((error) => {
      // Use the same idea we had in our GET request
      this.setState({ error: error.message });
    });
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/Naheed/cards')
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
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
      <div>
        <div>
          <NewCardForm cards={this.state.cards} addCardCallback={this.addCard}/>
        </div>
        <ul>
          {allCards}
        </ul>
      </div>
    )
  }
}
// deleteCardCallback={this.deleteCard}
// deleteCardCallback={this.onDelete.bind(this)}

Board.propTypes = {

};

export default Board;
