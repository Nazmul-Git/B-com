import React from 'react';
import { Link } from 'react-router-dom';

const Banner8 = ({
    title,
    description,
    buttonText,
    buttonLink,
    phoneNumber,
    phoneLink,
    mainImage,
    dotImage,
    emergencyLabel
}) => {

    return (
        <div className="rs-banner banner-style1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 rs-banner-box1">
                        <div className="content-wrap">
                            <h1 className="title wow fadeInDown">{title}<span>Launching.</span></h1>
                            <div className="description wow fadeInLeft">
                                <p>{description}</p>
                            </div>
                            <ul className="bnr-btn list-unstyled">
                                <li className="mb-3">
                                    <Link className="readon consultant wow fadeInUp btn btn-primary" to={buttonLink}>{buttonText}</Link>
                                </li>
                                <li>
                                    <div className="content-part d-flex align-items-center wow fadeInUp">
                                        <Link className="readon consultant phone-number yellow-icon1 btn btn-secondary" to={phoneLink}>
                                            <span className="btn-icon">
                                                <i className="ri-phone-fill"></i>
                                            </span>
                                        </Link>
                                        <div className="text-part ml-3">
                                            <span className="label">{emergencyLabel}</span>
                                            <Link to='#' className="phone-nmb d-block">{phoneNumber}</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 rs-banner-box2">
                        <div className="widget-images">
                            <img src={mainImage} alt="Banner" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-animate position-absolute">
                <img className="veritcal2" src={dotImage} alt="Dot" />
            </div>
        </div>
    );
};

export default Banner8;