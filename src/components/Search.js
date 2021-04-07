import React from 'react';

const Search=(props)=>{
    return (
    <form>
        <input
          name="search"
          placeholder="type a country"
          value={props.search}
          onChange={props.onSearchClick}
        />
      </form>
    )
}

export default Search;