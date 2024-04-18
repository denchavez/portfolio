import React from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
      <div className='footer-copyright'>
          <p>Copyright © 2024 Dennys Chavez</p>
        </div>
        <div className='footer-links'>
          <ul className='links'>
            <li className='link inactive'>
              <Link to={'https://github.com/denchavez'} target='_blank' rel='noopener noreferrer'>
                <AiFillGithub />
              </Link>
            </li>
            <li className='link inactive'>
              <Link to={'mailto:chvz.dennys@gmail.com'} target='_blank' rel='noopener noreferrer'>
                <AiOutlineMail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
