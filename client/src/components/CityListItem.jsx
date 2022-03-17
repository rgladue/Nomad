import React from 'react';
import './CityListItem.scss';



function CityListItem(props) {
  
  
  return (
    <div className="city-item" onClick={() => props.trigger(true, props.name)}>
      <img className="picz" src={props.img} alt=""/>
      <p className="city-name">{props.name}</p>
      <p className ='star-rating'>{props.safety_rating}/5</p>
     </div>
    
  )
}

export default CityListItem;