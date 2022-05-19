import React, { useState } from "react"
import "./Contact.css"
import emailjs from 'emailjs-com';


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_icr47wk', 'template_f1vk6xd', e.target, '3xK6nA6_wg4byta3S')
      .then((result) => {
          alert('Formulario Enviado ');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACTO</h4>
            <h1>¿QUE IDEA TIENE?</h1>
          </div>

          <div className='content contacto'>
            <div className='left'>
              
            </div>

            <div className='right box_shodow'>
              <form onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>SU NOMBRE</span>
                    <input type='text' name='fullname'  onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>TELEFONO DE CONTACTO </span>
                    <input type='number' name='phone'  onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email'  onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>TEMA </span>
                  <input type='text' name='subject' onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SU MENSAJAE </span>
                  <textarea cols='30' rows='10' name='message'  onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  ENVIAR <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
