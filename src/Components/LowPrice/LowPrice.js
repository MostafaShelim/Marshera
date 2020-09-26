import React from 'react';
import './LowPrice.css'

const LowPrice = (props) => {
    const {img, price, title, instructor} = props.product;
    return (
        <div className="card bg-danger">
            <img className="card-img img-fluid" src={img} alt=""/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Instructor: <strong>{instructor}</strong></p>
                <p>price: <strong className="text-warning">${price}</strong></p>
                <button onClick={() => props.handleCart(props.product)} className="btn btn-success" href=""><i className="fa fa-cart-plus mr-1"></i>Enroll Now</button>
            </div>
        </div>
    );
};

export default LowPrice;