import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.scss';

function Form (props) {
  console.log("pepper", props.data);
  const [value, setValue] = useState('');
  const [comment, setComment] = useState({});
  const submit = (input, obj) => {
    
    const newObj = {
      id: props.user.id,
      comment: input,
      username: props.user.username,
      city_id: props.data[0].city_id

    };
   
      axios.put('http://localhost:8080/userinputs', newObj)
      .then((res) => {
        setComment(res.data[0]);
      })
    
  }
  return (
    <div>
      <form className="comment-form" onSubmit={(event) => {event.preventDefault()}}>
        <input 
        value={value}
        onChange={(event) => setValue(event.target.value)}
        />
      </form>
      <button className="comment-submit" onClick={() => submit(value, props.data)}>Post</button>
    </div>
  )
}

export default Form;