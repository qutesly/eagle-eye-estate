import React, { useState } from 'react'
import './client-review.styles.css';
import reviewData from './ReviewData';
import ClientReviewList from './Client-review-list';
import HeroBtn from '../hero/hero-bg/HeroBtn';

const ClientReview = () => {
    const [review, setReview] = useState(reviewData)
  return (
    <div className='client-review'>
        <h1>Client Reviews</h1>
        <div className="review-container">
            {review.map(({id, ...item}) => (
                <ClientReviewList key={id} {...item} />
            ))}
        </div>
        <div className='review-btn'>
        <HeroBtn text='More Views' className='blue-btn property-btn'/>
        </div>
    </div>
  )
}

export default ClientReview;