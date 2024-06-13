import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({ arrowImg, ctaBgVideo }) => {
    return (
        <div className="rs-cta cta-main-home pt-80 pb-80">
            <video className="rs-html5-video" autoPlay muted playsInline loop src={ctaBgVideo}></video>
            <div className="background-video-wrap">
                <div className="background-overlay"></div>
            </div>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-7 md-mb-30">
                        <div className="sec-title">
                            <h2 className="title white-color pb-23">
                                Start your business better<br />with Redox Consulting
                            </h2>
                            <p className="desc desc2">
                                Mauris sit amet massa vitae tortor condimentum. Ac orci phasellus egestas tellus<br />rutrum tellus pellentesque eu tincidunt data.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right md-left">
                        <div className="bnr-part">
                            <Link className="readon started phone-number phone-small" to="/contact-us-1">
                                <span className="btn-icon">
                                    <i className="ri-phone-line"></i>							
                                </span>
                                <span className="btn-text">(00) 123 456 789</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-arrow">
                <img src={arrowImg} alt="Images" />
            </div>
        </div>
    );
};

export default CTASection;
