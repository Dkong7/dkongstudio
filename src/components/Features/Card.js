import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2 className='titulosPro'>{props.title}</h2>
        <p>{props.desc}</p>
        <a href='/'>
        </a>
      </div>
    </>
  )
}

export default Card
