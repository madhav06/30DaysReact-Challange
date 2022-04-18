import React from 'react';
import Navbar from './Navbar';

function Header(){
  return (
    <div id='main'>
     <Navbar />
     <div className='name'>
         <h1><span>Hire Dedicated Developers</span></h1>
         <p className='details'>React, React Native, Angular and NodeJS</p>
         <a href='#' className='cv-btn'>GET QUOTE</a>
     </div>
    </div>
  );
}

export default Header;