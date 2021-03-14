import React from "react";
 
export default function DateFilter(props) {
  const { stories,
          selectOptionsDate,
        } = props
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

// Questions for Jordan
// 1) how to pass in all stories in the array not just [3], ex. const storyDate = new Date(stories[3].created_at);


// Take in stories array and push it back up to SetOptions to then give Claire access to it.

// Essentially run filterData,SetFilteredData
// Set filterData = value of filtered storiesArray
// After filtering setFiltered data to whatever filteredArray is 

  const handleFilteredData = (event) => {
    console.log("My stories data", stories[0])
    console.log(event.target.value);

    let targetValue = event.target.value

    const secondsSinceEpoch = Math.round(Date.now() / 1000)

    const twentyFourHoursFunc = () => {
      console.log("Seconds since Epoch", secondsSinceEpoch)

      let storyDate = new Date(stories.created_at);

      let storyTimeSinceEpoch = storyDate.getTime() / 1000

      console.log("Story time seconds", storyTimeSinceEpoch)
      
      stories.map(story => {
            if ((secondsSinceEpoch - storyDate) < 86400){
            console.log("My last 24 hours story time is", story);
            } else {
            console.log("More work to do")
            }
        })
      }
        
    // twentyFourHoursFunc()
        
    const pastWeekFunc = () => {
      console.log("Seconds since Epoch", secondsSinceEpoch)

      const storyDate = new Date(stories[3].created_at);


      let storyTimeSinceEpoch = storyDate.getTime() / 1000

      console.log("Story time seconds", storyTimeSinceEpoch)
      
      stories.map(story => {
            if ((secondsSinceEpoch - storyDate) < 604800){
            console.log("My last week of story time is", story);
            } else {
            console.log("This week has more work to do")
            }
        })
    }
    
    // pastWeekFunc()

    const pastMonthFunc = () => {
      // console.log("Seconds since Epoch", secondsSinceEpoch)

      const storyDate = new Date(stories[3].created_at);

      let storyTimeSinceEpoch = (storyDate.getTime() / 1000)

      // console.log("Story time seconds", storyTimeSinceEpoch)
      // console.log("Substraction is amazing", secondsSinceEpoch - storyTimeSinceEpoch)
      
      stories.map(story => {
            if ((secondsSinceEpoch - storyTimeSinceEpoch) < 2628288){
            console.log("My last month of story time is", story);
            } else {
            console.log("This month has more work to do")
            }
        })
    }
    
    // pastMonthFunc()

    const pastYearFunc = () => {
      // console.log("Seconds since Epoch", secondsSinceEpoch)

      const storyDate = new Date(stories[3].created_at);

      let storyTimeSinceEpoch = (storyDate.getTime() / 1000)

      // console.log("Story time seconds", storyTimeSinceEpoch)
      // console.log("Substraction is amazing", secondsSinceEpoch - storyTimeSinceEpoch)
      
      stories.map(story => {
            if ((secondsSinceEpoch - storyTimeSinceEpoch) < 31536000){
            console.log("My last year of story time is", story);
            } else {
            console.log("This year has more work to do")
            }
        })
    }
    
    // pastYearFunc()

    if(targetValue === 'last24') {
      return twentyFourHoursFunc() 
    } 
    else if (event.target.value === 'pastWeek') {
      return pastWeekFunc() 
    } 
    else if (event.target.value === "pastMonth") {
      return pastMonthFunc()
    }
    else if (event.target.value === "pastYear") {
      return pastYearFunc()
    } 
    else {
        console.log("Better luck next time")
    //   return allFunc()
    }

  }
 
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Filter by Date for </label>
          <select ref={selectOptionsDate} 
          onChange={handleFilteredData}
          >
            <option value="all">All time</option>
            <option value="last24">Last 24h</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
            {/* <option value="date">Custom Range</option> */}
          </select>
        </form>
      </div>
    );
}