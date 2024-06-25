import React from 'react';
import CountUp from 'react-countup';
import CounterWithProgress from '../../components/CountUp/CounterWithProgress';
import image3 from '../../assets/images/choose/style2/img3.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const WhyChooseSection = () => {
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
        <div className="rs-choose choose-style2 choose-modify1 pt-140 pb-140 md-pt-80 md-pb-120">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-7 pr-60 md-pr-15 md-mb-50">
                        <SectionTitle
                            otherClass={'mb-30'}
                            title={'Join The Community To Give About Our Company.'}
                            titleClass={'title title11 blue-subnormal'}
                            details={'Mauris sit amet massa vitae tortor condimentum lacinia quis. Cras adipiscing enim eu turpis the egestas pretium. Turpis egestas integer eget aliquet nibh praesent tristique magna sit.'}
                        />

                        <div className="rs-counter counter-style1 counter-modify13 pb-25">
                            <CounterWithProgress counters={counters} />
                        </div>

                        <ul className="bnr-btn-wrap">
                            <li><Link className="readon consultant get-green3 blue-quote1" to="/contact-us-1">Get a Quote</Link></li>
                            <li>
                                <Link className="readon consultant phone-number blue-phone1" to="/contact-us-1">
                                    <span className="btn-icon">
                                        <i className="ri-phone-fill"></i>
                                    </span>
                                    <span className="btn-text">(00) 123 456 789</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="images-part">
                            <img className=" wow fadeInRight" src={image3} alt="Images" />
                            <div className="choose-counter-wrap">
                                <div className="choose-counter wow fadeInUp">
                                    <div className="count-number">
                                        <CountUp className='rs-count' end={15} duration={2} />
                                        <span className="prefix">+</span>
                                    </div>
                                    <span className="title">Successful Projects</span>
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