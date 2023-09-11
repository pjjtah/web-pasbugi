import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="container">
      <h2>What?</h2>
      <div className='about'>
        <p>I create and play games.</p>
        <br></br>
        <p>Games are a means of self-expression, for both gamers and developers.</p>
        <p>My design principles are storytelling, inspiration and fun.</p>
        <br></br>


        <a href='https://github.com/pjjtah' target='_blank' rel="noreferrer">
          <img src={"github-mark-white.png"} alt="github link" className="some-link" />
        </a>
          <img src={"discord-mark-white.png"} alt="discord link" className="some-link" rel="noreferrer" /><p>pjjtah/pasbugi</p>


      </div>
    </div>
  );
};

export default About;