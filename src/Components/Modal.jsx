import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
// import data from "../data";

function Modal({ setShow, index }) {
  const handleClose = () => {
    setShow(false);
  };

  const name = ["Quiz App", "Movies App", "Portfolio"];
  const photos = ["quiz.JPG", "movies.JPG", "portfolio.JPG"];
  const skills = [
    ["HTML", "CSS", "JAVASCRIPT", "REACT", "API", "RESPONSIVE"],
    ["HTML", "CSS", "JAVASCRIPT", "REACT", "API", "RESPONSIVE"],
    ["HTML", "CSS", "JAVASCRIPT", "REACT", "RESPONSIVE"],
  ];
  const description = [
    "For this project I used HTML, CSS and React to build everything from scratch. First I built the code for taking the information from the API and then I started building the design and some basic functionalities. Eventually I also added extra functionalities like the leaderboard and the undo question. I also improved the design and made the app responsive",
    "This project was built using ReactJS. After getting the data from the OMDb API I also created the components and styled the whole project with CSS",
    "The idea behind this project was to create a showcase of all my most recent big projects. I tried to keep the UI as simple as possible. This is a Single Page Application and is built using ReactJS.",
  ];
  const demo = [
    "https://quiz-app22.netlify.app",
    "https://www.github.com/alexsimon15/movies-app",
    "https://alexsimon15.github.io/portfolio/",
  ];
  const code = [
    "github.com/alexsimon15/QuizApp",
    "github.com/alexsimon15/movies-app",
    "github.com/alexsimon15/portfolio",
  ];

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-left'>
          <img
            src={require(`../Images/${photos[index]}`).default}
            alt='quiz-image'
          />
        </div>
        <div className='modal-right'>
          <i className='modal-close' onClick={handleClose}>
            <MdOutlineClose />
          </i>
          <div className='modal-header'>
            <h3 className='modal-title'>{name[index]}</h3>
          </div>
          <div className='modal-skills'>
            <ul>
              {skills[index].map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>

          <div className='modal-body'>
            <h4>About</h4>
            <br />
            <p>{description[index]}</p>
          </div>
          <a href={`${demo[index]}`}>
            <button className='modal-button'>
              <i>
                <BsFillEyeFill />
              </i>
              DEMO
            </button>
          </a>

          <a href={`https://www.${code[index]}`}>
            <button className='modal-button'>
              <i>
                <RiCodeSSlashFill />
              </i>
              CODE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
