import React from 'react'

const PropCard = ({img, title, price}) => {
  return (
    <div className='property-container'>
        <img src={img} alt={title} />
        <div className="property-content">
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default PropCard