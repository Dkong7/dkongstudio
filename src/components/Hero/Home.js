import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
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
              un
              <span>
                <Typewriter words={[" Profesional Audiovisual.", " Developer.", "Artista"]} loop cursor cursorStyle='⧩' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Utilizo mis habilidades en informatica y mi vision como artista  para crear o simplificar experiencias, Cada nuevo reto es un aprendizaje bla bla bla. No estoy agregando movimiento solo para arreglar las cosas, sino que lo hago de esa manera</p>

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
                <h4>MIS MEJORES PODERES SON</h4>
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
