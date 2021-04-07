import React, { useEffect, useState } from "react";
import './styles.css';
import CountryList from "./components/CountryList";
import axios from "axios";
import Country from "./components/Country";
import Search from "./components/Search"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  
  const [countries, setCountries]=useState([]);
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    setSearch(e.target.value);
  };

  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response=>{setCountries(response.data)})
    .catch((error)=>console.log(error))
  },[])

  return (
    <Router>

    <div className="App">
      <h1>
        React Router{" "}
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      
     
            <Route path="/" exact render={()=>(
              
              <Search search={search} onSearchClick={handleClick}/>
            )}/>
  
            <Route path="/" exact render={()=>(
              
              <CountryList search={search} countries={countries}/>
            )}/>
            
            
            <Route path="/country/:code" render={()=>(
              <Country countries={countries}/>
            )} />
        
    
      
     
    </div>


    </Router>
  


    
  );
}

export default App;
