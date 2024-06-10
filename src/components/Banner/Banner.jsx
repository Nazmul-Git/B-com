import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({bannerClass,containerClass,circleImg,title,details,btnTitle}) => {
    return (
        <div className={`rs-banner ${bannerClass ? bannerClass : ''}`}>
            <div className="bnr-wrap-overlay"></div>
            <div className={`container ${containerClass ? containerClass : ''}`}>
                <div className="content-wrap">
                    <h1 className="title wow fadeInLeft">{title}</h1>
                    <div className="description wow fadeInLeft2">
                        <p>
                            {details}
                        </p>
                    </div>
                    <div className="bnr-btn wow fadeInUp">
                        <Link className="readon consultant get-green3 blue-quote1" to="/contact-us-1">{btnTitle}</Link>
                    </div>
                    <div className="animate-circle">
                        <img className="spiner" src={circleImg} alt="Images" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;