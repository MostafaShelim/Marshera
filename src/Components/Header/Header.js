import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'
const Header = () => {
    return (
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light mt-4 bg-light">
                            <img className="navbar-brand" src={logo} alt="" style={{width: '60px'}}/>
                            <span><strong className="navbar-brand">Marshera</strong></span>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#course">Course</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                                </ul>
                                <div className="d-flex flex-row">
                                    <div className="cart">
                                        <i className="fa fa-cart-plus"></i>
                                    </div>
                                    <input className="form-control" type="search" placeholder="Search Here"/>
                                    <button className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
    );
};

export default Header;