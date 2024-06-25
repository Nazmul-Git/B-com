import React from 'react';
import CountUp from 'react-countup';

const FeatureCounter = ({ number, prefix, title }) => {
    return (
        <div className="feature-counter count-box1">
            <div className="feature-counter-list">
                <div className="count-text">
                    <div className="count-number">
                        <CountUp className='rs-count' end={number} duration={6} />
                        <span className="prefix">{prefix}</span>
                    </div>
                    <span className="title">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default FeatureCounter;
