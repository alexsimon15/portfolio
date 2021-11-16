import React from "react";

function About() {
  return (
    <section className='about' id='about'>
      <div className='max-width'>
        <h2 className='title'>About me</h2>
        <div className='about-content'>
          <div className='column left'>
            <img src={require(`../Images/about.jpg`).default} alt='' />
          </div>
          <div className='column right'>
            <div className='text'>
              I'm Alex and I'm a <span>web developer</span>
            </div>
            <p>
              Hard-working web developer with a flair for creating elegant
              solutions in the least amount of time. Developed an quiz app,
              movie app, portfolio website and more. Passionate about web
              development. Currently my best skills are in front-end development
              with ReactJS but I'm also learning back-end development on the
              side.
            </p>
            <a href='https://docs.google.com/document/d/1DRiirjWF2w1Y6RWFMhI2ScHpxwqPh-LPuTxeGpBLh6g/edit?usp=sharing'>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
