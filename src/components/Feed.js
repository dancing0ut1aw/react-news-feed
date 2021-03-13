import React from "react";
import "../styles/feed.css";


// http://hn.algolia.com/api/v1/search?tags=front_page

const Feed = (props) => {
  const { stories, option, inputValue} = props;

  if(option === 'comment'){
    return (
      <ol className="feed">
        {stories.map((story) => {
          return (
            <li className="story" key={story.created_at_i}>
              <p className="storyDetails">
                {story.points} | {story.author} |{" "}
                {story.created_at.substring(5, 10)}-
                {story.created_at.substring(0, 4)} | from {story.title}
              </p>
              <p dangerouslySetInnerHTML={{ __html: story.comment_text }}/>
            </li>
          );
        })}
      </ol>
    );
  } else {
    console.log(inputValue)
    return (
      <ol className="feed">
        {stories.map((story) => {
          return (
            <li className="story" key={story.created_at_i}>
              <a href={story.url}>{story.title}</a> 
              <a className="url" href={story.url}>({story.url})</a>
              <p className="storyDetails">
                {story.points} | {story.author} |{" "}
                {story.created_at.substring(5, 10)}-
                {story.created_at.substring(0, 4)} | {story.num_comments} comments
              </p>
            </li>
          );
        })}
      </ol>
    );
  }
};

export default Feed;
