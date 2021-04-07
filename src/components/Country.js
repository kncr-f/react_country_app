import React from 'react';
import { withRouter } from "react-router";

//import CountryInfo from './CountryInfo';


const Country =(props)=>{

    //const country= props.countries.find(country => country.alpha3Code===props.match.params.code);
    //const history=useHistory();
    //const params=useParams();
    
// useEffect(()=>{

    const country= props.countries.find(country=>country.alpha3Code===props.match.params.code);
    console.log(country);

// },[])    

    
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

export default  withRouter (Country);