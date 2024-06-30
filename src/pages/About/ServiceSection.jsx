import React, { useState } from 'react';
import FeatureCounter from '../../components/Counter/FeatureCounter';
import { Link } from 'react-router-dom';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const counters = [
    { number: 3, prefix: 'M+', title: 'Business Using Stripe', icon: 'line-chart-fill' },
    { number: 10, prefix: '+', title: 'Business consultant', icon: 'user-fill' },
    { number: 30, prefix: 'K+', title: 'Satisfied Customers', icon: 'smile-fill' },
];

const AboutSection = ({videoUrl}) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-about about-style1 about-modify2 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container custom8">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <h2 className="title title11">
                                We provide consulting business and financial services worldwide.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-50 md-pl-15">
                        <div className="sec-title mb-20">
                            <p className="desc desc8">
                                We perform a full analysis of the client’s website and collect proper information about the competitors, to formulate a proper strategy universal solution in online marketing.
                            </p>
                        </div>
                        <div className="rs-counter counter-style1 counter-modify11">
                            <div className="row">
                                {counters.map((counter, index) => (
                                    <FeatureCounter
                                        key={index}
                                        number={counter.number}
                                        prefix={counter.prefix}
                                        title={counter.title}
                                        icon={counter.icon}
                                        mainClass={'col-lg-4'}  
                                        otherClass={'md-mb-20'}
                                        listClass={'rs'}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rs-videos video-style2 about-video1">
                    <div className="video-item">
                        <div className="animate-border2">
                            <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                <i className="ri-play-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl={videoUrl} />
        </div>
    );
};

export default AboutSection;
