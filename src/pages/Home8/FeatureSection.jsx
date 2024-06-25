import React, { useState } from 'react';
import CounterWithProgress from '../../components/CountUp/CounterWithProgress';
import VideoPopUp from '../../components/Modal/VideoPopUp';
import ChecklistItem from '../../components/Features/ChecklistItem';
import { Link } from 'react-router-dom';
import morphineImage from '../../assets/images/feature/style2/h2-img.jpg';

const FeatureSection = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const counters = [
        {
            id: 1,
            percentage: 90,
            targetProgress: 90,
            title: 'Business Setup Growth'
        },
        {
            id: 2,
            percentage: 80,
            targetProgress: 80,
            title: 'Business Problem Solving'
        },
    ];

    const listItems1 = [
        "Commitment to Quality",
        "Competitive Pricing",
        "100% Satisfaction Guarantee"
    ];

    const listItems2 = [
        "Business savvy",
        "Experienced Peoples",
        "Intellect and Experience"
    ];

    return (
        <div className="rs-feature feature-style1 gray-bg2 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="morphine-wrap morphine-wrap3">
                            <img className="morphine" src={morphineImage} alt="Feature" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature-wrap">
                            <div className="sec-title">
                                <h2 className="title pb-27">
                                    We provide useful features for your business
                                </h2>
                                <p className="desc desc10 pb-30">
                                    Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Fringilla urna porttitor rhoncus dolor purus non enim. Nibh sed pulvinar proin gravida hendrerit lectus.
                                </p>
                                <div className="feature-list">
                                    <ul className="row check-lists check-list11">
                                        <div className="col-lg-6 md-mb-10">
                                            {listItems1.map((item, index) => (
                                                <li key={index}>
                                                    <ChecklistItem text={item} />
                                                </li>
                                            ))}
                                        </div>
                                        <div className="col-lg-6">
                                            {listItems2.map((item, index) => (
                                                <li key={index}>
                                                    <ChecklistItem text={item} />
                                                </li>
                                            ))}
                                        </div>
                                    </ul>
                                </div>

                                <div className="rs-counter counter-style1 counter-modify7 pt-40 pb-10">
                                    <CounterWithProgress
                                        counters={counters}
                                        bgBarColor={'#e9ebff'}
                                        bgBarProgressColor={'#634bf8'}
                                    />
                                </div>
                            </div>
                            <ul className="feature-btn mt-20">
                                <li>
                                    <a className="readon consultant get-started" href="about-us.html">Get Started</a>
                                </li>
                                <li>
                                    <div className="rs-videos mt--5">
                                        <div className="animate-border">
                                            <Link to='#' onClick={openVideoPopup} className="popup-border popup-videos">
                                                <i className="ri-play-fill"></i>
                                                <span className="btn-text">Watch Demo</span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/watch?v=FMvA5fyZ338" />
        </div>
    );
};

export default FeatureSection;
