import React, { useState, useEffect } from "react";
import "./App.css";
import DateFilter from "./components/DateFilter";
import Feed from "./components/Feed";
import SearchBar from "./components/SearchBar";

function App() {
  const [stories, setStories] = useState([]);
  const [option, setOption] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [filterData, SetFilteredData] = useState([]);
  const [url, setURL] = useState(
    "https://hn.algolia.com/api/v1/search?tags=story"
  );

  let searchInput = React.createRef();
  let selectOptions = React.createRef();
  let selectOptionsDate = React.createRef();

  const handleChange = () => {
    setInputValue(searchInput.current.value);
    setOption(selectOptions.current.value);

    if (option !== "author_") {
      setURL(
        `https://hn.algolia.com/api/v1/search?query=${searchInput.current.value}&tags=${selectOptions.current.value}`
      );
    } else {
      setURL(
        `https://hn.algolia.com/api/v1/search?tags=author_${searchInput.current.value}`
      );
    }
  };

  const handleDateChange = (dateParams) => {
    setURL(
      `https://hn.algolia.com/api/v1/search?query=${searchInput.current.value}&tags=${selectOptions.current.value}&numericFilters=created_at_i>${dateParams}`
    );
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((stories) => setStories(stories.hits));
  }, [url]);

  return (
    <div className="App">

      <SearchBar
        option={option}
        searchInput={searchInput}
        selectOptions={selectOptions}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <DateFilter 
      stories={stories}
      selectOptionsDate={selectOptionsDate}
      handleDateChange={handleDateChange}
      />
      <Feed stories={stories} option={option} />

    </div>
  );
}

export default App;
