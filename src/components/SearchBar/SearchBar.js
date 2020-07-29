import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = { inputValue: '' };

  componentDidUpdate(prevProps) {
    const { inputValue } = this.props;

    if (prevProps.inputValue !== inputValue) {
      this.setState({
        inputValue,
      });
    }
  }

  handleSubmitForm = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { inputValue } = this.state;

    onSubmit(inputValue);
  };

  handleChangeInput = ({ currentTarget }) => {
    this.setState({ inputValue: currentTarget.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={this.handleChangeInput}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default SearchBar;
