import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import 'remixicon/fonts/remixicon.css';

const AboutSection = ({img1,businessSuccess,rocket,title,desc}) => {
    return (
        <div className="rs-about about-style3 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-5 md-mb-50">
                        <div className="about-wrapper">
                            <div className="about-img">
                                <img src={img1} alt="Images" />
                                <div className="rocket-wrap">
                                    <img className="spiner" src={businessSuccess} alt="Images" />
                                    <div className="icon-part">
                                        <img src={rocket} alt="Images" />
                                    </div>
                                </div>
                                <div className="about-counter">
                                    <div className="count-number">
                                        <CountUp className='rs-count' end={25} duration={5} />
                                        <span className="prefix">+</span>  
                                    </div>
                                    <span className="title">Years Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-110 md-pl-15">
                        <div className="about-wrapper">
                            <div className="sec-title">
                                <h2 className="title title11">
                                    {title}
                                </h2>
                                <p className="desc desc8 pb-35">
                                    {desc}
                                </p>
                                <ul className="row check-lists check-main">
                                    <li className="col-lg-6 md-mb-10">
                                        <div className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-check-line"></i>                    
                                            </span>
                                            <span className="list-text">Track your daily activity.</span>
                                        </div>
                                        <div className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-check-line"></i>                    
                                            </span>
                                            <span className="list-text">Multiply global marketing.</span>
                                        </div>
                                        <div className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-check-line"></i>                
                                            </span>
                                            <span className="list-text">Virtual support team</span>
                                        </div>
                                    </li>
                                    <li className="col-lg-6">
                                        <div className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-check-line"></i>                
                                            </span>
                                            <span className="list-text">Pick up the tool</span>
                                        </div>
                                        <div className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-check-line"></i>                
                                            </span>
                                            <span className="list-text">Integrate it on your business</span>
                                        </div>
                                        <div className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-check-line"></i>                
                                            </span>
                                            <span className="list-text">Let's monitor the engagement</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="about-btn-inner mt-45">
                                    <li><Link className="readon consultant get-blue" to="about-us">Get Started</Link></li>
                                    <li>
                                        <Link className="readon started phone-number normal-blue" to="about-us">
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
        </div>
    );
};

export default AboutSection;
