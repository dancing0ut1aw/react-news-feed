import React from "react";

export default function SearchBar(props) {
  const { stories, searchInput, inputValue, handleChange } = props;

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
      </form>
      <ul>
        {stories?.map((story) => {
          return <li key={story.objectID}>{story.title}</li>;
        })}
      </ul>
    </div>
  );
}
