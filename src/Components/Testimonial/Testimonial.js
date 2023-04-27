import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import FollowInstagram from '../FollowInstagram/FollowInstagram';
import Carousel from 'react-multi-carousel';
import './Testimonial.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Testimonial = () => {
    const images = [
        0, 1, 2
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <div>
            <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: `url(${require("../../assets/img/bg-img/38.jpg")})` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <h2 className="page-title">Testimonial</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to={ROUTES.HOME}>
                                                <i className="icon_house_alt"></i> Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials section-padding bg-img" data-scroll-index="4" data-overlay-dark="3" data-background="./../../assets/img/author-image/author-image-3.png">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='title mb-30'>
                                <span>What clients think</span>
                                <h2>Clients say</h2>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <Carousel
                        ssr
                        swipeable
                        draggable
                        autoPlay
                        infinite
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        responsive={responsive}
                    >
                        {images.map((ele, index) => {
                            return (
                                <div className="item-box" key={index}><span className="quote"><img src={require('../../assets/img/quot.png')} alt="" /></span>
                                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} >
                                        <p>"Dan tristique usto duision vitae diamen neque nivamus aesta atene artines arinianu ateli finibus viverra nec lacus. Nedana dinoz setlie suscipe none misster cuvvan tristique. Developer inila duman aten elit finibus viveracus themone the dru."</p>
                                    </AnimationOnScroll>
                                    <div className="info">
                                        {/* <div className="author-img"> */}
                                        <AnimationOnScroll animateIn="animate__zoomIn" delay={200} className='author-img' >
                                            <img src={require('../../assets/img/author-image/author-image-3.png')} alt="" />
                                        </AnimationOnScroll>
                                        {/* </div> */}
                                        {/* <div className="cont"> */}
                                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} className='cont' >
                                            <h6>Olivia & Enrico</h6> <span>Wedding Shooting</span>
                                        </AnimationOnScroll>

                                        {/* </div> */}
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </section >

            <FollowInstagram />
        </div >
    )
}

export default Testimonial