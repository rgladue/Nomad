import React from 'react';
import './Navbar.scss';
import Beach from '../img/beach.mp4';

function Navbar(props) {
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
        <source src={Beach} type='video/mp4'/>
      </video>
          <h1 className='title'>Nomadic</h1>
      
    </div>
  )
}

export default Navbar;