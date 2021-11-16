import React from "react";

function Services() {
  return (
    <section className='services' id='services'>
      <div className='max-width'>
        <h2 className='title'>My services</h2>
        <div className='serv-content'>
          <div className='card'>
            <div className='box'>
              <div className='text'>Front-end development</div>
              <p>
                I am able to create beautiful websites and applications using
                HTML , CSS and ReactJS.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='text'>Adaptability</div>
              <p>
                I am a hard working person willing to learn whatever new
                technologies are being used in the project.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <div className='text'>Desire to learn</div>
              <p>
                I am willing to expand my knowledge about programming and gain
                more experience every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
