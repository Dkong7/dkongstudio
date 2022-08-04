import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import Typed from "typed.js"
import {useEffect, useRef} from 'react'

const Home = () => {

  //crear elemento ref
  const el = useRef(null);

  useEffect(() =>{
    const typed = new Typed(el.current, {
      strings: ["  Artista Audiovisual", "Ingeniero de sonido", "Game Developer"],
      startDelay: 20,
      typeSpeed: 50,
      backDelay: 50,
      backSpeed: 150, 
      smartBackspace: true,
      showCursor: false,
      loop: true,
    })
  })

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>BIENVENIDOS</h3>
            <h1>
              Hola, Soy <span>Diego Diaz</span>
            </h1>
            <h2>
              un #
              <span ref={el}>
              </span>
            </h2>

            <p>Utilizo mis habilidades en informática y mi visión como artista para crear o simplificar experiencias que lleven claramente el mensaje que deseo transmitir. </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>ENCUENTRENME EN </h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4> BEST SKILLS </h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
