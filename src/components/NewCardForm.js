import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      emoji: ""
    }
  }


  onInputChange = (event) => {
    console.log("on input change")
    // event.target.className = ' '
    const field = event.target.name;
    const value = event.target.value;
    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit")
    console.log(this.state.emoji)

    this.props.addCardCallback(this.state.text, this.state.emoji);

    this.setState({
      text: "",
      emoji: ""
    });

  }

  render () {

    const allEmojis = EMOJI_LIST.map((element, i) => {
      return <option
        key={i}
        value={`${element}`}>
        {emoji.getUnicode(`${element}`)}
      </option>
    });
    //need to use element instead of emoji because wont recognize emoji.getUnicode as function

    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Make a new card</h3>
        <form
          className="new-card-form__form"
          onSubmit={this.onFormSubmit}>
          <div>
            <label
              className="new-card-form__form-label"
              htmlFor="Text">
            </label>
            <input
              placeholder="Inspiration"
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}
              className="new-card-form__form-textarea"/>
          </div>
          <div>
            <label
              className="new-card-form__form-label"
              htmlFor="Emoji">
            </label>
            <select onChange={this.onInputChange} name="emoji" className="new-card-form__form-select">
              <option value="" disabled selected hidden>Emoji</option>
              {allEmojis}
            </select>
          </div>
          <div >
            <input type="submit" value="Submit Card" className="new-card-form__form-button" />
          </div>
        </form>
      </div>
    )
  }

}

NewCardForm.propTypes = {
  cards: PropTypes.array,
};

export default NewCardForm;
