import React from 'react';
import  CountUp  from 'react-countup';
import ProgressBar from '../ProgressBar/ProgressBar';

const Counter = ({ counters }) => {

    return (
        <div className="row">
            {counters.slice(0, 2).map(counter => (
                <div className="col-lg-6 pr-30 md-pr-15 md-mb-10" key={counter.id}>
                    <div className="rs-counter-list">
                        <div className="count-text">
                            <div className="count-number">
                                <CountUp className='rs-count' end={counter.percentage} duration={2} />
                                <span className="prefix">%</span>
                            </div>
                            <span className="title">{counter.title}</span>
                        </div>
                    </div>
                    <ProgressBar duration={2000} targetProgress={counter.targetProgress} title={'Business Strategy'} />
                </div>
            ))}
        </div>
    );
};

export default Counter;
 