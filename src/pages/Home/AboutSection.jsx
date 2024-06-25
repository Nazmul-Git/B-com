import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopUp from '../../components/Modal/VideoPopUp';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AboutSection = ({ image1, image2 }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-about about-style3 pt-130 pb-200 md-pt-70 md-pb-48">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <SectionTitle
                            otherTitleClass={'md-pb-20'}
                            title={'One of the fastest ways to gain business success'}
                            borderStyle={true}
                            borderStyleClass={'border-item'}
                        />
                    </div>
                    <div className="col-lg-6 pl-40 md-pl-15">
                        <div className="sec-title">
                            <p className="desc desc8">
                                We perform a full analysis of the client’s website and collect information
                                about the competitors to formulate a proper strategy. There is no one universal
                                solution in online marketing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-company pt-50">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-img">
                                    <img src={image1} alt="Images" />
                                    <div className="rs-videos video-style1 main-video">
                                        <div className="video-item">
                                            <div className="overly-border">
                                                <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                                    <i className="ri-play-fill"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addon-services">
                                        <div className="services-content">
                                            <h4 className="title"><Link to="/about-us">About Company</Link></h4>
                                            <div className="desc-text">
                                                25 years of experience helping people to find the best solutions.
                                            </div>
                                            <div className="services-btn">
                                                <Link className="readon about-us" to="/about-us">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-img">
                                    <img src={image2} alt="Images" />
                                    <div className="rs-counter-list">
                                        <div className="count-text">
                                            <div className="count-number">
                                                <span className="rs-count">100</span>
                                                <span className="prefix">+</span>
                                            </div>
                                            <span className="title">Working Member</span>
                                        </div>
                                    </div>
                                    <div className="addon-services">
                                        <div className="services-content">
                                            <h4 className="title"><Link to="/about-us">Our Mission & Value</Link></h4>
                                            <div className="desc-text">
                                                25 years of experience helping people to find the best solutions.
                                            </div>
                                            <div className="services-btn">
                                                <Link className="readon about-us" to="/about-us">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/watch?v=FMvA5fyZ338" />
        </div>
    );
};

export default AboutSection;
