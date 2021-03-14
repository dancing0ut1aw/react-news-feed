import React from "react";
 
export default function DateFilter(props) {
  const { stories,
          selectOptionsDate,
          handleDateChange,
        } = props
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFilteredData = async (event) => {
    let targetValue = event.target.value

    const secondsSinceEpoch = Math.round(Date.now() / 1000)

    const twentyFourHoursFunc = () => {
      handleDateChange(secondsSinceEpoch - 86400);
      }
                
    const pastWeekFunc = () => {
      handleDateChange(secondsSinceEpoch - 604800);
    }
    
    const pastMonthFunc = () => {
      handleDateChange(secondsSinceEpoch - 2628288);
    }

    const pastYearFunc = () => {
      handleDateChange(secondsSinceEpoch - 31536000);
    }

    const allTime = () => {
      handleDateChange(secondsSinceEpoch - 1160355600);
    }
    
    if(targetValue === 'last24') {
      return twentyFourHoursFunc() 
    } 
    else if (targetValue === 'pastWeek') {
      return pastWeekFunc() 
    } 
    else if (targetValue === "pastMonth") {
      return pastMonthFunc()
    }
    else if (targetValue === "pastYear") {
      return pastYearFunc()
    } 
    else if (targetValue === "all") {
      return allTime()
    }
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Filter for </label>
        <select ref={selectOptionsDate} onChange={handleFilteredData}>
          <option value="all">All time</option>
          <option value="last24">Last 24h</option>
          <option value="pastWeek">Past Week</option>
          <option value="pastMonth">Past Month</option>
          <option value="pastYear">Past Year</option>
        </select>
      </form>
    </div>
  );
}