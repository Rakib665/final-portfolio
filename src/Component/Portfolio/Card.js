import React, { useState } from "react"

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
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <ul>
            <ol>This project made by html,css.javascript,react,firebase,mongodb</ol>
          </ul>
        <div className='category d_flex'>
          
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
         
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <h1>{props.title}</h1>
              <ul>
              <li>This project made by html,css.javascript,react,firebase,mongodb</li>
              <li>This is basically moto parts website.</li>
              <li>Here has one home route dashboard</li>
              <li>Dashboard based on admin and user</li>
              <li>Admin can manage all products</li>
              <li>This website allows customers to order car parts for their businesses.</li>
              <li>They simply need to log in to the website and determine how much they require.</li>
              </ul>
              <div className='button f_flex mtop'>
                <a href={props.git} className='btn_shadow'>
                  GITHUB LINK <i class="fa-brands fa-github"></i>
                </a>
                <a href={props.liveSite} className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </a>
              </div>
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
