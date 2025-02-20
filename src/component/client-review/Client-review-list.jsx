import React from 'react'

const ClientReviewList = ({ icon, name, text}) => {
  return (
    <div className="review-list">
    <div className="review-stars">
        <img src={icon} alt='star' />
        <img src={icon} alt='star' />
        <img src={icon} alt='star' />
        <img src={icon} alt='star' />
        <img src={icon} alt='star' />
    </div>
    <div className="review-text">
        <h3>{name}</h3>
        <p>{text}</p>
    </div>
</div>
  )
}

export default ClientReviewList