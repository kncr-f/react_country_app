import React from "react";

import { Link} from "react-router-dom";

function CountryList(props) {


//console.log(countries);
//const country= countries.find(country => country.alpha3Code===props.match.params.code);
  
  return (
    <div>
    {props.countries.filter((country)=>country.name.toLowerCase().includes(props.search.toLowerCase()))
    .map((country)=>{
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

export default CountryList;
