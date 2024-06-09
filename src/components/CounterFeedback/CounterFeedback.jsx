import React from 'react';
import CountUp from 'react-countup';

const CounterFeedback = ({counters,startLogo,peoples}) => {
    return (
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
    );
};

export default CounterFeedback;