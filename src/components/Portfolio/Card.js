import React, { useState } from "react"
import ReactPlayer from "react-player/youtube"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.imagenCard} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>

        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
              <ReactPlayer url={props.link} className='video' />

            </div>
            <div className='modal-text right'>
              <span>{props.category}</span>
              <h1>{props.title}</h1>
              <p>{props.descripcion}</p>
              <p>{props.descripcion2}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
