import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [stories, setStories] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [url, setURL] = useState(
    "http://hn.algolia.com/api/v1/search?tags=story"
  );

  let searchInput = React.createRef();

  const handleChange = () => {
    setInputValue(searchInput.current.value);
    setURL(
      `http://hn.algolia.com/api/v1/search?query=${searchInput.current.value}&tags=story`
    );
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((stories) => setStories(stories.hits));

    console.log(stories);
  }, [url, stories]);

  return (
    <div className="App">
      <SearchBar
        stories={stories}
        searchInput={searchInput}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
