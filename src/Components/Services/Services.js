import React from 'react';
import * as ROUTES from "../../constants/routes";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import './Services.css';
import FollowInstagram from '../FollowInstagram/FollowInstagram';

const Services = () => {
  const images = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
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
                <h2 className="page-title">Services</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to={ROUTES.HOME}>
                        <i className="icon_house_alt"></i> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services section-padding bg-grey" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title mb-30"> <span>What We Do</span>
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-30">
              <Carousel
                ssr
                // autoPlay
                // showDots
                // dotListClass="custom-dot-list-style"
                infinite
                responsive={responsive}
              >
                {images.map(ele => {
                  return (
                    <div className="item" style={{ padding: '15px' }}>
                      <div className="position-re o-hidden img-grayscale item-inner"> <img src={require('../../assets/img/services/1.jpg')} alt="" /> </div>
                      <div className="con"> <span className="category">
                        <a href="potrait-photography.html" style={{ color: '#f96f00' }}>Discover</a>
                      </span>
                        <h5><a href="potrait-photography.html" style={{ color: 'white' }}>Portrait Photography</a></h5> <a
                          href="potrait-photography.html"><i className="ti-arrow-right"></i></a>
                      </div>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right"> <a className="underline-text" href="services.html">All Services</a> </div>
          </div>
        </div>
      </section>

      <FollowInstagram />
    </div>
  )
}

export default Services;