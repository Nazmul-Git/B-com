import React from 'react';
import CountUp from 'react-countup';

const FeatureCounter = ({ number, prefix, title, icon, mainClass, otherClass,listClass }) => {
    return (
        <div className={`${mainClass ? mainClass : 'feature-counter'} ${otherClass ? otherClass : 'count-box1'}`}>
            <div className={`${listClass ? listClass : 'feature'}-counter-list`}>
                <div className="count-text">
                    <div className="count-number">
                        <CountUp className='rs-count' end={number} duration={6} />
                        <span className="prefix">{prefix}</span>
                    </div>
                    <span className="title"><i className={`ri-${icon}`}></i> {title}</span>
                </div>
            </div>
        </div>
    );
};

export default FeatureCounter;
