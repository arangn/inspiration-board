import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <ul className="card__content">
          <li className="card__content-text">{this.props.text}</li>
          <li className="card__content-emoji">{emoji.getUnicode(`${this.props.emoji}`)}</li>
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string

};

export default Card;
