import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// class Card extends Component {
const Card = (props) => {


  // constructor(props) {
  //   super(props);
  // }

  // render() {
    return (
      <div className="card">
        <ul className="card__content">
          <li className="card__content-text">{props.text}</li>
          <li className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</li>
            <div>
              <button
                className="card__delete"
                onClick={() => props.deleteCardCallback(props.id)}>
                Delete Card
              </button>
            </div>
        </ul>
      </div>
    )
  }

Card.propTypes = {
  id: PropTypes.integer,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.function
};

export default Card;
