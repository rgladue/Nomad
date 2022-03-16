import './App.scss';
import React, { useEffect, useState } from 'react';
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

  return (
    <div className="App">
      <Navbar />
      <CityList cities={cities} />
    </div>
  );
}

export default App;
