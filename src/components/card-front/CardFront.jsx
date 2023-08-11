import React from 'react'
import "./card.scss"
const CardFront = () => {
  return (
    <div className='card'>
      <div className="card-filter">
      <div className="card-color blue"></div>
      <div className="card-color pink"></div>
      <div className="card-color yellow"></div>
      <div className="card-color red"></div>
      <div className="layout"></div>
      </div>
      <div className="card-content">
        <div className="card-content-top">
          <div className="big-circle"></div>
          <div className="middle-circle"></div>
          <div className="small-circle"></div>
        </div>
        <div className="card-content-bottom">
          <div className="card-number">0000 0000 0000 0000</div>
          <div className="info">
          <div className="name">John Doe</div>
          <div className="date">00/00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront
