import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {getCountries} from '../actions/index';





const Country =(props)=>{
    //console.log(props)
 
    useEffect(()=>{
        props.getCountries();
      
      },[]);

const country= props.countries.find(country => country.alpha3Code===props.match.params.code);
    

    
    return (
        <div>
          
            <h1>{country.name}</h1>
            <img src={country.flag}
            alt={country.name}
            style={{width:150}}/>
            <h3>Capital: {country.capital}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Timezones: {country.timezones}</h3>
            
        </div>
    )
        
};

const mapStateToProps=state=>{
    return {
        countries:state.countries
    }
}
export default  connect(mapStateToProps,{getCountries})(Country);