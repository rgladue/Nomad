import './App.scss';
import React, { useEffect, useState } from 'react';
import CityInfo from './components/CityInfo';
import Currencies from './components/Currencies';
import CityList from './components/CityList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [bool, setBool] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8080/cities')
    .then((response) => {
     
      setCities(response.data);
    })
    .catch((error) => {
      console.log('oh no!', error);
    })
  }, [])
 
  const trigger = (data, name) => {
    console.log(data, name)
    setBool(data)
    setCity(name)
  }
  return (
    <div className="App">
      <Navbar />
      {bool && <CityInfo cities={cities} city={city}/>}
      <Currencies />
      <CityList cities={cities} trigger={trigger}/>
    </div>
  );
}

export default App;
