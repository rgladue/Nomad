import React, { useEffect, useState } from 'react';
import './CityList.scss';
import axios from 'axios';
import CityListItem from '../components/CityListItem';

function CityList(props) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('localhost:8080/cities')
    .then((response) => {
      console.log(response);
    })
  })
  return(
    <section className='city-list'>
    <h1 className="question">Where In The World Do You Want To Live Today?</h1> 
    <div>Search/Filter by Region: <a href="#">Asia</a>, <a href="#">North America</a>, <a href="#">South America</a>, <a href="#">Europe</a>, <a href="#">Africa/Middle East</a>, <a href="#">Australia/Zealandia</a></div>
    <CityListItem />
    </section>
  )
}

export default CityList;