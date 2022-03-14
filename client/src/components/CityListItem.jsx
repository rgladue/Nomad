import React from 'react';

function CityListItem(props) {
  return (
    <div className="city-item">
      <p className="city-name">{props.name ? props.name : 'Silly City'}</p>
      <p className ='star-rating'>{props.rating ? props.rating : '22'}</p>
    </div>
  )
}

export default CityListItem;