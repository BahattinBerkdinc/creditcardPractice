import React from 'react'
import "./card-back.scss"

const CardBack = ({cvcNumber}) => {
  return (
    <div className='card-back'>
      <div className="card-band"></div>
      <div className="card-grey-band">
        {cvcNumber}
      </div>
      <div className="card-text">
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor Lorem, ipsum.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default CardBack
