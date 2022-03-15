import React from 'react';
import './CityListItem.scss';
import Viva from '../img/viva.jpeg';

function CityListItem(props) {
  return (
    <>
    <div className="city-item" style={{backgroundImage: `url(${Viva})`, backgroundWidth: '100%', backgroundPosition: 'cover', cursor: 'pointer'}}>
      
      <p className="city-name">{props.name ? props.name : 'Las Vegas'}</p>
      <p className ='star-rating'>{props.rating ? props.rating : '4.5'}/5</p>
    </div>
    <div className="city-item" style={{backgroundImage: `url(${Viva})`, backgroundWidth: '100%', backgroundPosition: 'cover', cursor: 'pointer'}}>
      
      <p className="city-name">{props.name ? props.name : 'Sin City'}</p>
      <p className ='star-rating'>{props.rating ? props.rating : '4.5'}/5</p>
    </div>
    <div className="city-item" style={{backgroundImage: `url(${Viva})`, backgroundWidth: '100%', backgroundPosition: 'cover', cursor: 'pointer'}}>
      
      <p className="city-name">{props.name ? props.name : 'Sin City'}</p>
      <p className ='star-rating'>{props.rating ? props.rating : '4.5'}/5</p>
    </div>
    <div className="city-item" style={{backgroundImage: `url(${Viva})`, backgroundWidth: '100%', backgroundPosition: 'cover', cursor: 'pointer'}}>
      
      <p className="city-name">{props.name ? props.name : 'Sin City'}</p>
      <p className ='star-rating'>{props.rating ? props.rating : '4.5'}/5</p>
    </div>
    </>
  )
}

export default CityListItem;