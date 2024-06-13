import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const AboutSection = ({ featureShape1, featureImg1, service1, service7 }) => {
    return (
        <div className="rs-feature feature-style1 bg1 pt-140 pb-180 md-pt-80 md-pb-72">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="feature-img">
                            <img src={featureImg1} alt="Images" />
                            <div className="feature-shape">
                                <img className="veritcal2" src={featureShape1} alt="Images" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-65 md-pl-15">
                        <div className="feature-wrap">
                            <div className="sec-title">
                                <span className="sub-text sub-text2 sub-text7">About Us</span>
                                <h2 className="title pb-27">
                                    Over 25+ Years Having Experience in Business Consulting Services
                                </h2>
                                <div className="heading-border-line left-style"></div>
                                <p className="desc pt-35 pb-30">
                                    Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Data malesuada bibendum arcu vitae rhoncus.
                                </p>
                                <div className="addon-services mb-30">
                                    <div className="services-icon">
                                        <img src={service1} alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h6 className="title">We deliver business solutions</h6>
                                        <p className="services-txt">Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus. Dummy text generator.</p>
                                    </div>
                                </div>
                                <div className="addon-services">
                                    <div className="services-icon">
                                        <img src={service7} alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h6 className="title">Return on investment (ROI)</h6>
                                        <p className="services-txt">Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus. Dummy text generator.</p>
                                    </div>
                                </div>
                                <div className="bnr-part mt-45">
                                    <Link className="readon started phone-number" to="/about-us">
                                        <span className="btn-icon">
                                            <i className="ri-phone-line"></i>
                                        </span>
                                        <span className="btn-text">(00) 123 456 789</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
