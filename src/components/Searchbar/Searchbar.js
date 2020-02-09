import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onHandleInput = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onHandleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={inputValue}
            onChange={this.onHandleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
