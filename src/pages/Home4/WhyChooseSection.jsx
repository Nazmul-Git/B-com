import React from 'react';
import { Link } from 'react-router-dom';
import CounterWithProgress from '../../components/CountUp/CounterWithProgress';
import FeatureContent from '../../components/Features/FeatureContent';

const WhyChooseSection = ({ aboutMainImage }) => {
    const counters = [
        {
            id: 1,
            percentage: 80,
            targetProgress: 80,
            title: 'Business Setup Growth'
        },
        {
            id: 2,
            percentage: 90,
            targetProgress: 90,
            title: 'Business Problem Solving'
        },
    ];

    return (
        <div className="rs-choose choose-style1 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                        <div className="sec-title">
                            <span className="sub-text sub-text2 sub-text7">Why Choose Us</span>
                            <h2 className="title pb-27">
                                We Are Award-Winning Consulting Company
                            </h2>
                            <div className="heading-border-line left-style"></div>
                            <p className="desc desc6 pt-35 pb-20">
                                Placerat vestibulum lectus mauris ultrices eros in. At urna condimentum mattis pellentesque id nibh commodo scelerisque.
                            </p>
                            <FeatureContent />
                            <div className="rs-counter counter-style1 pt-30">
                                <div className="row">
                                    <CounterWithProgress counters={counters} />
                                </div>
                            </div>
                            <div className="btn-part mt-28">
                                <Link className="readon started get-blue1" to="/contact-us-1">
                                    <span className="btn-text">Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-images">
                            <img src={aboutMainImage} alt="Why Choose Us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
