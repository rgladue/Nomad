import React from 'react';
import './CityInfo.scss';
import Close from '../img/close.png';

function CityInfo(props) {
  let targetCity = '';
    for(let city of props.cities) {
      if (city.name === props.city) {
        targetCity = city;
      }
    }

  

  return (
   <>
    <div className="city-modal">
      <div className="info-window">
        <img className="info-pic" src={targetCity.img_link} />
        <img className="close" src={Close}/>
        <h1 className="info-title">{targetCity.name}, {targetCity.country}</h1>
        <p className="info-score">Nomad Score: 3.5/5</p>
        <h2>{targetCity.name}</h2>
        <div className="info-container">
          <div className="info-left">
            <p><b>Population:</b> {targetCity.population}</p>
            <p><b>Country:</b> {targetCity.country}</p>
            <p><b>Spoken Language(s):</b> {targetCity.language}</p>
          </div>
          <div className="info-right">
            <p><b>Average Temperature: </b> {targetCity.avg_temp} &#8451;</p>
            <p><b>Cost of Living:</b> {targetCity.cost_of_living}</p>
            <p><b>Internet Speeds: </b>{targetCity.internet_speed}</p>
          </div>
        </div>
    
        <h4>Comments</h4>
      </div>
    </div> 
    </>
  )
}

export default CityInfo;