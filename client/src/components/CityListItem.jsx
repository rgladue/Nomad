import React from 'react';
import './CityListItem.scss';
import CityInfo from './CityInfo';


function CityListItem(props) {
  console.log(props.toggle);
 const execute = props.toggle;

  return (
    <div className="city-item" onClick={execute}>
      <img className="picz" src={props.img} alt=""/>
      <p className="city-name">{props.name}</p>
      <p className ='star-rating'>{props.safety_rating}/5</p>
    </div>
    
  )
}

export default CityListItem;