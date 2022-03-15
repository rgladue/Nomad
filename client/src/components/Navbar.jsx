import React from 'react';
import './Navbar.scss';
import Nomadic from '../img/nomadic.mp4';
import Logo from '../img/earth.png';
import { useState } from 'react';

function Navbar(props) {
  const [user, setUser] = useState('');
  const userLogin = () => {
    setUser('TugEye');
  }

  const userLogout = () => {
    setUser('');
  }
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
          {user && <p className='greeting'>Hello, {user}</p>}
          {user ? <div className="user-btn" onClick={userLogout}>Logout</div> : <div className="user-btn" onClick={userLogin}>Login</div>}
          
      
    </div>
  )
}

export default Navbar;