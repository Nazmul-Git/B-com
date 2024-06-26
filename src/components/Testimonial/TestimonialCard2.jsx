import React from 'react';

const TestimonialCard2 = ({ image, name, title, description, logo, logo2 }) => {
    return (
        <div className="testi-item">
            <div className="item-content">
                <span>
                    <img className="normal-img" src={logo} alt="Logo" />
                    {
                        logo2 &&
                        <img className="center-logo" src={logo2} alt="Logo" />
                    }
                </span>
                <p className="desc">{description}</p>
            </div>
            <div className="testi-content">
                <div className="image-wrap">
                    <img src={image} alt="Images" />
                </div>
                <div className="testi-information">
                    <div className="testi-name">{name}</div>
                    <span className="testi-title">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard2;