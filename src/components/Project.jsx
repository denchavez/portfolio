import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ title, subtitle, para, link, image }) => {
  return (
    <div className='project'>
      <Link className='project-wrapper' to={link} target='_blank'>
        <img src={image} alt='ecommerce' className='project-img' />
        <div className='project-description'>
          <h3 className='project-title'>{title}</h3>
          <h2 className='project-subtitle'>{subtitle}</h2>
          <p className='project-para'>
            {para}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
