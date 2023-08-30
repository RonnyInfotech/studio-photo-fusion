import React from 'react';
import './Loader.css';
import { ProgressSpinner } from 'primereact';
// import { ProgressSpinner } from 'primereact';


const Loader = () => {
    return (
        <div className="preloader">
            <div className="mainpreloader">
                <img className="logo-preloader" alt="preloaderlogo" src={require("../../assets/img/core-img/favicon1.png")} />
                <span>loading</span>
            </div>
        </div>
    )
}

export default Loader;