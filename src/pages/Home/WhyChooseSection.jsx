import React from 'react';
import CountUp from 'react-countup';
import HowWorks from '../../components/HowWorks';
import layer1 from '../../assets/images/choose/style1/layer-1.png';
import howNew from '../../assets/images/choose/style1/how-new.jpg';
import pettarn2 from '../../assets/images/choose/style1/pettarn2.png';
import startLogo from '../../assets/images/choose/style1/star-logo.png';
import peoples from '../../assets/images/choose/style1/peoples.png';
import pieImage from '../../assets/images/choose/style1/pie-new.jpg';
import Counter from '../../components/CountUp/Counter';

const WhyChooseSection = ({ whyNew, pettarn, dot }) => {
    const howItWorksData = [
        {
            id: 1,
            title: 'Collect ideas',
            description: 'Podcasting operational change management inside of workflows to establish a framework.'
        },
        {
            id: 2,
            title: 'Data Analysis',
            description: 'Podcasting operational change management inside of workflows to establish a framework.',
            image: layer1
        },
        {
            id: 3,
            title: 'Finalize Product',
            description: 'Podcasting operational change management inside of workflows to establish a framework.',
            image: layer1
        }
    ];

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
        {
            id: 3,
            percentage: 95,
            title: 'Business Growth',
            image: pieImage
        }
    ];

    return (
        <div className="rs-choose choose-style2 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container">
                <HowWorks
                    howItWorksData={howItWorksData}
                    howNew={howNew}
                    pettarn={pettarn}
                    pettarn2={pettarn2}
                    dot={dot}
                    title={'How it works?'}
                    details={' Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.'}
                />

                <div className="rs-whychoous pt-130 md-pt-70">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-50">
                            <div className="sec-title mb-20">
                                <h2 className="title pb-10">
                                    Why choose us?
                                </h2>
                                <p className="desc desc8 pb-15">
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.
                                </p>
                                <h5 className="title title9">
                                    We have 35+ years of experience. We offer marketing and consulting services
                                </h5>
                            </div>
                            {/* Counter Start  */}
                            <div className="rs-counter counter-style1 counter-modify8 pt-20">
                                {/* Counter */}
                                <Counter counters={counters}/>
                                
                                <div className="counter-images-style pt-30">
                                    <div className="row">
                                        <div className="col-lg-6 md-mb-10">
                                            <div className="count-wrap">
                                                <div className="images-logo mb-15">
                                                    <img src={startLogo} alt="Images" />
                                                </div>
                                                <div className="images-logo mb-7">
                                                    <img src={peoples} alt="Images" />
                                                </div>
                                                <div className="content-part">
                                                    <p>More than 30,000 amazing feedbacks</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="count-wrap counter-bg1">
                                                <div className="rs-counter-list">
                                                    <div className="count-text">
                                                        <span className="title">{counters[2].title}</span>
                                                        <div className="count-number">
                                                            <CountUp className='rs-count' end={counters[2].percentage} duration={2} />
                                                            <span className="prefix">%</span>
                                                        </div>
                                                    </div>
                                                    <div className="images-logo">
                                                        <img src={counters[2].image} alt="Images" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images-wrap">
                                <img className="main-img" src={whyNew} alt="Images" />
                                <div className="pettarn-two">
                                    <img className="veritcal3" src={pettarn} alt="Images" />
                                </div>
                                <div className="dot-two">
                                    <img className="horizontal3" src={dot} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;