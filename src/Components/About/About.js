import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import FollowInstagram from '../FollowInstagram/FollowInstagram';
import { PhotoFusionContext } from '../../contexts/PhotoFusionContext';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
  const { first } = useContext(PhotoFusionContext);
  const navigate = useNavigate();

  // const handleContactUs = () => {
  //   console.log("Demo..");
  //   navigate('/');
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      {/* Breadcrumb Area Start */}
      <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: `url(${require("../../assets/img/bg-img/38.jpg")})` }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2 className="page-title">About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to={ROUTES.HOME}>
                        <i className="icon_house_alt"></i> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* Breadcrumb Area End  */}

      {/* About Us Area Start  */}
      <div className="about-us-area section-padding-80-0 clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="about-us-content mb-80">
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                  <h3>We Live For Passion</h3>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} className='line'>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}>
                  <p className="wow">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={400}>
                  <p className="wow">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={500}>
                  <Link className='btn alime-btn btn-2 mt-30' to={"/contact"}>Contact Us</Link>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} className='about-video-area mb-80'>
                <img src={require('../../assets/img/bg-img/17.jpg')} alt="" />
                <div className="video-icon">
                  <a href="https://www.youtube.com/watch?v=sSakBz_eYzQ" className="video-play-btn"><i className="arrow_triangle-right"></i></a>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Area End  */}

      {/* Why Choose Us Area Start */}
      <section className="why-choose-us-area bg-gray section-padding-80-0 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='section-heading text-center'>
                <h2>Why Choose Us</h2>
              </AnimationOnScroll>
            </div>
          </div>

          <div className="row">
            {/* Single Why Choose Area  */}
            <div className="col-md-6 col-lg-4">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='why-choose-us-content text-center mb-80'>
                <div className="chosse-us-icon">
                  <i className="fa fa-film" aria-hidden="true"></i>
                </div>
                <h4>High Quality Images</h4>
                <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
              </AnimationOnScroll>
            </div>

            {/* Single Why Choose Area  */}
            <div className="col-md-6 col-lg-4">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} className='why-choose-us-content text-center mb-80'>
                <div className="chosse-us-icon">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </div>
                <h4>Abundant Experience</h4>
                <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
              </AnimationOnScroll>
            </div>

            {/* Single Why Choose Area  */}
            <div className="col-md-6 col-lg-4">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} className='why-choose-us-content text-center mb-80'>
                <div className="chosse-us-icon">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
                <h4>Modern Equipments</h4>
                <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose  us Area End  */}

      {/* Our Team Area Start  */}
      <section className="our-team-area section-padding-80-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='section-heading text-center'>
                <h2>Our Team</h2>
              </AnimationOnScroll>
            </div>
          </div>

          <div className="row">
            {/* Team Member Area  */}
            <div className="col-md-6 col-xl-3">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} className='team-content-area text-center mb-30'>
                <div className="member-thumb">
                  <img src={require('../../assets/img/bg-img/19.jpg')} alt="" />
                </div>
                <h5>Andrew Dean</h5>
                <span>Photographer</span>
                <div className="member-social-info">
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="ti-twitter-alt"></i></a>
                  <a href="#"><i className="ti-linkedin"></i></a>
                  <a href="#"><i className="ti-pinterest"></i></a>
                </div>
              </AnimationOnScroll>
            </div>

            {/* Team Member Area  */}
            <div className="col-md-6 col-xl-3">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} className='team-content-area text-center mb-30'>
                <div className="member-thumb">
                  <img src={require('../../assets/img/bg-img/20.jpg')} alt="" />
                </div>
                <h5>Tommy Kim</h5>
                <span>Photographer</span>
                <div className="member-social-info">
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="ti-twitter-alt"></i></a>
                  <a href="#"><i className="ti-linkedin"></i></a>
                  <a href="#"><i className="ti-pinterest"></i></a>
                </div>
              </AnimationOnScroll>
            </div>

            {/* Team Member Area  */}
            <div className="col-md-6 col-xl-3">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} className='team-content-area text-center mb-30'>
                <div className="member-thumb">
                  <img src={require('../../assets/img/bg-img/21.jpg')} alt="" />
                </div>
                <h5>Max McCormick</h5>
                <span>Photographer</span>
                <div className="member-social-info">
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="ti-twitter-alt"></i></a>
                  <a href="#"><i className="ti-linkedin"></i></a>
                  <a href="#"><i className="ti-pinterest"></i></a>
                </div>
              </AnimationOnScroll>
            </div>

            {/* Team Member Area  */}
            <div className="col-md-6 col-xl-3">
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} className='team-content-area text-center mb-30'>
                <div className="member-thumb">
                  <img src={require('../../assets/img/bg-img/22.jpg')} alt="" />
                </div>
                <h5>Robert Ward</h5>
                <span>Photographer</span>
                <div className="member-social-info">
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="ti-twitter-alt"></i></a>
                  <a href="#"><i className="ti-linkedin"></i></a>
                  <a href="#"><i className="ti-pinterest"></i></a>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Area End */}

      {/* Follow Area Start  */}
      {/* <FollowInstagram /> */}
      {/* Follow Area End */}
    </div >
  )
}

export default About;