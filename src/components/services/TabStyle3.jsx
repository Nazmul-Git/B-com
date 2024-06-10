import React from 'react';
import { Link } from 'react-router-dom';

const TabStyle3 = ({services}) => {
    return (
        <div className="row">
        {services.map((service, index) => (
            <div className="col-xl-4 col-md-6 mb-30" key={index}>
                <div className="services-item">
                    <div className="services-wrap">
                        <div className="images-media-wrap">
                            <div className="main-img">
                                <img src={service.mainImg} alt=""/>
                            </div>
                            <div className="overlay-normal">
                                <img src={service.overlayNormalImg} alt=""/>
                            </div>
                            <div className="overlay-hover">
                                <div className="icon-wrapper">
                                    <img src={service.overlayHoverImg} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="services-content">
                            <h6 className="title">
                                <Link to={service.link}>{service.title}</Link>
                            </h6>
                            <p className="services-txt">{service.description}</p>
                            <div className="services-button ser-btn5">
                                <Link to={service.link}>
                                    <span className="btn-txt">Read More</span>
                                    <i className="ri-arrow-right-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default TabStyle3;