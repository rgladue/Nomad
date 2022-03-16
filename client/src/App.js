import './App.scss';
import React, { useEffect, useState } from 'react';
import CityInfo from './components/CityInfo';
import Currencies from './components/Currencies';
import CityList from './components/CityList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/cities')
    .then((response) => {
     
      setCities(response.data);
    })
    .catch((error) => {
      console.log('oh no!', error);
    })
  }, [])

  let popup = false;



  return (
    <div className="App">
      <Navbar />
      <CityInfo cities={cities} show={popup} />
      <Currencies />
      <CityList cities={cities} toggle={() => {return popup = true}} />
    </div>
  );
}

export default App;
