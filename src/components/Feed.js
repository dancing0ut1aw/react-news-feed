import React, { useState, useEffect } from 'react'

// http://hn.algolia.com/api/v1/search?tags=front_page

const Feed = () => {
  const [stories, setStories] = useState([])

  // useEffect (() => {
  //   fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
  //   .then((res) => res.json())
  //   .then((data) => setStories(data.hits))
  // })

  useEffect (() => {
    const getStories = async () => {
      const storiesFromAPI = await fetchStories()
      setStories(storiesFromAPI)
    }
    getStories()
  }, [])

  //possible funtction to load defualt stories untill search has been made. 
  const fetchStories = async() => {
    console.log(stories)

    //If a search has been made, the below code will be replaced to setStories(RobertsSearchResults)
    if(stories.length > 0){
      let res = await fetch('http://hn.algolia.com/api/v1/search?query=foo&tags=story')
      let data = await res.json()
      console.log("Current Array:", stories)
      return setStories(data.hits)

    // else, stories will be filled with the front page stories
    } else {
      let res = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
      let data = await res.json()
      return data.hits
    }
  }

  return (
    <ol className="feed"> 
      <button onClick={fetchStories}>Search for "Foo"</button>
      {stories.map(story => {
        return (
          <li className="story" key={story.created_at_i}>
            <h5><a href={story.url}>{story.title}</a> (<a href={story.url}>{story.url}</a>)</h5>
            <p>{story.points} | {story.author} | {story.created_at.substring(5, 10)}-{story.created_at.substring(0, 4)} | {story.num_comments}</p>
          </li>
        )
      })}
    </ol>
  )
}

export default Feed