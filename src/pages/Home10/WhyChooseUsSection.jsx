import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CounterWithProgress from '../../components/CountUp/CounterWithProgress';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const WhyChooseUsSection = ({ videoUrl, number, subtext, titleBreak1, titleBreak2, details }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);
    const counters = [
        {
            id: 1,
            percentage: 90,
            title: 'Business Setup Growth',
            targetProgress: 95
        },
        {
            id: 2,
            percentage: 80,
            title: 'Business Problem Solving',
            targetProgress: 75
        }
        // Add more counters as needed
    ];

    return (
        <div className="rs-skillbar skillbar-style1 skillbar-modify3">
            <div className="row no-gutters">
                <div className="col-lg-6 videos-item"></div>
                <div className="col-lg-6">
                    <div className="path-success">
                        <div className="sec-title">
                            <span className="sub-text sub-text2">{subtext}</span>
                            <h2 className="title pb-27">
                                {titleBreak1}<br />
                                {titleBreak2}
                            </h2>
                            <p className="desc desc8">
                                {details}
                            </p>
                            <div className="feature-border pt-70"></div>
                            <div className="rs-counter counter-style1 counter-modify1">
                                <CounterWithProgress
                                    counters={counters}
                                    bgBarProgressColor={'#0092f2'}
                                    bgBarColor={'#DCD7FA'}
                                    barPercentageText={false}
                                />
                            </div>
                            <ul className="feature-btn mt-20">
                                <li>
                                    <Link className="readon consultant discover learn-more" to="/contact-us-1">
                                        <span className="btn-text">Get Started</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="readon consultant phone-number purple-light" to="/contact-us-1">
                                        <span className="btn-icon">
                                            <i className="ri-phone-fill"></i>
                                        </span>
                                        <span className="btn-text">{number}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="rs-videos video-style1 purple-video1">
                            <div className="video-item">
                                <div className="overly-border">
                                    <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl={videoUrl} />
        </div>
    );
};

export default WhyChooseUsSection;
