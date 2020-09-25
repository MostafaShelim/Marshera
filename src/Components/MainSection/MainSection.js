import React, { useState } from 'react';
import Course from '../Course/Course'
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact'
import ShowCart from '../ShowCart/ShowCart'

const MainSection = () => {
    const [cart, setCart] = useState([]);
    const handleCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <ShowCart cart={cart}></ShowCart>
            <div className="container">
                <Course handleCart = {handleCart}></Course>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainSection;