import React from "react";
import './styles.css';
import CountryList from "./components/CountryList";

import Country from "./components/Country";
import Search from "./components/Search"
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  
  
  // const [countries, setCountries]=useState([]);
  // const [search, setSearch] = useState("");
  // const handleClick = (e) => {
  //   setSearch(e.target.value);
  // };

  // useEffect(()=>{
  //   axios.get("https://restcountries.eu/rest/v2/all")
  //   .then(response=>{setCountries(response.data)})
  //   .catch((error)=>console.log(error))
  // },[])

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
      
            <Search/>
            <Route path="/" exact component={CountryList}/>
            <Route path="/country/:code" exact component={Country}/>
           
    </div>


    </Router>
  


    
  );
}

export default App;
