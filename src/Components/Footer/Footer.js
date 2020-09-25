import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark">
             <footer id="footer-section" className="text-center text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Marshera</h2>
                            <p>Copyright <span>&copy;</span> 2020</p>
                            <p>Designed by: <a href="http://www.fb.com/mostafarumi/"> Moti Mia</a></p>
                            <p>Email: <a href="www.mostafarmstu@gmail.com">www.mostafarmstu@gmail.com</a></p>
                            <button className="btn btn-primary">Salute Jhankar</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;