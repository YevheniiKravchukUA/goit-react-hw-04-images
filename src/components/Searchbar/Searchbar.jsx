import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export function Searchbar({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState('');

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (inputValue.trim()) {
      onFormSubmit(inputValue.trim());
      setInputValue('');
    }
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button className="SearchForm-button" type="submit">
          <span>
            <FaSearch />
          </span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
