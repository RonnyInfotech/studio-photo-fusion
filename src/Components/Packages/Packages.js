import React from 'react';
import './Packages.css';
import * as ROUTES from "../../constants/routes";
import { Link } from 'react-router-dom';

const Packages = () => {
    return (
        <div>
            <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: `url(${require("../../assets/img/bg-img/38.jpg")})` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <h2 className="page-title">Packages</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to={ROUTES.HOME}>
                                                <i className="icon_house_alt"></i> Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Packages</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="section-padding" data-scroll-index="6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title mb-30"> <span>Shooting</span>
                                <h2>Packages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="price-box">
                                <div className="price-box-inner img-grayscale" style={{ backgroundImage: `url(${require("../../assets/img/price/1.jpg")})` }}>
                                    <ul>
                                        <li className="pricing-title">
                                            <h3 className="pricing-pt-title">Standart</h3>
                                        </li>
                                        <li className="pricing-prices"> <sup className="pricing-dolar">$</sup> <span className="pricing-price"
                                            style={{ color: '#FFFFFF' }}>300</span> </li>
                                        <li className="pricing-content">
                                            <ul>
                                                <li>3 Hours Session</li>
                                                <li>Photo Editing</li>
                                                <li>50 Digital Images</li>
                                                <li>Online Gallery</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-box">
                                <div className="price-box-inner" style={{ backgroundImage: `url(${require("../../assets/img/price/2.jpg")})` }}>
                                    <ul>
                                        <li className="pricing-title">
                                            <h3 className="pricing-pt-title">Premium</h3>
                                        </li>
                                        <li className="pricing-prices"> <sup className="pricing-dolar">$</sup> <span className="pricing-price"
                                            style={{ color: '#FFFFFF' }}>450</span> </li>
                                        <li className="pricing-content">
                                            <ul>
                                                <li>6 Hours Session</li>
                                                <li>Photo Editing</li>
                                                <li>100 Digital Images</li>
                                                <li>Online Gallery</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="price-box">
                                <div className="price-box-inner" style={{ backgroundImage: `url(${require("../../assets/img/price/3.jpg")})` }}>
                                    <ul>
                                        <li className="pricing-title">
                                            <h3 className="pricing-pt-title">Platinum</h3>
                                        </li>
                                        <li className="pricing-prices"> <sup className="pricing-dolar">$</sup> <span className="pricing-price"
                                            style={{ color: '#FFFFFF' }}>750</span> </li>
                                        <li className="pricing-content">
                                            <ul>
                                                <li>12 Hours Session</li>
                                                <li>Photo Editing</li>
                                                <li>250 Digital Images</li>
                                                <li>Online Gallery</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Packages;