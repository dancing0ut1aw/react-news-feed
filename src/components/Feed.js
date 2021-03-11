import React from 'react'

// http://hn.algolia.com/api/v1/search?tags=front_page

const Feed = (props) => {
  const { stories } = props


  return (
    <ol className="feed"> 
      {stories.map(story => {
        return (
          <li className="story" key={story.created_at_i}>
            <h5><a href={story.url}>{story.title}</a> (<a href={story.url}>{story.url}</a>)</h5>
            <p>{story.points} | {story.author} | {story.created_at.substring(5, 10)}-{story.created_at.substring(0, 4)} | {story.num_comments} comments</p>
          </li>
        )
      })}
    </ol>
  )
}

export default Feed