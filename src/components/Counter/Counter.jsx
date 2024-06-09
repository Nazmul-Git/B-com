import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ counterData }) => {
    return (
        <div className="row">
            {counterData.map((counter, index) => (
                <div className="col-xl-3 col-md-6 xl-mb-30" key={index}>
                    <div className={`rs-counter-list ${counter.bgClass}`}>
                        <div className="count-text">
                            <span className="title">{counter.title}</span>
                            <div className="count-number">
                                <CountUp className='rs-count' end={counter.count} duration={2} />
                                <span className="prefix">+</span>    
                            </div>
                            <p className="desc">{counter.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Counter;
