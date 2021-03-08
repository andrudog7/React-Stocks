import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically"} onChange={(event) => props.handleSort(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "Price"} onChange={(event) => props.handleSort(event)}/>
        Price
      </label>
      <label>
        <input type="radio" value="" checked={props.sort === ""} onChange={(event) => props.handleSort(event)}/>
        None
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.handleFilter(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
