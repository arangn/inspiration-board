import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

    return (
      <div className="card">
        <span className="card__content">
          <div className="card__content-text">{props.text}</div>
          <div className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</div>
            <button
              className="card__delete"
              onClick={() => props.deleteCardCallback(props.id)}>
              Delete Card
            </button>
        </span>
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
