import React from 'react';
import CountUp from 'react-countup';
import FeatureItem2 from '../../components/Features/FeatureItem2'; 
import FeatureCounter from '../../components/Counter/FeatureCounter'; 
import icon1 from '../../assets/images/feature/style3/icons/icon-1.png';
import icon2 from '../../assets/images/feature/style3/icons/icon-2.png';
import icon3 from '../../assets/images/feature/style3/icons/icon-3.png';
import icon4 from '../../assets/images/feature/style3/icons/icon-4.png';
import featureImage from '../../assets/images/feature/style3/image.png';
import shapeImage from '../../assets/images/feature/style3/shape.png';
import { Link } from 'react-router-dom';

const featureItems = [
    { icon: icon1, title: "Flexible benefits" },
    { icon: icon3, title: "100% Secure" },
    { icon: icon2, title: "24/7 Dedicated support" },
    { icon: icon4, title: "Affordable Price Plan" }
];

const featureCounters = [
    { number: "10", prefix: "k+", title: "Happy Clients" },
    { number: "200", prefix: "+", title: "Team Members" },
    { number: "100", prefix: "+", title: "Countries" }
];

const FeatureSection2 = () => {
    return (
        <div id="rs-feature" className="rs-feature feature-style4 bg39 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="sec-title mb-40">
                            <h2 className="title pb-27">
                                Our company provides benefits for your success
                            </h2>
                            <p className="desc desc9 pb-30">
                                Malesuada bibendum arcu vitae elementum, Semper eget duis at tellus at urna condimentum aliquam generated content for you malesuada.
                            </p>
                            {/* Counter Start */}
                            <div className="rs-counter counter-style1 counter-modify10">
                                <div className="row">
                                    {featureCounters.map((counter, index) => (
                                        <div key={index} className="col-lg-4 md-pb-20">
                                            <div className="rs-counter-list">
                                                <div className="count-text">
                                                    <div className="count-number">
                                                        <CountUp className="rs-count" end={counter.number} duration={5}/>
                                                        <span className="prefix">{counter.prefix}</span>
                                                    </div>
                                                    <span className="title">{counter.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Counter End */}
                            <div className="line-border"></div>
                            <div className="row">
                                {featureItems.map((item, index) => (
                                    <div key={index} className="col-lg-6">
                                        <div className="feature-wrap mb-35">
                                            <FeatureItem2 icon={item.icon} title={item.title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="feature-btn mt-45">
                                <Link className="readon consultant get-started blue-small" to="/contact-us-1">Get Started Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="useful-wrap">
                            <div className="morphine-wrap">
                                <img className="morphine" src={featureImage} alt="Images" />
                            </div>
                            <div className="feature-shape one">
                                <img src={shapeImage} alt="Images" />
                            </div>
                            <FeatureCounter number="3" prefix="M+" title="Business Strategy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection2;
