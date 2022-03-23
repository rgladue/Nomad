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
    if(!bool) {
    setBool(data)
    setCity(name)
    }
    if(bool) {
      setBool(false)
      setCity('')
    }
  }
  const [user, setUser] = useState('');
  const userLogin = () => {
    axios.get('http://localhost:8080/users')
    .then((res) => {
      setUser(res.data.slice(-1)[0]);
    })
  }

  const userLogout = () => {
    setUser('');
  }
  return (
    <div className="App">
      <Navbar login={userLogin} logout={userLogout} user={user}/>
      {bool && <CityInfo cities={cities} city={city} trigger={trigger} user={user} />}
      {/* <Currencies /> */}
      <CityList cities={cities} trigger={trigger} />
    </div>
  );
}

export default App;
