import React from "react";
import "../styles/searchBar.css";

export default function SearchBar(props) {
  const {
    option,
    searchInput,
    selectOptions,
    inputValue,
    handleChange,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input
          ref={searchInput}
          type="text"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <select ref={selectOptions} value={option} onChange={handleChange}>
          <option value="story">Stories</option>
          <option value="comment">Comments</option>
          <option value="author_">Author</option>
        </select>
      </form>
    </div>
  );
}
