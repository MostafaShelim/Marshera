import React, { useState } from 'react';
import LowPrice from '../LowPrice/LowPrice';
import MiddlePrice from '../MiddlePrice/MiddlePrice';
import HighPrice from '../HighPrice/HighPrice';
import lowProduct from '../../ProductsData/LowerPrice';
import middleProduct from '../../ProductsData/MiddlePrice';
import highProduct from '../../ProductsData/HighPrice';
const Course = (props) => {
    const handleCart = props.handleCart;
    return (
        <div>
            <br/>
            <div className="bg-dark" id="course">
                <div className="heading text-center py-4">
                    <h3 className="display-4 text-info">Lower In Price</h3>
                    <p className="lead text-light">Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="card-deck">
                    {lowProduct.map(prd => <LowPrice handleCart = {handleCart} product={prd}></LowPrice>)}
                </div>
            </div>
            
            <br/>
            <div className="bg-dark" id="course">
                <div className="heading text-center py-4">
                    <h3 className="display-4 text-info">Middle In Price</h3>
                    <p className="lead text-light">Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="card-deck">
                    {middleProduct.map(prd => <MiddlePrice handleCart = {handleCart} product={prd}></MiddlePrice>)}
                </div>
            </div>
            <br/>
            <div className="bg-dark" id="course">
                <div className="heading text-center py-4">
                    <h3 className="display-4 text-info">Higher In Price</h3>
                    <p className="lead text-light">Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="card-deck">
                    {highProduct.map(prd => <HighPrice handleCart = {handleCart} product={prd}></HighPrice>)}
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Course;