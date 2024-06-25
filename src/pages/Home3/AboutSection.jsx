import React from 'react';
import CountUp from 'react-countup';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AboutSection = ({ girlImg, boyImg, icon1, icon2, sign,serviceTitle,serviceText,serviceTitle2,serviceText2 }) => {
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
                            <SectionTitle
                                otherClass={'mb-40'}
                                title={'We are trusted consulting company, with 28+ years of experience.'}
                                titleClass={'title title11'}
                                otherTitleClass={'blue-subnormal'}
                                details={'We perform a full analysis of the client’s website and collect information about the competitors to formulate a proper strategy. There is no one real universal solution for online marketing strategy.'}
                            />
                            <div className="addon-services mb-25">
                                <div className="services-icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="services-content">
                                    <h6 className="title">{serviceTitle}</h6>
                                    <p className="services-txt">{serviceText}</p>
                                </div>
                            </div>
                            <div className="addon-services mb-40">
                                <div className="services-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="services-content">
                                    <h6 className="title">{serviceTitle2}</h6>
                                    <p className="services-txt">{serviceText2}</p>
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
