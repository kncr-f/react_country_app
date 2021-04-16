import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getCountries} from "../actions/index";
import { Link} from "react-router-dom";


function CountryList(props) {
  

useEffect(()=>{
  props.getCountries();

},[]);

//console.log(countries);
//const country= countries.find(country => country.alpha3Code===props.match.params.code);
   
  return (
    <div>
    { props.isLoading ?
      <img 
        style={{width:50, height:50}} 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" 
        alt="...Yükleniyor"
      /> :
      props.countries.map((country)=>{
              return (
              <div key={country.name} className="country">
                  <Link to={`/country/${country.alpha3Code}`}><h2>{country.name}</h2></Link>
                  <h4>{country.capital}</h4>
                  <p><img style={{width:'100px'}} src={country.flag} alt={country.name}/></p>
              </div>

              );
          })}
</div>
  );
}

const mapStateToProps=state=>{
  return {
    countries:state.countries,
    isLoading:state.isLoading,
    
  }
}
export default connect(mapStateToProps,{getCountries})(CountryList);
