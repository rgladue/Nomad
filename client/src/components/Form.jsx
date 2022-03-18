import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.scss';

function Form (props) {
  console.log("pepper", props.data);
  const [value, setValue] = useState('');
  const submit = (input, obj) => {
   
      axios.put('http://localhost:8080/userinputs', obj)
      .then((data) => {
        console.log(data);
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