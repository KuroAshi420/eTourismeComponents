import React from "react";
import "./searchContainer.css"
import Button from '@material-ui/core/Button';

const SearchContainer = () => {
  return (
    <div className="searchBox">
      <span className="searchBox-title"> Search </span>
      <input
          type="text"
          placeholder="Destination..."
          className="search-input"
          />
        <div className="searchBox-date">
         <span className="searchBox-text"> From </span>
         <input type="date" className="search-input"/>
        </div>
        <div className="searchBox-date" >
        <span className="searchBox-text"> To </span>
        <input type="date" className="search-input"/>
        </div>
        
    <select name="AdultsNumber" className="search-input">
    <option value="1">1 adult</option>
    <option value="2">2 adults</option>
    <option value="3">3 adults</option>
    <option value="4">4 adults</option>
    <option value="5">5 adults</option>
  </select>
        
  <select name="ChildrenNumber" className="search-input">
    <option value="0">no child</option>
    <option value="1">1 child</option>
    <option value="2">2 Children</option>
    <option value="3">3 Children</option>
    <option value="4">4 Children</option>
  </select>

  <select name="RoomsNumber" className="search-input">
    <option value="1">1 room</option>
    <option value="2">2 rooms</option>
    <option value="3">3 rooms</option>
    <option value="4">4 rooms</option>
    <option value="5">5 rooms</option>
  </select>
       
  <Button variant="contained" color="secondary">
        Search
        </Button>
    </div>
  );
};

export default SearchContainer;
