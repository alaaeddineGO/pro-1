import React from 'react'
import './Card.css'
import myimg from './images/images.jpg'
function Card() {
  return (
    <div className='card'>
        <img src={myimg} alt='img' />
        <h3>Improve your front-end <br/>skills by building projects </h3>
        <p>sign the Qr code to vist front end mentor and take your coding skills to the next livel</p>
    </div>
  )
}

export default Card