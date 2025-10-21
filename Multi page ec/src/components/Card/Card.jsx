import React from 'react'
import './card.css';
const Card = ({ dressName, img, price }) => {
    return (
        <div className="card">
            <div className="card-img-cover">
                <img src={img} alt="dress-img" />
            </div>
            <div className="card-details">
                <h1>{dressName}</h1>
                <p>{price} $</p>
            </div>

        </div>
    )
}

export default Card