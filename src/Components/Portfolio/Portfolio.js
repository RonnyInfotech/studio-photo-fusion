import React, { useEffect } from 'react';
import * as ROUTES from "../../constants/routes";
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Portfolio = () => {

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
                                <h2 className="page-title">Portfolio</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to={ROUTES.HOME}>
                                                <i className="icon_house_alt"></i> Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Area Start */}
            <div className="alime-portfolio-area section-padding-80 clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* Projects Menu  */}
                            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='alime-projects-menu'>
                                <div className="portfolio-menu text-center">
                                    <button className="btn active" data-filter="*">All</button>
                                    <button className="btn" data-filter=".human">Baby Shoot</button>
                                    <button className="btn" data-filter=".nature">Family</button>
                                    <button className="btn" data-filter=".country">Wedding</button>
                                    <button className="btn" data-filter=".video">Engagement</button>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="row alime-portfolio">
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='col-12 col-sm-6 col-lg-4 single_gallery_item nature mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/39.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/39.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} className='col-12 col-sm-6 col-lg-4 single_gallery_item video human mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/40.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/40.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} className='col-12 col-sm-6 col-lg-4 single_gallery_item country mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/41.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/41.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={700} className='col-12 col-sm-6 col-lg-4 single_gallery_item human'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/42.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/42.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='col-12 col-sm-6 col-lg-4 single_gallery_item nature mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/43.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/43.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} className='col-12 col-sm-6 col-lg-4 single_gallery_item video country mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/44.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/44.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} className='col-12 col-sm-6 col-lg-4 single_gallery_item human mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/45.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/45.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={700} className='col-12 col-sm-6 col-lg-4 single_gallery_item nature mb-30'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/46.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/46.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='col-12 col-sm-6 col-lg-4 single_gallery_item video country'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/47.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/47.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} className='col-12 col-sm-6 col-lg-4 single_gallery_item human'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/48.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/48.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} className='col-12 col-sm-6 col-lg-4 single_gallery_item country'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/49.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/49.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                        {/* Single Gallery Item  */}
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={700} className='col-12 col-sm-6 col-lg-4 single_gallery_item country'>
                            <div className="single-portfolio-content">
                                <a href={require("../../assets/img/bg-img/50.jpg")} className="portfolio-img img-grayscale">
                                    <img src={require("../../assets/img/bg-img/50.jpg")} alt="" />
                                </a>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="row">
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={800} className='col-12 text-center'>
                            <a href="#" className="btn alime-btn btn-2 mt-15">View More</a>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
            {/* Gallery Area End */}

            {/* <FollowInstagram /> */}
        </div>
    )
}

export default Portfolio;