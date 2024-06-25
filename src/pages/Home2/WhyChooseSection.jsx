import React from 'react';
import CounterWithProgress from '../../components/CountUp/CounterWithProgress';
import CounterFeedback from '../../components/CounterFeedback/CounterFeedback';
import startLogo from '../../assets/images/choose/style1/star-logo.png';
import peoples from '../../assets/images/choose/style1/peoples.png';
import pieImage from '../../assets/images/choose/style1/pie-new.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const WhyChooseSection = ({ chooseImg1, chooseImg2 }) => {
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
        <div className="rs-choose choose-style2 bg27 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        {/* <div className="sec-title mb-20">
                            <h2 className="title title11">
                                Strategy for every stage in our client's journey
                            </h2>
                            <p className="desc desc8 pb-15">
                                Placerat vestibulum lectus mauris ultrices eros in. At urna laron condimen mattisla rome pellentesque id nibh. Massa id neque aliquam vestibulum morbi. In ante metus dicat tempor com.
                            </p>
                            <h5 className="title title9">
                                We have 35+ years of experience. We offer marketing and consulting services
                            </h5>
                        </div> */}
                        <SectionTitle
                            otherClass={'mb-20'}
                            titleClass={'title title11'}
                            title={"Strategy for every stage in our client's journey"}
                            detailClass={'desc desc8 pb-15'}
                            details={'Placerat vestibulum lectus mauris ultrices eros in. At urna laron condimen mattisla rome pellentesque id nibh. Massa id neque aliquam vestibulum morbi. In ante metus dicat tempor com.'}
                            titleClass2={'title title9'}
                            title2={'We have 35+ years of experience. We offer marketing and consulting services'}

                        />
                        <div className="rs-counter counter-style1 counter-modify8 pt-20">
                            <CounterWithProgress counters={counters} otherClass={'pr-30 md-pr-15 md-mb-10'} />
                            <CounterFeedback counters={counters} peoples={peoples} startLogo={startLogo} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-wrap2">
                            <img className="main-img wow fadeInRight" src={chooseImg1} alt="Images" />
                            <div className="image-shape wow fadeInUp">
                                <img src={chooseImg2} alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;