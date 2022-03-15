import React from 'react';
import './CityListItem.scss';

function CityListItem(props) {
  console.log('sup', props);
  return (
    
    <div className="city-item" style={{backgroundImage: `url(${props.img})`, backgroundWidth: '100%', backgroundPosition: 'cover', cursor: 'pointer'}}>
      
      <p className="city-name">{props.name}</p>
      <p className ='star-rating'>{props.safety_rating}/5</p>
    </div>
    
  )
}

export default CityListItem;