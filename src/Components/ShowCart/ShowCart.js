import React from 'react';
import './ShowCart.css'
const ShowCart = (props) => {
    let totalPrice = props.cart.reduce((total, prd) => total + prd.price, 0);
    return (
            <div className="headCart bg-success text-dark sticky-top" id="course">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className=" p-3 d-flex align-items-center">Your Cart <i className="fa fa-cart-plus text-danger"></i></h3>
                    </div>
                    <div className="col-md-6 py-1">
                        <h3 className="display-5">Total Items: <span className="text-danger">{props.cart.length}</span></h3>
                        <h3 className="display-5">Total Amount: <span className="text-danger">${totalPrice}</span></h3>
                    </div>
                </div>
            </div>
    );
};

export default ShowCart;