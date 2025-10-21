import React from 'react'
import './card.css';
import whatsappBtn from '../../assets/svgs/whatsapp.svg'

const sendOrderViaWhatsapp = (name, price, id) => {
    const phoneNumber = "+905439732281";
    const message =
        `Hi! I'm interested in ordering 
     name: ${name}
     price: ${price}$
     id: ${id}
    `;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}

const Card = ({ dressName, img, price, id }) => {
    return (
        <div className="card">
            <div className="card-img-cover">
                <img src={img} alt="dress-img" />
            </div>
            <div className="card-details">
                <h1>{dressName}</h1>
                <p>{price} $</p>
                <button onClick={() => sendOrderViaWhatsapp(dressName, price, id)}>
                    <img src={whatsappBtn} alt="whatsapp-btn" />
                    <span>Order</span>
                </button>
            </div>

        </div>
    )
}

export default Card