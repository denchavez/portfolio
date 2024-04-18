import React, { useRef, useState } from 'react';
import { Avatar, Email } from '../images/index';
import { Project, Skill } from '../components/index';
import { ProjectData, SkillData } from '../data';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY
      })
    .then(() => {
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
      setSuccess(true);
    }).catch((error) => {
      setLoading(false);
      setSuccess(false);
      console.log(error);
    }) 
  }

  return (
    <>
      <section id='hero' className='hero'>
        <div className='hero-container container'>
          <div className='hero-desc'>
            <h1>
              I'm <span className='orange'>Dennys Chavez</span>
            </h1>
            <h2>
            I'm a <span>Frontend Software Developer</span> with a strong passion for building responsive and performant applications with great user experiences that positively impacts the world. 
            </h2>
            <div className='hero-btns'>
              <button className='project-btn'>
                <a href='#projects'>Projects</a>
              </button>
              <button className='contact-btn'>
                <a href='#contact'>Contact</a>
              </button>
            </div>
          </div>
          <div className='hero-img section-figure'>
            <img src={Avatar} alt='avatar' className='avatar-img' />
          </div>
        </div>
      </section>
      <section id='skills' className='skills'>
        <h1 className='section-title'>This is my <span className='orange'>technology stack</span></h1>
        <div className='skills-container container'>
          <div className='skills-list'>
            {SkillData && SkillData.length > 0 ? 
              SkillData.map((skillItem) => (
                <Skill
                  name={skillItem.name}
                  image={skillItem.image}
                />
              )) : null}
          </div>
        </div>
      </section>
      <section id='projects' className='projects'>
        <h1 className='section-title'>Here are some of my <span className='orange'>projects</span></h1>
        <div className='projects-container container'>
          <div className='projects-list'>
            {ProjectData && ProjectData.length > 0 ? 
              ProjectData.map((projectItem) => (
                <Project
                  title={projectItem.title}
                  subtitle={projectItem.subtitle}
                  para={projectItem.para}
                  link={projectItem.link}
                  image={projectItem.image}
                />
              )) : null
            }
          </div>
        </div>
      </section>
      <section id='contact' className='contact'>
        <h1 className='section-title'>Contact <span className='orange'>Me!</span></h1>
        <div className='contact-container container'>
          <div className='contact-figure section-figure'>
            <img src={Email} alt='email' className='contact-img' />
          </div>
          <div className='contact-form-container'>
            <form id='contact-form' ref={form} onSubmit={sendEmail}>
              <div className='form-item'>
                <label className='form-label'>Name</label>
                <input 
                  className='input' 
                  name='user_name'
                  type='text' 
                  placeholder='Name' 
                  onChange={e => setName(e.target.value)}
                  value={name}
                  required 
                />
              </div>
              <div className='form-item'>
                <label className='form-label'>Email</label>
                <input
                  className='input'
                  name='user_email'
                  type='email'
                  placeholder='Email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className='form-item'>
                <label className='form-label'>Message</label>
                <textarea
                  className='input'
                  name='message'
                  type='text'
                  placeholder='Message'
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                  required
                />
              </div>
              { success ? (
                <button className='form-submit form-success' name='user_send' type='submit'>
                  Success
                </button>
              ) : (
                <button className='form-submit' name='user_send' type='submit'>
                  { loading ? (
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin fa-spin-pulse' />
                  ) : (
                    <span>Send</span>
                  ) }
                </button>
              )}
            </form>          
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
