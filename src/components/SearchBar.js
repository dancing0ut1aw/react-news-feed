import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [stories, setStories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [url, setURL] = useState(
    "http://hn.algolia.com/api/v1/search?tags=story"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((stories) => setStories(stories.hits));

    console.log(stories);
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setURL(
              `http://hn.algolia.com/api/v1/search?query=${e.target.value}&tags=story`
            );
          }}
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
