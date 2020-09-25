import React from 'react';
import './ShowCart.css'
const ShowCart = (props) => {
    let totalPrice = props.cart.reduce((total, prd) => total + prd.price, 0);
    return (
            <div className="headCart bg-success text-dark sticky-top">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className=" p-3 d-flex align-items-center">Your Cart <i className="fa fa-cart-plus text-danger"></i></h3>
                    </div>
                    <div className="col-md-6 p-2">
                        <h3 className="display-5">Total Items: {props.cart.length}</h3>
                        <h3 className="display-5">Total Amount: ${totalPrice}</h3>
                    </div>
                </div>
            </div>
    );
};

export default ShowCart;