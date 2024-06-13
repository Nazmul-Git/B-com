import React from 'react';
import 'remixicon/fonts/remixicon.css';

const FeatureSection = ({featureIcon1,featureIcon2,featureIcon3,featureImg1,featureImg2}) => {
    return (
        <div className="rs-feature feature-style2 feature-modify4 gray-bg7 pt-125 pb-130 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title mb-50">
                            <span className="sub-text sub-text2 sub-text8">Our Services</span>
                            <h2 className="title pb-24">
                                Simpler, smarter, more rewarding cover
                            </h2>
                            <div className="heading-border-line pre-heading-line1 left-style"></div>
                            <p className="desc pt-40">
                                Auctor neque vitae tempus quam pellentesque nec nam aliquam. Lectus nulla at volutpat diam ut. Eu volutpat odio facilisis mauris sit amet. Enim lobortis sceler fermentum dui faucibus in ornare. Non odio euismod lacinia at quis.
                            </p>
                        </div>
                        <div className="feature-item mb-30">
                            <div className="feature-icon">
                                <img src={featureIcon1} alt="Images" />
                            </div>
                            <div className="feature-content">
                                <h6 className="title">First Online based Life Insurance Company</h6>
                                <p className="desc">Auctor neque vitae tempus quam pellentesque nec nam aliquam.<br />
                                    Lectus nulla at volutpat diam euismod lacinia.</p>
                            </div>
                        </div>
                        <div className="feature-item mb-30">
                            <div className="feature-icon">
                                <img src={featureIcon2} alt="Images" />
                            </div>
                            <div className="feature-content">
                                <h6 className="title">Flexible Benefits</h6>
                                <p className="desc">Auctor neque vitae tempus quam pellentesque nec nam aliquam.<br />
                                    Lectus nulla at volutpat diam euismod lacinia.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src={featureIcon3} alt="Images" />
                            </div>
                            <div className="feature-content">
                                <h6 className="title">Plan For Disaster</h6>
                                <p className="desc">Auctor neque vitae tempus quam pellentesque nec nam aliquam.<br />
                                    Lectus nulla at volutpat diam euismod lacinia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-images">
                            <img src={featureImg1} alt="About" />
                            <div className="feature-shape">
                                <img className="veritcal" src={featureImg2} alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
