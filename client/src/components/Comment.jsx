import React from 'react';
import './Comment.scss';

function Comment(props) {
  return (
    <div className="comment-box">
      
      <h4>{props.username}:</h4>
      <p>"{props.comment}"</p>
      <h4>Nomad Rating: {props.rating}/5</h4>
      
    </div> 
  )
}

export default Comment;