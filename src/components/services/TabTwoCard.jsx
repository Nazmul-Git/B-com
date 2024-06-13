import React from 'react';
import { Link } from 'react-router-dom';

const TabTwoCard = ({ service }) => {
    return (
        <div className="col-xl-4 col-md-6 mb-20">
            <div className="services-item">
                <div className="services-wrap">
                    <div className="services-icon">
                        <img src={service.image} alt="service" />
                    </div>
                    <div className="numbering">{service.id.toString().padStart(2, '0')}</div>
                    <div className="services-content">
                        <h6 className="title">
                            <Link to={service.link}>{service.title}</Link>
                        </h6>
                        <p className="services-txt">{service.description}</p>
                        <div className="services-button ser-btn4">
                            <Link to={service.link}>
                                <span className="btn-txt">Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabTwoCard;