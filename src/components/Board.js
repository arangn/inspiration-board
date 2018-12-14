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

  // addBoard = (boardName) => {
  //   axios.post('https://inspiration-board.herokuapp.com/boards', boardName)
  //     .then((response) => {
  //       // We can update the state so we don't need to make another GET request
  //       let updatedData = this.state.boards;
  //       updatedData.push(boardName);
  //       this.setState({boards: updatedData});
  //     })
  //     .catch((error) => {
  //       // Use the same idea we had in our GET request
  //       this.setState({ error: error.message });
  //     });
  // }

  deleteCard = (id) => {
    console.log("WOW")
    console.log(id)
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`, id)
    .then((response) => {
      // We can update the state so we don't need to make another GET request
      axios.get('https://inspiration-board.herokuapp.com/boards/Naheed/cards')
      .then((response) => {
        this.setState({ cards: response.data });
        console.log(this.state.cards)
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
      console.log(this.state.cards)
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
        deleteCardCallback={this.deleteCard}/>
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
// deleteCardCallback={this.deleteCard}
// deleteCardCallback={this.onDelete.bind(this)}

Board.propTypes = {

};

export default Board;
