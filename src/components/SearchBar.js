import React, { useState } from "react";

const SearchBar = ({ onFormSubmit, intialSearch }) => {
  const [term, setTerm] = useState(intialSearch);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input value={term} onChange={onInputChange} type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
