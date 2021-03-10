import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [stories, setStories] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [url, setURL] = useState(
    "http://hn.algolia.com/api/v1/search?tags=story"
  );

  useEffect(() => {
    const getStories = async () => {
      const storiesFromAPI = await fetchStories();
      setStories(storiesFromAPI);
    };
    getStories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let searchInput = React.createRef();

  const fetchStories = async (val) => {
    setInputValue(searchInput.current.value);
    setURL(
      `http://hn.algolia.com/api/v1/search?query=${searchInput.current.value}&tags=story`
    );

    let res = await fetch(url);
    let data = await res.json();
    return setStories(data.hits);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input
          ref={searchInput}
          type="text"
          value={inputValue}
          onChange={fetchStories}
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
