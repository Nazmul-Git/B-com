import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const ProcessSection = () => {
    const counters = [
        { count: 850, suffix: '+', title: 'Projects Done' },
        { count: 15, suffix: '+', title: 'Happy Customers' },
        { count: 95, suffix: '%', title: 'Positive Feedback' },
    ];

    return (
        <div className="rs-process process-style3 bg3 pt-200 pb-200 md-pt-80 md-pb-80">
            <div className="process-bg-wrap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <span className="sub-text sub-text2">your path to success capitalize</span>
                            <h2 className="title pb-25 white-color">
                                Success defined in a<br />
                                different way
                            </h2>
                            <p className="desc desc11">
                                Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum.
                            </p>
                            <div className="btn-part mt-40">
                                <Link className="readon consultant discover learn-more" to="/contact-us-1">
                                    <span className="btn-text">Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* Counter Start */}
                        <div className="rs-counter counter-style1 counter-modify2">
                            {counters.map((counter, index) => (
                                <div key={index} className={`rs-counter-list count-box-${index + 1}`}>
                                    <div className="count-text">
                                        <div className="count-number">
                                            <CountUp className="rs-count" end={counter.count} duration={5}/>
                                            <span className="prefix">{counter.suffix}</span>
                                        </div>
                                        <span className="title">{counter.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Counter End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
