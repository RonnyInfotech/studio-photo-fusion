import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const FollowInstagram = () => {
    const images = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            // paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            // paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // paritialVisibilityGutter: 30
        }
    };
    return (
        <section className="follow-area clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <h2>Follow Instagram</h2>
                            <p>@studio_photo_fusion</p>
                        </div>
                    </div>
                </div>
            </div>

            <Carousel
                ssr
                swipeable
                draggable
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                autoPlay
                infinite
                responsive={responsive}
            >
                {images.map((ele, index) => {
                    return (
                        <div className="single-instagram-item" key={index}>
                            <img src={require('../../assets/img/bg-img/11.jpg')} alt="" />
                            <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                                <Link to={"/"}>
                                    <i className="ti-instagram" aria-hidden="true"></i>
                                    <span>Alime_photographer</span>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default FollowInstagram;