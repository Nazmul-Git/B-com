import React from 'react';
import { Link } from 'react-router-dom';

const CTATwoSection = ({arrow}) => {
    return (
        <div className="rs-cta cta-main-home cta-style7 pt-45 pb-45">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-7 md-mb-30">
                        <div className="sec-title md-text-center">
                            <h3 className="title title13">
                                Let's Start Something <span className="primary-color">Great!</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="rs-contact-box">
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="ri-phone-line"></i>
                                </div>
                                <div className="address-text">
                                    <div className="text">
                                        <span className="label">Call Us 24/7</span>
                                        <Link to="tel:+00123456789">(00) 123 456 789</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-wrap">
                    <img src={arrow} alt="Images" />
                </div>
            </div>
        </div>
    );
};

export default CTATwoSection;
