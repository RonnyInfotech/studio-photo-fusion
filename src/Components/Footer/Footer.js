import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-content d-flex align-items-center justify-content-between">
                            <div className="copywrite-text">
                                <p>
                                    Copyright &copy;
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script> All rights reserved | Photo Fusion <i className="fa fa-heart-o" aria-hidden="true"></i> Develop by <b> Bhautik Ladva</b>
                                </p>
                            </div>
                            <div className="footer-logo">
                                <Link><img className='logoHeader' src={require('../../assets/img/core-img/finalLogoBlack.png')} alt="" /></Link>
                            </div>
                            <div className="social-info">
                                <Link><i className="ti-facebook" aria-hidden="true"></i></Link>
                                <Link><i className="ti-instagram" aria-hidden="true"></i></Link>
                                <Link><i className="ti-youtube" aria-hidden="true"></i></Link>
                                <Link><i className="ti-pinterest" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;