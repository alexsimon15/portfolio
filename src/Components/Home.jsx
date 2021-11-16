import React from "react";

function Home() {
  return (
    <section className='home' id='home'>
      <div className='max-width'>
        <div className='home-content'>
          <div className='text-1'>Hello, my name is</div>
          <div className='text-2'>Alex Simon</div>
          <div className='text-3'>
            And I'm a <span>web developer</span>
          </div>
          <a href='#contact'>Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
