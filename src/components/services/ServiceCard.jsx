import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ number, icon, title, description, link }) => {
    return (
        <div className="services-item">
            <div className="services-wrap">
                <div className="numbering">{number}</div>
                <div className="services-icon">
                    <img src={icon} alt={title} />
                </div>
                <div className="services-content">
                    <h6 className="title">
                        <Link to={link}>{title}</Link>
                    </h6>
                    <p className="services-txt">{description}</p>
                    <div className="services-button ser-btn6">
                        <Link to={link}>
                            <span className="btn-txt">Read More</span>
                            <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

