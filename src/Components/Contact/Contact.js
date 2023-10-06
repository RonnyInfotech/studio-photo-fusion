import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import FollowInstagram from '../FollowInstagram/FollowInstagram';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: `url(${require("../../assets/img/bg-img/38.jpg")})` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <h2 className="page-title">Contact</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to={ROUTES.HOME}>
                                                <i className="icon_house_alt"></i> Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Area Start  */}
            <div className="contact-area section-padding-80-50">
                <div className="container">
                    <div className="row">
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='col-12 col-lg-6'>
                            <h2 className="contact-title mb-30">Let’s Work <br />Together</h2>
                        </AnimationOnScroll>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Contact Info */}
                            <div className="contact-info mb-30">
                                <p>E-MAIL ADDRESS</p>
                                <a href="mailto:info.deercreative@gmail.com">info.deercreative@gmail.com</a>
                            </div>
                            Contact Info
                            <div className="contact-info mb-30">
                                <p>CALL US</p>
                                <a href="#">+6511.188.888</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Contact Info  */}
                            <div className="contact-info mb-30">
                                <p>OUR ADDRESS</p>
                                <a href="#">60-49 Road 11378 New York</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Area End */}

            {/* Map Area Start */}
            <div className="map-area section-padding-0-80">
                <div className="container">
                    <div id="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12309.440717226664!2d24.094896788114085!3d56.9484200464499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1550835159592"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            {/* Map Area End  */}
            {/* <FollowInstagram /> */}
        </div>
    )
}

export default Contact;