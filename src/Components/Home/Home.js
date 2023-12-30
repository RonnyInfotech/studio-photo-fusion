import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import GridComponent from '../GridComponent/GridComponent';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Home.css';

const Home = () => {
    const images = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    useEffect(() => {
        sessionStorage.setItem("show", true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="welcome-area">
                <div className="welcome-slides">
                    <Carousel
                        ssr
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        responsive={responsive}
                        customTransition={"1500ms"}
                    >
                        {images.map((ele, index) => {
                            return (
                                <div key={index} className="single-welcome-slide bg-img bg-overlay" style={{ backgroundImage: `url(${require("../../assets/img/bg-img/38.jpg")})` }}>
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            <div className="col-12 col-lg-8 col-xl-6">
                                                <div className="welcome-text">
                                                    <AnimationOnScroll animateIn="animate__bounceInUp" delay={100} animateOnce={true}>
                                                        <h2>Hello <br />I'm Alime</h2>
                                                    </AnimationOnScroll>
                                                    <AnimationOnScroll animateIn="animate__bounceInUp" delay={500} animateOnce={true}>
                                                        <p>I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                                                    </AnimationOnScroll>
                                                    <AnimationOnScroll animateIn="animate__bounceInUp" delay={900} animateOnce={true}>
                                                        <div className="hero-btn-group">
                                                            <a href="#" className="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a>
                                                            <a className="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                                                        </div>
                                                    </AnimationOnScroll>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </section>

            <GridComponent />
        </>
    )
}

export default Home;