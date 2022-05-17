import React from 'react'
import './progress.css'
import ps from '../pic/skillps.png'
import ai from '../pic/skillai.png'
import ae from '../pic/skillae.png'
import au from '../pic/skillau.png'
import pr from '../pic/skillpr.png'
import blender from '../pic/skill1.png'
import javascri from '../pic/skill2.png'
import pro from '../pic/skillpro.png'
import live from '../pic/skilllive.png'
import unity from '../pic/skillunity.png'
import git from '../pic/skillgithub.png'
import nodejota from '../pic/skillnode.png'


const progress = () => {
  return (
   
  <div id="seccionSkills">
    <div className='heading text-center '>
      <h4 className="subtitulo">Skills</h4>
      <h1 classname="titulo">Software con el que trabajo</h1>
    </div>
    <div className="containerProgress" >
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Adobe Suite</p>
        <div className="contenedorLogitos">
          <img className="logito" src={ps} alt=""></img>
          <img className="logito" src={pr} alt=""></img>
          <img className="logito" src={ae} alt=""></img>
          <img className="logito" src={au} alt=""></img>
          <img className="logito" src={ai} alt=""></img>
        </div>      
      </div>
      <div className="progress">
        <div className="progress-bar1">
          <span className="numerito"> 85%</span>
        </div>
      </div>
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Pro Tools - Ableton Live</p>
        <div className="contenedorLogitos">
          <img className="logito" src={pro} alt=""></img>
          <img className="logito" src={live} alt=""></img>
        </div>      
      </div>      
      <div className="progress">
        <div className="progress-bar2">
          <span className="numerito"> 80%</span>
        </div>
      </div>
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Blender</p>
        <div className="contenedorLogitos">
          <img className="logito" src={blender} alt=""></img>
        </div>      
      </div> 
      <div className="progress">
        <div className="progress-bar3">
          <span  className="numerito"> 80%</span>
        </div>
      </div>
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Javascript</p>
        <div className="contenedorLogitos">
          <img className="logito" src={javascri} alt=""></img>
        </div>      
      </div>       
      <div className="progress">
        <div className="progress-bar4">
          <span className="numerito"> 70%</span>
        </div>
      </div>
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Git</p>
        <div className="contenedorLogitos">
          <img className="logito" src={git} alt=""></img>
        </div>      
      </div>       
      <div className="progress">
        <div className="progress-bar5">
          <span className="numerito"> 80%</span>
        </div>
      </div>
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Node Js</p>
        <div className="contenedorLogitos">
          <img className="logito" src={nodejota} alt=""></img>
        </div>      
      </div>       
      <div className="progress">
        <div className="progress-bar6">
          <span className="numerito"> 70%</span>
        </div>
      </div>
      <div className="contenedorNombresitoYLogos">
        <p className="nombresito">Unity</p>
        <div className="contenedorLogitos">
          <img className="logito" src={unity} alt=""></img>
        </div>      
      </div>       
      <div className="progress">
        <div className="progress-bar7">
          <span className="numerito"> 50%</span>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default progress
