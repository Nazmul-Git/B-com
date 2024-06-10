import React from 'react';
import CountUp from 'react-countup';

const AboutSection = ({girlImg,boyImg,icon1,icon2,sign}) => {
    return (
        <div className="rs-about about-style4 pt-140 pb-260 md-pt-75 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-5 md-mb-50">
                        <div className="wrapper-content">
                            <div className="about-img">
                                <img src={girlImg} alt="Images" />
                                <div className="shape-wrap wow fadeInUp">
                                    <img src={boyImg} alt="Images" />
                                </div>
                                <div className="about-counter wow fadeInLeft">
                                    <div className="count-number">
                                        <CountUp className="rs-count" end={3} duration={6} />
                                        <span className="prefix">M+</span>
                                    </div>
                                    <span className="title">Business Using Stripe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-110 md-pl-15">
                        <div className="wrapper-content">
                            <div className="sec-title mb-40">
                                <h2 className="title title11 blue-subnormal">
                                    We are trusted consulting company, with 28+ years of experience.
                                </h2>
                                <p className="desc desc8">
                                    We perform a full analysis of the client’s website and collect information about the competitors to formulate a proper strategy. There is no one real universal solution for online marketing strategy.
                                </p>
                            </div>
                            <div className="addon-services mb-25">
                                <div className="services-icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="services-content">
                                    <h6 className="title">Extra Benefit Through Lnvest</h6>
                                    <p className="services-txt">A arcu cursus vitae congue mauris rhoncus quis.</p>
                                </div>
                            </div>
                            <div className="addon-services mb-40">
                                <div className="services-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="services-content">
                                    <h6 className="title">Extra Benefit Through Lnvest</h6>
                                    <p className="services-txt">A arcu cursus vitae congue mauris rhoncus quis.</p>
                                </div>
                            </div>
                            <div className="sign-img">
                                <img src={sign} alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
