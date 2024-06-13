import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const AboutSection = ({about1,about2}) => {
    return (
        <div className="rs-about about-style1 about-modify1 pt-125 pb-130 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="about-img">
                            <img src={about1} alt="About" />
                            <div className="about-shape">
                                <img className="veritcal2" src={about2} alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <span className="sub-text sub-text2 sub-text8">Our Services</span>
                            <h2 className="title pb-24">
                                Right Protection to Keep Moving Forward
                            </h2>
                            <div className="heading-border-line pre-heading-line1 left-style"></div>
                            <p className="desc pt-40">
                                Auctor neque vitae tempus quam pellentesque nec nam aliquam. Lectus nulla at volutpat diam ut. Eu volutpat odio facilisis mauris sit amet. Enim lobortis sceler fermentum dui faucibus in ornare. Non odio euismod lacinia at quis.
                            </p>
                            <ul className="row check-lists check-list5 mt-30">
                                <li className="col-lg-6 md-mb-20">
                                    <div className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-check-circle-line" aria-hidden="true"></i>
                                        </span>
                                        <span className="list-text">We Can Save You Money</span>
                                    </div>
                                    <div className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-check-circle-line" aria-hidden="true"></i>
                                        </span>
                                        <span className="list-text">Our Insurance is Flexible</span>
                                    </div>
                                </li>
                                <li className="col-lg-6">
                                    <div className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-check-circle-line" aria-hidden="true"></i>
                                        </span>
                                        <span className="list-text">Fast and easy to application</span>
                                    </div>
                                    <div className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-check-circle-line" aria-hidden="true"></i>
                                        </span>
                                        <span className="list-text">No brokers, no upselling</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="feature-btn mt-35">
                                <li>
                                    <Link className="readon consultant get-green get-green2" to="about-us">
                                        <span className="btn-text">Get a Quote</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="readon consultant phone-number green-light" to="about-us">
                                        <span className="btn-icon">
                                            <i className="ri-phone-fill"></i>
                                        </span>
                                        <span className="btn-text">(00) 123 456 789</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
