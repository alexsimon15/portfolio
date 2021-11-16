import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import Modal from "./Modal";
// import data from "../data";

function SingleProject({ index }) {
  const [show, setShow] = useState(false);
  const name = ["Quiz App", "Movies App", "Portfolio"];
  const photos = ["quiz.JPG", "movies.JPG", "portfolio.JPG"];
  return (
    <>
      <div className='card'>
        <div className='box'>
          <img src={require(`../Images/${photos[index]}`).default} alt='' />
          <div className='text'>{name[index]}</div>
          <button className='btn' onClick={() => setShow(true)}>
            <i>
              <BsFillEyeFill />
            </i>
            <span>View Project</span>
          </button>
        </div>
      </div>
      {show && <Modal index={index} show={show} setShow={setShow} />}
    </>
  );
}

export default SingleProject;
