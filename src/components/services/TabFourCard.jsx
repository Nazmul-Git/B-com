import React from 'react';
import { Link } from 'react-router-dom';

const TabFourCard = ({image,title,details}) => {
    return (
        <div className="col-xl-3 col-md-6 mb-30">
            <div className="services-item">
                <div className="services-wrap">
                    <div className="services-icon">
                        <img className="dance_hover" src={image} alt=""/>
                    </div>
                    <div className="services-content">
                        <h6 className="title"><Link to="/business-services">{title}</Link></h6>
                        <p className="services-txt">{details}</p>
                        <div className="services-button">
                            <Link to="/business-services">
                                <span className="btn-txt">Read More</span>
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabFourCard;