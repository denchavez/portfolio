import React from 'react';

const Skill = ({ name, image }) => {
  return (
    <div className='skill'>
      <figure className='skill-wrapper'>
        <img src={image} alt={name} className='skill-icon' />
      </figure>
      <span className='skill-name'>{name}</span>
    </div>
  );
};

export default Skill;
