import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import featureImg1 from '../../assets/images/feature/style4/img-1.png';
import shapeImg1 from '../../assets/images/feature/style4/shape1.png';

const FeatureSection = () => {
    return (
        <div className="rs-feature feature-style1 feature-modify1 pt-140 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-35">
                        <div className="feature-wrap">
                            <div className="sec-title">
                                <span className="sub-text">What it does</span>
                                <h2 className="title pb-27">
                                    We provide useful<br/>features
                                </h2>
                                <p className="desc">
                                    Males uada bibe ndum arcu vitae elementum. eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc ringilla urna porttitor rhoncus ut tellus elementum.
                                </p>
                                <ul className="check-lists check-list2 mt-22">
                                    <li className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-checkbox-circle-line"></i>
                                        </span>
                                        <span className="list-text">Track your daily activity.</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-checkbox-circle-line"></i>
                                        </span>
                                        <span className="list-text">Multiply global marketing strategy</span>
                                    </li>
                                    <li className="list-item">
                                        <span className="icon-list-icon">
                                            <i className="ri-checkbox-circle-line"></i>
                                        </span>
                                        <span className="list-text">Virtual support team</span>
                                    </li>
                                </ul>
                                <ul className="feature-btn mt-32">
                                    <li>
                                        <Link className="readon consultant get-orange small-normal" to="/about-us">Get Free Consultant</Link>
                                    </li>
                                    <li>
                                        <Link className="readon consultant phone-number orange-phn" to="/about-us">
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
                    <div className="col-lg-6">
                        <div className="images-wrap">
                            <img src={featureImg1} alt="Images"/>
                                <div className="feature-counter count-box1 veritcal3">
                                    <div className="feature-counter-list">
                                        <div className="count-text">
                                            <div className="count-number">
                                                <CountUp className="rs-count" end={3} duration={5}/>
                                                <span className="prefix">M</span>
                                                <span className="prefix">+</span>
                                            </div>
                                            <span className="title">Business Using Stripe</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-shape one">
                                    <img className="wow fadeInUp" src={shapeImg1} alt="Images"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
