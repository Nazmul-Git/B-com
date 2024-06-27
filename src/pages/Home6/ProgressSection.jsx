import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import progressImg1 from '../../assets/images/skillbar/style1/img1.png';
import progressShape1 from '../../assets/images/skillbar/style1/shape1.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProgressSection = () => {
    return (
        <div className="rs-skillbar skillbar-style1 bg32 pt-130 pb-130 md-pt-80 md-pb-60">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="skillbar-wrap">
                            <img src={progressImg1} alt="Images" />
                            <div className="shape-img">
                                <img className="wow horizontal2" src={progressShape1} alt="Images" />
                            </div>
                            <div className="skillbar-counter count-box1 veritcal3">
                                <div className="skillbar-counter-list">
                                    <div className="count-text">
                                        <div className="count-number">
                                            <CountUp className='rs-count' start={0} end={95} duration={3} suffix="%" />
                                        </div>
                                        <span className="title">Business Growth</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle
                            subText={true}
                            subtextTitle={'your path to success capital'}
                            otherTitleClass={'pb-26'}
                            title={'We know how to develop business marketing globally'}
                            detailClass={'desc pb-30'}
                            details={'Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Fringilla urna porttitor rhoncus dolor purus non enim.'}
                        />
                        <div className="cl-skill-bar">
                            <ProgressBar duration={2000} targetProgress={80} title={'Business Strategy'} bgBarColor={'rgba(240, 92, 78, 0.2)'} bgBarProgressColor={'#f05c4e'} height={'7px'} barPercentageText={true}/>
                            <ProgressBar duration={2000} targetProgress={75} title={'Cyber Security'} bgBarColor={'rgba(240, 92, 78, 0.2)'} bgBarProgressColor={'#f05c4e'} height={'7px'} barPercentageText={true}/>
                            <ProgressBar duration={2000} targetProgress={95} title={'Softwar Development'} bgBarColor={'rgba(240, 92, 78, 0.2)'} bgBarProgressColor={'#f05c4e'} height={'7px'} barPercentageText={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressSection;
