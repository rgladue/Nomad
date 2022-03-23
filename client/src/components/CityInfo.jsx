import React, { useEffect, useState } from 'react';
import './CityInfo.scss';
import Close from '../img/close.png';
import Form from './Form';
import Comment from './Comment';
import axios from 'axios';

function CityInfo(props) {
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState([]);
  let targetCity = {};
    for(let city of props.cities) {
      if (city.name === props.city) {
        targetCity = city;
      }
    }
    useEffect(() => {
      axios.get('http://localhost:8080/userinputs')
      .then((response) => {
        console.log(response.data)
        let cityComments = [];
        for (let obj of response.data) {
          if(obj.city_id === targetCity.id) {
            cityComments.push(obj)
          }
        }
        setComments(cityComments)
      })
    }, [])

    const CommentItem = comments.map((obj) => {
      return <Comment
      key={obj.id}
      comment={obj.comment}
      username={obj.username}
      rating={obj.rating}
      />
    })

    const data = comments;
    
   

  
  

  return (
   <>
    <div className="city-modal">
      <div className="info-window">
        <img className="info-pic" src={targetCity.img_link} />
        <img className="close" src={Close} onClick={() => {props.trigger(false, targetCity.name)}}/>
        <h1 className="info-title">{targetCity.name}, {targetCity.country}</h1>
        <p className="info-score">Nomad Score: 3.5/5</p>
        <h2>{targetCity.name}</h2>
        <div className="below-picture">
          <div className="info-container">
            <div className="info-left">
              <p><b>Population:</b> {targetCity.population}</p>
              <p><b>Country:</b> {targetCity.country}</p>
              <p><b>Spoken Language(s):</b> {targetCity.language}</p>
              <p><b>Safety Rating: </b>{targetCity.safety_rating}/5</p>
            </div>
            <div className="info-right">
              <p><b>Average Temperature: </b> {targetCity.avg_temp} &#8451;</p>
              <p><b>Cost of Living:</b> {targetCity.cost_of_living}</p>
              <p><b>Internet Speeds: </b>{targetCity.internet_speed}</p>
              <p><b></b></p>
            </div>
          </div>
          <h4>Comments</h4>
          
          <ul>{CommentItem}</ul>

          <Form data={data} user={props.user} />
        </div>



    
      </div>
    </div> 
    </>
  )
}

export default CityInfo;