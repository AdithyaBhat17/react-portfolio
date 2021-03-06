import React from 'react';
import './App.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-xs-12 foot">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AdithyaBhat17"><i className="fab fa-github animated pulse infinite"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/adithya-nr/"><i className="fab fa-linkedin animated pulse infinite"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://behance.net/adithyabhat"><i className="fab fa-behance animated pulse infinite"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/adithya-nr"><i className="fab fa-medium animated pulse infinite"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/adithyabhat__/"><i className="fab fa-instagram animated pulse infinite"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Adithyabhat9"><i className="fab fa-twitter animated pulse infinite"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/AdithyaNR"><i className="fab fa-dribbble animated pulse infinite"></i></a>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <p className="vectors">Vectors designed by <a target="_blank" rel="noopener noreferrer" className="foot2" href="https://freepik.com">Freepik</a></p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <p className="license">© 2018,Apache License 2.0</p>
                    </div>
                </div>
            </div>        
        </div>
    )    
}

export default Footer;
