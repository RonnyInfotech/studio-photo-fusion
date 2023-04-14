import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const Header = () => {
    return (
        <header className="header-area">
            <div className="main-header-area">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav className="classy-navbar justify-content-between" id="alimeNav">
                            <Link to={ROUTES.HOME} className="nav-brand"><img className='logoHeader' src={require('../../assets/img/core-img/finalLogo.png')} alt="" /></Link>
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>
                            <div className="classy-menu">
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>
                                <div className="classynav">
                                    <ul id="nav">
                                        <li className="active"><Link to={ROUTES.HOME}>Home</Link></li>

                                        {/* <li><a href="#">Pages</a>
                                                <ul className="dropdown">
                                                    <li><a href="./index.html">- Home</a></li>
                                                    <li><a href="./about.html">- About</a></li>
                                                    <li><a href="./gallery.html">- Gallery</a></li>
                                                    <li><a href="./blog.html">- Blog</a></li>
                                                    <li><a href="./single-blog.html">- Blog Details</a></li>
                                                    <li><a href="./contact.html">- Contact</a></li>
                                                    <li><a href="#">- Dropdown</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">- Dropdown Item</a></li>
                                                            <li><a href="#">- Dropdown Item</a></li>
                                                            <li><a href="#">- Dropdown Item</a></li>
                                                            <li><a href="#">- Dropdown Item</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                        <li><Link to={ROUTES.ABOUT}>About</Link></li>
                                        <li><Link to={ROUTES.PORTFOLIO}>Portfolios</Link></li>
                                        <li><Link to={ROUTES.TESTIMONIAL}>Testimonial</Link></li>
                                        <li><Link to={ROUTES.SERVICES}>Services</Link></li>
                                        <li><Link to={ROUTES.PACKAGES}>Packages</Link></li>
                                        <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
                                    </ul>
                                    {/* <div className="search-icon" data-toggle="modal" data-target="#searchModal"><i className="ti-search"></i></div> */}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;