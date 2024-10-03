import React, { useState } from 'react';
import '../styles/DateFilter.css';

const DateFilter = ({ handleDateFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    if (startDate && endDate) {
      handleDateFilter(startDate, endDate);
    } else {
      alert("Please select both start and end dates.");
    }
  };


  return (
    <div className="date-filter-container">
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
        className="date-input"
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
        className="date-input"
      />
      <button className="filter-btn" onClick={handleFilter}>Filter by Date</button>

    </div>
  );
};

export default DateFilter;
