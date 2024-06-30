import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import CountUp from 'react-countup';
import aboutImg from '../..//assets/images/about/style6/img-1.jpg';
import businessSuccessImg from '../..//assets/images/about/style6/business-success.png';
import rocketImg from '../..//assets/images/about/style6/rocket.png';

const tabsData = [
    {
        key: 'tab1',
        title: 'Company Benefits',
        content: (
            <>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.</p>
                <ul className="check-arrow">
                    <li>Interactively monetize customer</li>
                    <li>Enthusiastically underwhelm distinctive</li>
                    <li>Energistically fabrica intuitive infomediaries</li>
                    <li>Continually expedite standards compliant</li>
                </ul>
                <div className="rs-btn mt-37">
                    <Link to="/contact-us-1" className="readon consultant appointment get-light">Get Started</Link>
                </div>
            </>
        )
    },
    {
        key: 'tab2',
        title: 'Mission & Vision',
        content: (
            <>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.</p>
                <ul className="check-arrow">
                    <li>Interactively monetize customer</li>
                    <li>Enthusiastically underwhelm distinctive</li>
                    <li>Energistically fabrica intuitive infomediaries</li>
                    <li>Continually expedite standards compliant</li>
                </ul>
                <div className="rs-btn mt-37">
                    <Link to="#" className="readon consultant appointment get-light">Get Started</Link>
                </div>
            </>
        )
    },
    {
        key: 'tab3',
        title: 'Need Help?',
        content: (
            <>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.</p>
                <ul className="check-arrow">
                    <li>Interactively monetize customer</li>
                    <li>Enthusiastically underwhelm distinctive</li>
                    <li>Energistically fabrica intuitive infomediaries</li>
                    <li>Continually expedite standards compliant</li>
                </ul>
                <div className="rs-btn mt-37">
                    <Link to="/contact-us-1" className="readon consultant appointment get-light">Get Started</Link>
                </div>
            </>
        )
    }
];

const AboutSection = () => {
    return (
        <div id="rs-about" className="rs-about about-style3 gray-bg29 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container custom8">
                <div className="row y-middle">
                    <div className="col-lg-5 md-mb-50">
                        <div className="about-wrapper">
                            <div className="about-img">
                                <img src={aboutImg} alt="About" />
                                <div className="rocket-wrap">
                                    <img className="spiner" src={businessSuccessImg} alt="Business Success" />
                                    <div className="icon-part">
                                        <img src={rocketImg} alt="Rocket" />
                                    </div>
                                </div>
                                <div className="about-counter">
                                    <div className="count-number">
                                        <CountUp className='rs-count' end={25} duration={6} />
                                        <span className="prefix">+</span>
                                    </div>
                                    <span className="title">Years Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-110 md-pl-15">
                        <div className="about-wrapper">
                            <div className="sec-title">
                                <h2 className="title title11">
                                    We are the leader in business consulting
                                </h2>
                                <div className="rs-tab-main tab-style1">
                                    <div className="tab-main-wrap">
                                        <Tabs defaultActiveKey="tab1" id="about-tabs">
                                            {tabsData.map(tab => (
                                                <Tab eventKey={tab.key} title={tab.title} key={tab.key}>
                                                    <div className="content-teb-area full-sec">
                                                        <div className="content-left-area">
                                                            {tab.content}
                                                        </div>
                                                    </div>
                                                </Tab>
                                            ))}
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
