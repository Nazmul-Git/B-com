import React from 'react';

const FeatureItem2 = ({ icon, title,description }) => {
    return (
        <div className="feature-item">
            <div className="feature-icon">
                <img src={icon} alt="" />
            </div>
            <div className="feature-content">
                <h5 className="title">{title}</h5>
                {
                    description && 
                    <p className="services-txt">{description}</p>
                }
            </div>
        </div>
    );
};

export default FeatureItem2;
