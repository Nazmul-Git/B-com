import React from 'react';
import { Link } from 'react-router-dom';

const BannerContent = ({ subTitle, title, description, buttonText, buttonLink }) => {
    return (
        <div className="content-wrap">
            <span className="wow fadeInDown sub-title">{subTitle}</span>
            <h1 className="title wow fadeInLeft">{title}</h1>
            <div className="description wow fadeInLeft2">
                <p>{description}</p>
            </div>
            <div className="bnr-btn wow fadeInUp">
                <Link className="readon consultant get-green3" to={buttonLink}>{buttonText}</Link>
            </div>
        </div>
    );
};

export default BannerContent;
