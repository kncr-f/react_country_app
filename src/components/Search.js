import React, {useState} from 'react';
import {connect} from "react-redux";
import {search} from "../actions/index";
//import {searchOnChange} from "../actions/index";

const Search=(props)=>{
  console.log("search",props)
  const [text,setText]=useState('');
    return (
    <form>
        <input
          name="search"
          placeholder="type a country"
          value={text}
          onChange={(e)=>{
            setText(e.target.value);
            props.search(text)
          
          }}
        />
       
      </form>
    ) 
}

const mapStateToProps=state=>{
  return{
    countries:state.countries,
    //seachText:state.seachText,
  
  }
}
export default connect(mapStateToProps,{search/*,searchOnChange*/})(Search);