import React, { useRef } from "react";
import { MdEmail, MdPermContactCalendar } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_98sk63e",
        form.current,
        "user_LWJiciOYA03p7ktmjFDTW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <section className='contact' id='contact'>
      <div className='max-width'>
        <h2 className='title'>Contact me</h2>
        <div className='contact-content'>
          <div className='column left'>
            <div className='text'>Get in Touch</div>
            <p>
              If you have a job offer or want to talk just send me a message !
            </p>
            <div className='icons'>
              <div className='row'>
                <i>
                  <MdPermContactCalendar />
                </i>
                <div className='info'>
                  <div className='head'>Name</div>
                  <div className='sub-title'>Alex Simon</div>
                </div>
              </div>
              <div className='row'>
                <i>
                  <FaMapMarkerAlt />
                </i>
                <div className='info'>
                  <div className='head'>Address</div>
                  <div className='sub-title'>Bucharest, Romania</div>
                </div>
              </div>
              <div className='row'>
                <i>
                  <MdEmail />
                </i>
                <div className='info'>
                  <div className='head'>Email</div>
                  <div className='sub-title'>alex_simon_15@yahoo.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className='column right'>
            <div className='text'>Message me</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='fields'>
                <div className='field name'>
                  <input type='text' placeholder='Name' name='name' required />
                </div>
                <div className='field email'>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    required
                  />
                </div>
              </div>
              <div className='field'>
                <input
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  required
                />
              </div>
              <div className='field textarea'>
                <textarea
                  cols='30'
                  rows='10'
                  placeholder='Message..'
                  name='message'
                  required
                ></textarea>
              </div>
              <div className='button-area'>
                <button type='submit' value='Send'>
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
