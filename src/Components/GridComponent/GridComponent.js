import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const GridComponent = () => {
    const [data, setData] = useState([]);
    const images = [
        {
            lable: "human",
            image: "https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTE4MDA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        },
        {
            lable: "human",
            image: "https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTE4MDA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        }, {
            lable: "human",
            image: "https://images.unsplash.com/photo-1504883303951-581cbf120aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIyOTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "nature",
            image: "https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTE4MDA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "nature",
            image: "https://images.unsplash.com/photo-1504883303951-581cbf120aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIyOTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "nature",
            image: "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzMDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "country",
            image: "https://images.unsplash.com/photo-1578783951217-ca527085dc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzMjI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "country",
            image: "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzMzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "country",
            image: "https://images.unsplash.com/photo-1496588668219-5f0a1a3e230a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzMzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "video",
            image: "https://images.unsplash.com/photo-1478039414627-50a2aee2e122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzNDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        }, {
            lable: "video",
            image: "https://images.unsplash.com/photo-1561503972-839d0c56de17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzNTQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        },
    ];

    const handleFilter = (labelName) => {
        console.log("labelName..", labelName);
        if (labelName === 'all') {
            setData(images);
        } else {
            setData(images.filter(({ lable }) => lable === labelName));
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setData(images);
    }, []);

    console.log("data..", data);


    return (
        <div className="alime-portfolio-area section-padding-80 clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Projects Menu --> */}
                        <div className="alime-projects-menu">
                            <div className="portfolio-menu text-center">
                                <button className="btn active" data-filter="*" onClick={() => handleFilter("all")}>All</button>
                                <button className="btn" data-filter=".human" onClick={() => handleFilter("human")}>Human</button>
                                <button className="btn" data-filter=".nature" onClick={() => handleFilter("nature")}>Nature</button>
                                <button className="btn" data-filter=".country" onClick={() => handleFilter("country")}>Country</button>
                                <button className="btn" data-filter=".video" onClick={() => handleFilter("video")}>Video</button>
                            </div>
                        </div>
                    </div>
                </div>

                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1050: 4, 1250: 5 }}>
                    <Masonry gutter="20px">
                        {data.map((ele, i) => (
                            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                                <div key={i} className="single-portfolio-content">
                                    <img src={ele?.image} alt="" />
                                    <div className="hover-content">
                                        <a href={ele.image} className="portfolio-img">+</a>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

                <div className="row">
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={700} className='col-12 text-center'>
                        <Link to={'/studio-photo-fusion'} className='btn alime-btn btn-2 mt-15'>View More</Link>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
}

export default GridComponent;