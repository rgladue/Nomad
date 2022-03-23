import React from 'react';
import './Navbar.scss';
import Nomadic from '../img/nomadic.mp4';
import Logo from '../img/earth.png';
import { useState } from 'react';
import axios from 'axios';

function Navbar(props) {
  // const [user, setUser] = useState('');
  // const userLogin = () => {
  //   axios.get('http://localhost:8080/users')
  //   .then((res) => {
  //     setUser(res.data.slice(-1)[0]);
  //   })
  // }

  // const userLogout = () => {
  //   setUser('');
  // }
  return(
    <div className="navbar">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'sticky',
          width: '100%',
          height: '100%',
          zIndex: "-2",
          objectFit: 'cover'
        }}>
        <source src={Nomadic} type='video/mp4'/>
      </video>
          <img className='earth' src={Logo}/>
          <h1 className='title'>Nomadic</h1>
          {props.user && <p className='greeting'>Hello, {props.user.username}</p>}
          {props.user ? <div className="user-btn" onClick={props.logout}>Logout</div> : <div className="user-btn" onClick={props.login}>Login</div>}
          
      
    </div>
  )
}

export default Navbar;