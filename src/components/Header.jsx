import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'><h1>Dennys Chavez</h1></div>
        <div className='header-links'>
          <ul className='links'>
            <li className='link'>
              <a href='/portfolio'>Home</a>
            </li>
            <li className='link'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='link'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='link'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
